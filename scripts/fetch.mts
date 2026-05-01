import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import stringify from 'json-stable-stringify';

import type { Statement } from '../src/types';
import { LangCode, StatementPrefix } from '../src/types';

const REPO_URL = 'https://raw.githubusercontent.com/mhchem/hpstatements/master/clp';

// ---- TYPEDEF ----

type StatementList = Record< string, Statement >;
type StatementMap = { [ P in StatementPrefix ]?: StatementList };

interface RawStatement {
  code: string;
  phrase: string;
}

// --- FETCH ----

async function fetchLanguage ( lang: LangCode ) : Promise< RawStatement[] > {
  const res = await fetch( `${ REPO_URL }/hpstatements-${ lang }-latest.json` );
  if ( ! res.ok ) return [];

  const json = await res.json();
  if ( ! json.statements ) return [];

  return Object.entries( json.statements ).map( ( [ key, phrase ] ) => ( {
    code: key.split( '/' ).pop()!, phrase: phrase as string
  } ) );
}

async function fetchStatements () : Promise< StatementMap > {
  const map: StatementMap = {};

  for ( const lang of LangCode ) {
    for ( const { code, phrase } of await fetchLanguage( lang ) ) {
      const prefix = StatementPrefix.find( p => code.startsWith( p ) );
      if ( ! prefix ) continue;

      ( ( map[ prefix ] ??= {} )[ code ] ??= { code, translations: {} } ).translations[ lang ] = phrase;
    }
  }

  return map;
}

// ---- STATEMENTS ----

function statement2Str ( s: Statement ) : string {
  return stringify( s, { space: 2 } )!
    .replace( /"([^"]*)"/g, ( _, v ) => `'${ v.replace( /'/g, "\\'" ).replace( /\\"/g, '"' ) }'` )
    .replace( /'([a-zA-Z_$][a-zA-Z0-9_$]*)':/g, '$1:' );
}

async function processStatements ( map: StatementMap ) : Promise< void > {
  for ( const [ prefix, list ] of Object.entries( map ) ) {
    const dir = join( process.cwd(), 'data', prefix );
    await mkdir( dir, { recursive: true } );

    for ( const [ code, s ] of Object.entries( list ) ) {
      const file = join( dir, `${ code.replace( /\+/g, '_' ) }.ts` );
      let out = '';

      out += `import type { Statement } from '../../src/types';\n\n`;
      out += `export default ( ${ statement2Str( s ) } ) as const satisfies Statement;\n`;

      await writeFile( file, out, 'utf8' );
    }
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

async function generateCodes( map: StatementMap ) : Promise< void > {
  const filePath = join( process.cwd(), 'src/codes.ts' );
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
    await generateCodes( map );
  }
  catch ( err ) { console.error( err ) }
} )();
