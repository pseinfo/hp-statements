import type { EUHCode, HCode, PCode, StatementCode } from '../data';

/** ISO 639-1 language codes supported by the library. */
export type LangCode = ( typeof LangCode )[ number ];
export const LangCode = [
  'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
  'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv'
] as const;

/** GHS statement types. */
export type StatementType = ( typeof StatementType )[ number ];
export const StatementType = [ 'H', 'P', 'EUH' ] as const;

/** Configuration object for a single GHS statement. */
export type StatementConfig = {
  /** The unique GHS code (e.g., 'H200'). */
  code: string;
  /** Localized text for the statement, indexed by language code. */
  translations: { [ K in LangCode ]?: string };
};

/** Full map of translations for all GHS statement types. */
export type TranslationMap = {
  [ T in StatementType ]: {
    [ K in StatementCode ]: string | undefined;
  };
};

/** Template context for variables in GHS statements. */
export type Context = Record< string | number, unknown >;

/** A single GHS statement entry in a collection. */
export type Statement<
  C extends StatementCode = StatementCode,
  T extends Context = {}
> = {
  /** The GHS code. */
  readonly code: C;
  /** Optional context for variable replacement. */
  context?: T;
};

/** Assembled Hazard and Precautionary statements object. */
export type HazardStatements = {
  /** List of hazard statements (H-phrases). */
  hazard?: Statement< HCode >[];
  /** List of precautionary statements (P-phrases). */
  precautionary?: Statement< PCode >[];
  /** List of EU-specific hazard statements (EUH-phrases). */
  eu?: Statement< EUHCode >[];
};
