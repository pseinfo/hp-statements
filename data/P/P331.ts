import type { Statement } from '../../src/types';

export default ( {
  code: 'P331',
  translations: {
    bg: 'НЕ предизвиквайте повръщане.',
    cs: 'NEVYVOLÁVEJTE zvracení.',
    da: 'Fremkald IKKE opkastning.',
    de: 'KEIN Erbrechen herbeiführen.',
    el: 'ΜΗΝ προκαλέσετε εμετό.',
    en: 'Do NOT induce vomiting.',
    es: 'NO provocar el vómito.',
    et: 'MITTE kutsuda esile oksendamist.',
    fi: 'EI saa oksennuttaa.',
    fr: 'NE PAS faire vomir.',
    ga: 'NÁ spreagtar urlacan.',
    hr: 'NE izazivati povraćanje.',
    hu: 'TILOS hánytatni.',
    it: 'NON provocare il vomito.',
    lt: 'NESKATINTI vėmimo.',
    lv: 'NEIZRAISĪT vemšanu.',
    mt: 'TIPPROVOKAX ir-remettar.',
    nl: 'GEEN braken opwekken.',
    pl: 'NIE wywoływać wymiotów.',
    pt: 'NÃO provocar o vómito.',
    ro: 'NU provocați voma.',
    sk: 'Nevyvolávajte zvracanie.',
    sl: 'NE izzvati bruhanja.',
    sv: 'Framkalla INTE kräkning.'
  }
} ) as const satisfies Statement;
