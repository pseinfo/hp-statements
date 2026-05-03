import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H302',
  translations: {
    bg: 'Вреден при поглъщане.',
    cs: 'Zdraví škodlivý při požití.',
    da: 'Farlig ved indtagelse.',
    de: 'Gesundheitsschädlich bei Verschlucken.',
    el: 'Επιβλαβές σε περίπτωση κατάποσης.',
    en: 'Harmful if swallowed.',
    es: 'Nocivo en caso de ingestión.',
    et: 'Allaneelamisel kahjulik.',
    fi: 'Haitallista nieltynä.',
    fr: 'Nocif en cas d\'ingestion.',
    ga: 'Díobhálach má shlogtar.',
    hr: 'Štetno ako se proguta.',
    hu: 'Lenyelve ártalmas.',
    it: 'Nocivo se ingerito.',
    lt: 'Kenksminga prarijus.',
    lv: 'Kaitīgs, ja norij.',
    mt: 'Jagħmel il-ħsara jekk jinbela’.',
    nl: 'Schadelijk bij inslikken.',
    pl: 'Działa szkodliwie po połknięciu.',
    pt: 'Nocivo por ingestão.',
    ro: 'Nociv în caz de înghițire.',
    sk: 'Škodlivý po požití.',
    sl: 'Zdravju škodljivo pri zaužitju.',
    sv: 'Skadligt vid förtäring.'
  }
} ) as const satisfies StatementConfig;
