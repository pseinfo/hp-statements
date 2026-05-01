import { LANGUAGES } from '../src/types';

const REPO_URL = 'https://raw.githubusercontent.com/mhchem/hpstatements/master/clp';

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
