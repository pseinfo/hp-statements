import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import stringify from 'json-stable-stringify';

import type { StatementConfig } from '../src/types';
import { LangCode, StatementType } from '../src/types';

const REPO_URL = 'https://raw.githubusercontent.com/mhchem/hpstatements/master/clp';

// ---- TYPEDEF ----

type StatementList = Record< string, StatementConfig >;
type StatementMap = { [ P in StatementType ]?: StatementList };
type LangMap = { [ P in StatementType ]?: Record< string, string > };

interface RawStatement {
  code: string;
  phrase: string;
}

// --- FETCH ----

async function fetchLanguage ( lang: LangCode ) : Promise< RawStatement[] > {
  console.log( `... for "${ lang.toUpperCase() }" ...` );

  const res = await fetch( `${ REPO_URL }/hpstatements-${ lang }-latest.json` );
  if ( ! res.ok ) return [];

  const json = await res.json();
  if ( ! json.statements ) return [];

  return Object.entries( json.statements ).map( ( [ key, phrase ] ) => ( {
    code: key.split( '/' ).pop()!, phrase: phrase as string
  } ) );
}

async function fetchStatements () : Promise< StatementMap > {
  console.log( `Fetching statements ...` );

  const map: StatementMap = {};

  for ( const lang of LangCode ) {
    for ( const { code, phrase } of await fetchLanguage( lang ) ) {
      const prefix = StatementType.find( p => code.startsWith( p ) );
      if ( ! prefix ) continue;

      ( ( map[ prefix ] ??= {} )[ code ] ??= { code, translations: {} } ).translations[ lang ] = phrase;
    }
  }

  return map;
}

// ---- STATEMENTS ----

function statement2Str ( s: StatementConfig ) : string {
  return ( stringify( s, { space: 2 } ) ?? '{}' )
    .replace( /\u00A0/g, ' ' ).replace( /[\u200B-\u200D\uFEFF]/g, '' )
    .replace( /\\u202[89]/g, '' ).replace( /\r\n/g, '\n' ).trim()
    .replace( /"((?:\\.|[^"\\])*)"/g, ( _, v ) => `'${ v.replace( /'/g, "\\'" ) }'` )
    .replace( /"([^"]*)"/g, ( _, v ) => `'${ v.replace( /'/g, "\\'" ).replace( /\\"/g, '"' ) }'` )
    .replace( /'([a-zA-Z_$][a-zA-Z0-9_$]*)':/g, '$1:' );
}

function codeName ( code: string ) : string {
  const name = code.replace( /\+/g, '_' );
  return /[a-z]/.test( name ) ? name + '_' : name;
}

async function processStatements ( map: StatementMap ) : Promise< void > {
  console.log( `Processing statements ...` );

  for ( const [ prefix, list ] of Object.entries( map ) ) {
    const dir = join( process.cwd(), 'data/code', prefix );
    await mkdir( dir, { recursive: true } );

    for ( const [ code, s ] of Object.entries( list ) ) {
      const file = join( dir, `${ codeName( code ) }.ts` );

      let out = '';
      out += `import type { StatementConfig } from '../../../src/types';\n\n`;
      out += `export default ( ${ statement2Str( s ) } ) as const satisfies StatementConfig;\n`;

      await writeFile( file, out, 'utf8' );
    }
  }
}

// ---- JSON ----

async function saveJson ( map: StatementMap ) : Promise< void > {
  console.log( `Saving JSON files ...` );

  const langDir = join( process.cwd(), 'data/lang' );
  await mkdir( langDir, { recursive: true } );

  for ( const lang of LangCode ) {
    const out: LangMap = {};

    for ( const [ prefix, list ] of Object.entries( map ) as [ StatementType, StatementList ][] )
      for ( const [ code, s ] of Object.entries( list ) )
        if ( s.translations[ lang ] )
          ( out[ prefix ] ??= {} )[ code ] = s.translations[ lang ];

    const file = join( langDir, `${ lang }.json` );
    await writeFile( file, JSON.stringify( out, null, 2 ) + '\n', 'utf8' );
  }
}

// ---- CODES ----

function codes2Arr ( codes: string[], maxLength = 100 ) : string {
  const lines: string[] = [];
  let cur: string[] = [], curLen = 2;

  for ( const code of codes ) {
    const token = `'${ code }'`, addLen = token.length + ( cur.length > 0 ? 2 : 0 );

    if ( curLen + addLen > maxLength ) {
      lines.push( `  ${ cur.join( ', ' ) }`);
      cur = [ token ], curLen = 2 + token.length;
    } else {
      cur.push( token );
      curLen += addLen;
    }
  }

  if ( cur.length ) lines.push( `  ${ cur.join( ', ' ) }` );
  return `[\n${ lines.join( ',\n' ) }\n]`;
}

async function generateCodes ( map: StatementMap ) : Promise< void > {
  console.log( `Build index ...` );

  const filePath = join( process.cwd(), 'data/index.ts' );
  const prefixes = [];
  let out = '';

  for ( const [ prefix, list ] of Object.entries( map ) ) {
    prefixes.push( prefix );

    out += `export type ${ prefix }Code = ( typeof ${ prefix }Code )[ number ];\n`;
    out += `export const ${ prefix }Code = ${ codes2Arr( Object.keys( list ).sort() ) } as const;\n\n`;
  }

  out += `export type StatementCode = ${ prefixes.map( p => `${ p }Code` ).join( ' | ' ) };\n`;
  await writeFile( filePath, out, 'utf8' );
}

// ---- RUNNER ----

( async () => {
  try {
    const map = await fetchStatements()
    await processStatements( map );
    await saveJson( map );
    await generateCodes( map );
  }
  catch ( err ) { console.error( err ) }
} )();
