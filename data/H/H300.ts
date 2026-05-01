import type { Statement } from '../../src/types';

export default ( {
  code: 'H300',
  translations: {
    bg: 'Смъртоносeн при поглъщане.',
    cs: 'Při požití může způsobit smrt.',
    da: 'Livsfarlig ved indtagelse.',
    de: 'Lebensgefahr bei Verschlucken.',
    el: 'Θανατηφόρο σε περίπτωση κατάποσης.',
    en: 'Fatal if swallowed.',
    es: 'Mortal en caso de ingestión.',
    et: 'Allaneelamisel surmav.',
    fi: 'Tappavaa nieltynä.',
    fr: 'Mortel en cas d\'ingestion.',
    ga: 'Marfach má shlogtar.',
    hr: 'Smrtonosno ako se proguta.',
    hu: 'Lenyelve halálos.',
    it: 'Letale se ingerito.',
    lt: 'Mirtina prarijus.',
    lv: 'Norijot iestājas nāve.',
    mt: 'Fatali jekk jinbela’.',
    nl: 'Dodelijk bij inslikken.',
    pl: 'Połknięcie grozi śmiercią.',
    pt: 'Mortal por ingestão.',
    ro: 'Mortal în caz de înghițire.',
    sk: 'Smrteľný po požití.',
    sl: 'Smrtno pri zaužitju.',
    sv: 'Dödligt vid förtäring.'
  }
} ) as const satisfies Statement;
