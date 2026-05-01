import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'P301',
  translations: {
    bg: 'ПРИ ПОГЛЪЩАНЕ:',
    cs: 'PŘI POŽITÍ:',
    da: 'I TILFÆLDE AF INDTAGELSE:',
    de: 'BEI VERSCHLUCKEN:',
    el: 'ΣΕ ΠΕΡΙΠΤΩΣΗ ΚΑΤΑΠΟΣΗΣ:',
    en: 'IF SWALLOWED:',
    es: 'EN CASO DE INGESTIÓN:',
    et: 'ALLANEELAMISE KORRAL:',
    fi: 'JOS KEMIKAALIA ON NIELTY:',
    fr: 'EN CAS D’INGESTION:',
    ga: 'MÁ SHLOGTAR:',
    hr: 'AKO SE PROGUTA:',
    hu: 'LENYELÉS ESETÉN:',
    it: 'IN CASO DI INGESTIONE:',
    lt: 'PRARIJUS:',
    lv: 'NORĪŠANAS GADĪJUMĀ:',
    mt: 'JEKK JINBELA’:',
    nl: 'NA INSLIKKEN:',
    pl: 'W PRZYPADKU POŁKNIĘCIA:',
    pt: 'EM CASO DE INGESTÃO:',
    ro: 'ÎN CAZ DE ÎNGHIȚIRE:',
    sk: 'PO POŽITÍ:',
    sl: 'PRI ZAUŽITJU:',
    sv: 'VID FÖRTÄRING:'
  }
} ) as const satisfies StatementConfig;
