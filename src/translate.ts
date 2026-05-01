import type { StatementCode } from '../data';
import type { LangCode, StatementConfig, StatementType } from './types';

export class Translate {
  private static cache = new Map< StatementCode, StatementConfig >();
  private static fallback: LangCode = 'en';

  private static prefix ( code: StatementCode ) : StatementType {
    return code.match( /^[A-Z]+/ )?.[ 0 ]! as StatementType;
  }
}
