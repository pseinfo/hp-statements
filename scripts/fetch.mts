import { LangCode, Statement, StatementPrefix } from '../src/types';

const REPO_URL = 'https://raw.githubusercontent.com/mhchem/hpstatements/master/clp';

type StatementList = Record< string, Statement >;
type StatementMap = { [ P in StatementPrefix ]?: StatementList };

interface RawStatement {
  code: string;
  phrase: string;
}

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

( async () => {
  try { console.log( await fetchStatements() ) }
  catch ( err ) { console.error( err ) }
} )();
