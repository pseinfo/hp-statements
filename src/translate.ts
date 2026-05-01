import type { StatementCode } from '../data';
import type { LangCode, StatementConfig, StatementType } from './types';

export class Translate {
  private static cache = new Map< StatementCode, StatementConfig >();
  private static readonly fallback: LangCode = 'en';

  private static prefix ( code: StatementCode ) : StatementType {
    return code.match( /^[A-Z]+/ )?.[ 0 ]! as StatementType;
  }

  private static async load ( code: StatementCode ) : Promise< StatementConfig | undefined > {
    if ( this.cache.has( code ) ) return this.cache.get( code );

    const prefix = this.prefix( code );
    if ( ! prefix ) return;

    try {
      const mod = await import( `../data/${ prefix }/${ code }.ts` );
      const data = mod.default as StatementConfig;

      this.cache.set( code, data );
      return data;
    } catch { return }
  }

  public static async one < C extends StatementCode > (
    code: C, lang: LangCode, fallback: LangCode = this.fallback
  ) : Promise< string | undefined > {
    const s = await this.load( code );
    return s?.translations[ lang ] ?? s?.translations[ fallback ];
  }
}
