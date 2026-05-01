import type { StatementCode } from '../data';
import type { LangCode, StatementConfig } from './types';

export class Translate {
  private static cache = new Map< StatementCode, StatementConfig >();
  private static fallback: LangCode = 'en';
}
