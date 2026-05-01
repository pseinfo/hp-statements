export type LangCode = ( typeof LangCode )[ number ];
export const LangCode = [
  'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
  'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv'
] as const;

export type StatementPrefix = ( typeof StatementPrefix )[ number ];
export const StatementPrefix = [ 'H', 'P', 'EUH' ] as const;

export type Statement = {
  code: string;
  translations: { [ K in LangCode ]?: string };
};

export type HazardStatements = {
  hazard?: string[];
  precautionary?: string[];
  eu?: string[];
};
