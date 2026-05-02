import type { EUHCode, HCode, PCode, StatementCode } from '../data';

export type LangCode = ( typeof LangCode )[ number ];
export const LangCode = [
  'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
  'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv'
] as const;

export type StatementType = ( typeof StatementType )[ number ];
export const StatementType = [ 'H', 'P', 'EUH' ] as const;

export type StatementConfig = {
  code: string;
  translations: { [ K in LangCode ]?: string };
};

export type TranslationMap = {
  [ T in StatementType ]: {
    [ K in StatementCode ]: string | undefined;
  };
};

export type Context = Record< string | number, unknown >;

export type Statement<
  C extends StatementCode = StatementCode,
  T extends Context = {}
> = {
  readonly code: C;
  context?: T;
};

export type HazardStatements = {
  hazard?: Statement< HCode >[];
  precautionary?: Statement< PCode >[];
  eu?: Statement< EUHCode >[];
};
