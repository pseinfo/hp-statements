import { execSync } from 'node:child_process';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { StatementType } from '../src/types';
import { LangCode } from '../src/types';

type LangData = {
  [ L in LangCode ]: {
    [ K in StatementType ]: Record< string, string >;
  };
};

const VERSION = execSync( 'git describe --tags --abbrev=0' ).toString().trim();
const DATE = new Date();

const LANG_DIR = join( process.cwd(), 'data/lang' );
const TEMPLATE_FILE = join( process.cwd(), 'scripts/template.html' );
const DOCS_DIR = join( process.cwd(), 'docs' );

async function loadLanguageData () : Promise< LangData > {
  console.log( `Load language data ...` );
  const data: LangData = {} as LangData;

  for ( const lang of LangCode ) {
    console.log( `... for "${ lang.toUpperCase() }" ...` );

    const file = join( LANG_DIR, `${ lang }.json` );
    const content = await readFile( file, 'utf-8' );
    data[ lang ] = JSON.parse( content );
  }

  return data;
}

( async () => {
  console.log( `Generating documentation ...` );

  const data = await loadLanguageData();
  const langOptions = LangCode.map( lang =>
    `<option value="${ lang }" ${ lang === 'en' ? 'selected' : '' }>${ lang.toUpperCase() }</option>`
  ).join( '' );

  const template = ( await readFile( TEMPLATE_FILE, 'utf-8' ) )
    .replace( '{{LANGS}}', langOptions )
    .replace( '{{DATA}}', JSON.stringify( data ) )
    .replace( '{{YEAR}}', String( DATE.getFullYear() ) )
    .replace( '{{DATE}}', DATE.toLocaleDateString( 'en' ) )
    .replace( '{{VERSION}}', VERSION );

  await mkdir( DOCS_DIR, { recursive: true } );
  await writeFile( join( DOCS_DIR, 'index.html' ), template, 'utf8' );

  console.log( `Documentation generated in ./docs/index.html` );
} )();
