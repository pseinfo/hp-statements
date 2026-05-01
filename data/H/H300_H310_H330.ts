import type { Statement } from '../../src/types';

export default ( {
  code: 'H300+H310+H330',
  translations: {
    bg: 'Смъртоносен при поглъщане, при контакт с кожата или при вдишване',
    cs: 'Při požití, při styku s kůží nebo při vdechování může způsobit smrt',
    da: 'Livsfarlig ved indtagelse, hudkontakt eller indånding',
    de: 'Lebensgefahr bei Verschlucken, Hautkontakt oder Einatmen',
    el: 'Θανατηφόρο σε περίπτωση κατάποσης, σε επαφή με το δέρμα ή σε περίπτωση εισπνοής',
    en: 'Fatal if swallowed, in contact with skin or if inhaled',
    es: 'Mortal en caso de ingestión, contacto con la piel o inhalación',
    et: 'Allaneelamisel, nahale sattumisel või sissehingamisel surmav',
    fi: 'Tappavaa nieltynä, joutuessaan iholle tai hengitettynä',
    fr: 'Mortel par ingestion, par contact cutané ou par inhalation',
    ga: 'Ábhar marfach é seo má shlogtar, má theagmhaíonn leis an gcraiceann nó má ionanálaítear é',
    hr: 'Smrtonosno ako se proguta, u dodiru s kožom ili ako se udiše',
    hu: 'Lenyelve, bőrrel érintkezve vagy belélegezve halálos',
    it: 'Mortale se ingerito, a contatto con la pelle o se inalato',
    lt: 'Mirtina prarijus, susilietus su oda arba įkvėpus',
    lv: 'Var izraisīt nāvi, ja norīts, saskaras ar ādu vai iekļūst elpceļos',
    mt: 'Fatali jekk tinbela\', tmiss mal-ġilda jew tittieħed bin-nifs',
    nl: 'Dodelijk bij inslikken, bij contact met de huid en bij inademing',
    pl: 'Grozi śmiercią po połknięciu, w kontakcie ze skórą lub w następstwie wdychania',
    pt: 'Mortal por ingestão, contacto com a pele ou inalação',
    ro: 'Mortal în caz de înghițire, în contact cu pielea sau prin inhalare',
    sk: 'Pri požití, pri styku s kožou alebo pri vdýchnutí môže spôsobiť smrť',
    sl: 'Smrtno pri zaužitju, v stiku s kožo ali pri vdihavanju',
    sv: 'Dödligt vid förtäring, hudkontakt eller inandning'
  }
} ) as const satisfies Statement;
