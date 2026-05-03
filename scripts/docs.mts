import { execSync } from 'node:child_process';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { StatementType } from '../src/types';
import { LangCode } from '../src/types';

type Statements = { [ K in StatementType ]?: Record< string, string > };

const DATE = new Date();
const VERSION = execSync( 'git describe --tags --abbrev=0' ).toString().trim();
const LANG_DIR = join( process.cwd(), 'data/lang' );
const TEMPLATE_FILE = join( process.cwd(), 'scripts/template.html' );
const DOCS_DIR = join( process.cwd(), 'docs' );

async function loadLanguageData ( lang: LangCode ) : Promise< Statements > {
  const file = join( LANG_DIR, `${ lang }.json` );
  const content = await readFile( file, 'utf-8' );

  return JSON.parse( content ) as Statements;
}

( async () => {
  console.log( `Generating documentation ...` );

  const template = ( await readFile( TEMPLATE_FILE, 'utf-8' ) )
    .replace( '{{LANGS}}', '' )
    .replace( '{{H_CODES}}', '' )
    .replace( '{{P_CODES}}', '' )
    .replace( '{{EUH_CODES}}', '' )
    .replace( '{{YEAR}}', String( DATE.getFullYear() ) )
    .replace( '{{DATE}}', DATE.toLocaleDateString( 'en' ) )
    .replace( '{{VERSION}}', VERSION );

  await mkdir( DOCS_DIR, { recursive: true } );
  await writeFile( join( DOCS_DIR, 'index.html' ), template, 'utf8' );

  console.log( `Documentation generated in ./docs/index.html` );
} )();
