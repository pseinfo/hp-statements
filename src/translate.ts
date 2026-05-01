import type { StatementCode } from '../data';
import type { LangCode, StatementConfig, StatementType } from './types';
import { EUHCode, HCode, PCode } from '../data';

type TranslationMap = { [ K in StatementType ]: Record< string, string > };

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

  public static async allOf < C extends StatementCode > (
    code: C
  ) : Promise< StatementConfig[ 'translations' ] > {
    return ( await this.load( code ) )?.translations ?? {};
  }

  public static async all ( lang: LangCode ) : Promise< TranslationMap > {
    const out: TranslationMap = { H: {}, P: {}, EUH: {} };

    const process = async ( codes: readonly StatementCode[], bucket: StatementType ) => {
      for ( const code of codes ) {
        const s = await this.load( code );
        const t = s?.translations[ lang ] ?? s?.translations[ this.fallback ];

        if ( t ) out[ bucket ][ code ] = t;
      }
    };

    await Promise.all( [
      process( HCode, 'H' ),
      process( PCode, 'P' ),
      process( EUHCode, 'EUH' )
    ] );

    return out;
  }
}
