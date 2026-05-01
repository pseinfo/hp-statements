import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'H300+H330',
  translations: {
    bg: 'Смъртоносен при поглъщане или при вдишване',
    cs: 'Při požití nebo při vdechování může způsobit smrt',
    da: 'Livsfarlig ved indtagelse eller indånding',
    de: 'Lebensgefahr bei Verschlucken oder Einatmen',
    el: 'Θανατηφόρο σε περίπτωση κατάποσης ή σε περίπτωση εισπνοής',
    en: 'Fatal if swallowed or if inhaled',
    es: 'Mortal en caso de ingestión o inhalación',
    et: 'Allaneelamisel või sissehingamisel surmav',
    fi: 'Tappavaa nieltynä tai hengitettynä',
    fr: 'Mortel par ingestion ou par inhalation',
    ga: 'Ábhar marfach é seo má shlogtar nó má ionanálaítear é',
    hr: 'Smrtonosno ako se proguta ili ako se udiše',
    hu: 'Lenyelve vagy belélegezve halálos',
    it: 'Mortale se ingerito o inalato',
    lt: 'Mirtina prarijus arba įkvėpus',
    lv: 'Var izraisīt nāvi, ja norīts vai iekļūst elpceļos',
    mt: 'Fatali jekk tinbela\' jew tittieħed bin-nifs',
    nl: 'Dodelijk bij inslikken en bij inademing',
    pl: 'Grozi śmiercią po połknięciu lub w następstwie wdychania',
    pt: 'Mortal por ingestão ou inalação',
    ro: 'Mortal în caz de înghițire sau inhalare',
    sk: 'Pri požití alebo vdýchnutí môže spôsobiť smrť',
    sl: 'Smrtno pri zaužitju ali vdihavanju',
    sv: 'Dödligt vid förtäring eller inandning'
  }
} ) as const satisfies StatementConfig;
