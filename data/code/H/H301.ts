import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H301',
  translations: {
    bg: 'Токсичен при поглъщане.',
    cs: 'Toxický při požití.',
    da: 'Giftig ved indtagelse.',
    de: 'Giftig bei Verschlucken.',
    el: 'Τοξικό σε περίπτωση κατάποσης.',
    en: 'Toxic if swallowed.',
    es: 'Tóxico en caso de ingestión.',
    et: 'Allaneelamisel mürgine.',
    fi: 'Myrkyllistä nieltynä.',
    fr: 'Toxique en cas d\'ingestion.',
    ga: 'Tocsaineach má shlogtar.',
    hr: 'Otrovno ako se proguta.',
    hu: 'Lenyelve mérgező.',
    it: 'Tossico se ingerito.',
    lt: 'Toksiška prarijus.',
    lv: 'Toksisks, ja norij.',
    mt: 'Tossiku jekk jinbela’.',
    nl: 'Giftig bij inslikken.',
    pl: 'Działa toksycznie po połknięciu.',
    pt: 'Tóxico por ingestão.',
    ro: 'Toxic în caz de înghițire.',
    sk: 'Toxický po požití.',
    sl: 'Strupeno pri zaužitju.',
    sv: 'Giftigt vid förtäring.'
  }
} ) as const satisfies StatementConfig;
