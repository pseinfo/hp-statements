import type { StatementCode } from '../data';
import type { LangCode, StatementConfig, StatementType, TranslationMap } from './types';

import { EUHCode, HCode, PCode } from '../data';
import { Assert } from './assert';

'use strict';


/**
 * Translator class for retrieving localized text for GHS hazard and precautionary statements.
 * Handles loading statement configurations and providing translations for specific languages.
 */
export class Translator {
  private static cache = new Map< StatementCode, StatementConfig >();
  private static readonly fallback: LangCode = 'en';

  /**
   * Converts a statement code to its corresponding data file path.
   * @param code The statement code (e.g., 'H200', 'P101').
   * @returns The relative path to the statement's data file.
   * @private
   */
  private static code2path ( code: StatementCode ) : string {
    Assert.assertStatementCode( code );

    const prefix = code.match( /^[A-Z]+/ )?.[ 0 ]!;
    const name = code.replace( /\+/g, '_' );

    return `../data/${ prefix }/${ name }.js`;
  }

  /**
   * Loads the configuration for a specific statement code, with caching.
   * @param code The statement code to load.
   * @returns A promise that resolves to the statement configuration or undefined if not found.
   * @private
   */
  private static async load ( code: StatementCode ) : Promise< StatementConfig | undefined > {
    if ( this.cache.has( code ) ) return this.cache.get( code );

    try {
      const mod = await import( this.code2path( code ) );
      const data = mod.default as StatementConfig;

      this.cache.set( code, data );
      return data;
    } catch { return }
  }

  /**
   * Retrieves the translation for a single statement code in a specific language.
   * @param code The statement code to translate.
   * @param lang The target language code.
   * @param fallback The fallback language code (defaults to 'en').
   * @returns A promise that resolves to the translated string or undefined.
   */
  public static async one < C extends StatementCode > (
    code: C, lang: LangCode, fallback: LangCode = this.fallback
  ) : Promise< string | undefined > {
    const s = await this.load( code );
    return s?.translations[ lang ] ?? s?.translations[ fallback ];
  }

  /**
   * Retrieves all available translations for a single statement code.
   * @param code The statement code to retrieve translations for.
   * @returns A promise that resolves to a map of language codes to translated strings.
   */
  public static async allOf < C extends StatementCode > (
    code: C
  ) : Promise< StatementConfig[ 'translations' ] > {
    return ( await this.load( code ) )?.translations ?? {};
  }

  /**
   * Retrieves all statement translations for a specific language.
   * @param lang The target language code.
   * @returns A promise that resolves to a full map of translations indexed by statement type and code.
   */
  public static async all ( lang: LangCode ) : Promise< TranslationMap > {
    const out: TranslationMap = { H: {}, P: {}, EUH: {} } as TranslationMap;

    const process = async ( codes: readonly StatementCode[], bucket: StatementType ) => {
      const results = await Promise.all( codes.map( code => this.one( code, lang ) ) );
      codes.forEach( ( code, i ) => out[ bucket ][ code ] = results[ i ] );
    };

    await Promise.all( [
      process( HCode, 'H' ),
      process( PCode, 'P' ),
      process( EUHCode, 'EUH' )
    ] );

    return out;
  }
}
