import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H250',
  translations: {
    bg: 'Самозапалва се при контакт с въздух.',
    cs: 'Při styku se vzduchem se samovolně vznítí.',
    da: 'Selvantænder ved kontakt med luft.',
    de: 'Entzündet sich in Berührung mit Luft von selbst.',
    el: 'Αυταναφλέγεται εάν εκτεθεί στον αέρα.',
    en: 'Catches fire spontaneously if exposed to air.',
    es: 'Se inflama espontáneamente en contacto con el aire.',
    et: 'Kokkupuutel õhuga süttib iseenesest.',
    fi: 'Syttyy itsestään palamaan joutuessaan kosketuksiin ilman kanssa.',
    fr: 'S\'enflamme spontanément au contact de l\'air.',
    ga: 'Téann trí thine go spontáineach má nochtar don aer.',
    hr: 'Samozapaljivo u dodiru sa zrakom.',
    hu: 'Levegővel érintkezve önmagától meggyullad.',
    it: 'Spontaneamente infiammabile all\'aria.',
    lt: 'Veikiami oro savaime užsidega.',
    lv: 'Spontāni aizdegas saskarē ar gaisu.',
    mt: 'Jieħu n-nar spontanjament jekk ikun espost għall-arja.',
    nl: 'Vat spontaan vlam bij blootstelling aan lucht.',
    pl: 'Zapala się samorzutnie w przypadku wystawienia na działanie powietrza.',
    pt: 'Risco de inflamação espontânea em contacto com o ar.',
    ro: 'Se aprinde spontan, în contact cu aerul.',
    sk: 'Pri kontakte so vzduchuom sa spontánne vznieti.',
    sl: 'Samodejno se vžge na zraku.',
    sv: 'Spontanantänder vid kontakt med luft.'
  }
} ) as const satisfies StatementConfig;
