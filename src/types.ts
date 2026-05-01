export type LangCode = ( typeof LangCode )[ number ];
export const LangCode = [
  'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
  'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv'
] as const;

export type Statement = {
  code: string;
  translations: { [ K in LangCode ]?: string };
  notes?: string;
  deprecated?: boolean;
};

export type HazardStatements = {
  hazard?: string[];
  precautionary?: string[];
  eu?: string[];
};
