import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { LANGUAGES } from '../src/types';

const REPO_URL = 'https://raw.githubusercontent.com/mhchem/hpstatements/master/clp';

type Statements = Record< string, {
  code: string;
  translations: { [ K in LANGUAGES ]?: string };
  notes?: string;
} >;

interface RawStatement {
  code: string;
  phrase: string;
  notes?: string;
}

async function fetchLanguage ( lang: string ) : Promise< RawStatement[] > {
  console.log( `Fetching ${ lang } ...` );
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

async function fetchStatements () : Promise< Statements > {
  const statements: Statements = {};

  for ( const lang of LANGUAGES ) {
    for ( const s of await fetchLanguage( lang ) ) {
      statements[ s.code ] ??= { code: s.code, translations: {}, notes: s.notes };
      statements[ s.code ].translations[ lang ] = s.phrase;
    }
  }

  return statements;
}

async function saveStatements ( statements: Statements ) : Promise< void > {
  const dataDir = join( process.cwd(), 'data' );
  await mkdir( dataDir, { recursive: true } );

  void [ statements ];
}

( async () => {
  try {
    const statements = await fetchStatements();
    saveStatements( statements );
  } catch ( err ) {
    console.error( err );
  }
} )();