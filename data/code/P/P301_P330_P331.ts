import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'P301+P330+P331',
  translations: {
    bg: 'ПРИ ПОГЛЪЩАНЕ: изплакнете устата. НЕ предизвиквайте повръщане.',
    cs: 'PŘI POŽITÍ: Vypláchněte ústa. NEVYVOLÁVEJTE zvracení.',
    da: 'I TILFÆLDE AF INDTAGELSE: Skyl munden. Fremkald IKKE opkastning.',
    de: 'BEI VERSCHLUCKEN: Mund ausspülen. KEIN Erbrechen herbeiführen.',
    el: 'ΣΕ ΠΕΡΙΠΤΩΣΗ ΚΑΤΑΠΟΣΗΣ: Ξεπλύνετε το στόμα. ΜΗΝ προκαλέσετε εμετό.',
    en: 'IF SWALLOWED: Rinse mouth. Do NOT induce vomiting.',
    es: 'EN CASO DE INGESTIÓN: Enjuagar la boca. NO provocar el vómito.',
    et: 'ALLANEELAMISE KORRAL: loputada suud. MITTE kutsuda esile oksendamist.',
    fi: 'JOS KEMIKAALIA ON NIELTY: Huuhdo suu. EI saa oksennuttaa.',
    fr: 'EN CAS D\'INGESTION: Rincer la bouche. NE PAS faire vomir.',
    ga: 'MÁ SHLOGTAR: Sruthlaítear an béal. NÁ spreagtar urlacan.',
    hr: 'AKO SE PROGUTA: isprati usta. NE izazivati povraćanje.',
    hu: 'LENYELÉS ESETÉN: A szájat ki kell öblíteni. TILOS hánytatni.',
    it: 'IN CASO DI INGESTIONE: sciacquare la bocca. NON provocare il vomito.',
    lt: 'PRARIJUS: išskalauti burną. NESKATINTI vėmimo.',
    lv: 'NORĪŠANAS GADĪJUMĀ: Izskalot muti. NEIZRAISĪT vemšanu.',
    mt: 'JEKK JINBELA\': Laħlaħ il-ħalq. TIPPROVOKAX ir-remettar.',
    nl: 'NA INSLIKKEN: de mond spoelen. GEEN braken opwekken.',
    pl: 'W PRZYPADKU POŁKNIĘCIA: wypłukać usta. NIE wywoływać wymiotów.',
    pt: 'EM CASO DE INGESTÃO: Enxaguar a boca. NÃO provocar o vómito.',
    ro: 'ÎN CAZ DE ÎNGHIȚIRE: Clătiți gura. NU provocați voma.',
    sk: 'PO POŽITÍ: vypláchnite ústa. NEVYVOLÁVAJTE zvracanie.',
    sl: 'PRI ZAUŽITJU: Izprati usta. Ne izzivati bruhanja.',
    sv: 'VID FÖRTÄRING: Skölj munnen. Framkalla INTE kräkning.'
  }
} ) as const satisfies StatementConfig;
