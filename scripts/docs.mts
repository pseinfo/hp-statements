import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { LangCode } from '../src/types';

const DATA_DIR = join( process.cwd(), 'data/code' );
const DOCS_DIR = join( process.cwd(), 'docs' );
