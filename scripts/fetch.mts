import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { LangCode, Statement } from '../src/types';

const REPO_URL = 'https://raw.githubusercontent.com/mhchem/hpstatements/master/clp';
const INDENT = '  ';

type StatementCollection = Record< string, Statement >;

interface RawStatement {
  code: string;
  phrase: string;
  notes?: string;
}

async function fetchLanguage ( lang: string ) : Promise< RawStatement[] > {
  console.log( `... for ${ lang } ...` );
  const response = await fetch( `${ REPO_URL }/hpstatements-${ lang }-latest.json` );

  if ( ! response.ok ) {
    console.error( `Failed to fetch ${ lang }: ${ response.statusText }` );
    return [];
  }

  const data = await response.json();
  if ( ! data.statements ) return [];

  return Object.entries( data.statements ).map( ( [ key, phrase ] ) => {
    const parts = key.split( '/' );
    const code = parts[ parts.length - 1 ];

    return { code, phrase: phrase as string };
  } );
}

async function fetchStatements () : Promise< StatementCollection > {
  console.log( `Fetching statements ...` );
  const statements: StatementCollection = {};

  for ( const lang of LangCode ) {
    for ( const s of await fetchLanguage( lang ) ) {
      statements[ s.code ] ??= { code: s.code, translations: {}, notes: s.notes };
      statements[ s.code ].translations[ lang ] = s.phrase;
    }
  }

  return statements;
}

function tsObjectLiteral ( value: Statement ) : string {
  const format = ( val: any, level: number ) : string => {
    if ( val === null ) return 'null';
    if ( typeof val === 'string' ) return `'${ val.replace( /'/g, '\'' ) }'`;
    if ( typeof val === 'number' || typeof val === 'boolean' ) return String( val );

    if ( Array.isArray( val ) ) {
      if ( val.length === 0 ) return '[]';
      return `[\n${ val.map( v => INDENT.repeat( level + 1 ) + format( v, level + 1 ) ).join( ',\n' ) }\n${
        INDENT.repeat( level )
      }]`;
    }

    if ( typeof val === 'object' ) {
      const entries = Object.entries( val );
      if ( entries.length === 0 ) return '{}';

      return `{\n${ entries.map( ( [ k, v ] ) => {
        const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test( k ) ? k : `'${ k.replace( /'/g, '\'' ) }'`;
        return `${ INDENT.repeat( level + 1 ) }${ key }: ${ format( v, level + 1 ) }`;
      } ).join( ',\n' ) }\n${ INDENT.repeat( level ) }}`;
    }

    return 'undefined';
  };

  return format( value, 0 );
}

async function saveStatementFile ( filePath: string, code: string, data: Statement ) : Promise< string > {
  const content = `import { Statement } from '../../src/types';\n\n` +
    `export default ( ${ tsObjectLiteral( data ) } ) as const satisfies Statement;\n`;

  await writeFile( filePath, content, 'utf8' );
  return code;
}

async function saveCodes ( codes: string[] ) : Promise< void > {
  console.log( `Saving generated codes to src/codes.ts ...` );

  const filePath = join( process.cwd(), 'src/codes.ts' );
  const hCodes = codes.filter( c => c.startsWith( 'H' ) );
  const pCodes = codes.filter( c => c.startsWith( 'P' ) );
  const euhCodes = codes.filter( c => c.startsWith( 'EUH' ) );

  const content = `export type HCode = ${ hCodes.map( c => `'${ c }'` ).join( ' | ' ) };\n` +
    `export type PCode = ${ pCodes.map( c => `'${ c }'` ).join( ' | ' ) };\n` +
    `export type EUHCode = ${ euhCodes.map( c => `'${ c }'` ).join( ' | ' ) };\n\n` +
    `export type StatementCode = HCode | PCode | EUHCode;`;

  await writeFile( filePath, content, 'utf8' );
}

async function processStatements ( statements: StatementCollection ) : Promise< void > {
  console.log( `Processing statements & codes ...` );

  const dataDir = join( process.cwd(), 'data' );
  await mkdir( dataDir, { recursive: true } );

  const codes: string[] = [];

  for ( const [ code, data ] of Object.entries( statements ) ) {
    let subDir = code.startsWith( 'H' ) ? 'h'
      : code.startsWith( 'P' ) ? 'p'
      : code.startsWith( 'EUH' ) ? 'euh'
      : 'other';

    const dir = join( dataDir, subDir );
    const filePath = join( dir, `${ code.replace( /\+/g, '_' ) }.ts` );

    await mkdir( dir, { recursive: true } );
    codes.push( await saveStatementFile( filePath, code, data ) );
  }

  await saveCodes( codes );
}

( async () => {
  try { processStatements( await fetchStatements() ) }
  catch ( err ) { console.error( err ) }
} )();
