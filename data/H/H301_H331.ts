import type { Statement } from '../../src/types';

export default ( {
  code: 'H301+H331',
  translations: {
    bg: 'Токсичен при поглъщане или при вдишване',
    cs: 'Toxický při požití a při vdechování',
    da: 'Giftig ved indtagelse eller indånding',
    de: 'Giftig bei Verschlucken oder Einatmen',
    el: 'Τοξικό σε περίπτωση κατάποσης ή σε περίπτωση εισπνοής',
    en: 'Toxic if swallowed or if inhaled',
    es: 'Tóxico en caso de ingestión o inhalación',
    et: 'Allaneelamisel või sissehingamisel mürgine',
    fi: 'Myrkyllistä nieltynä tai hengitettynä',
    fr: 'Toxique par ingestion ou par inhalation',
    ga: 'Ábhar tocsaineach má shlogtar nó má ionanálaítear é',
    hr: 'Otrovno ako se proguta ili ako se udiše',
    hu: 'Lenyelve vagy belélegezve mérgező',
    it: 'Tossico se ingerito o inalato',
    lt: 'Toksiška prarijus arba įkvėpus',
    lv: 'Toksisks, ja norīts vai iekļūst elpceļos',
    mt: 'Tossika jekk tinbela\' jew tittieħed bin-nifs',
    nl: 'Giftig bij inslikken en bij inademing',
    pl: 'Działa toksycznie po połknięciu lub w następstwie wdychania',
    pt: 'Tóxico por ingestão ou inalação',
    ro: 'Toxic în caz de înghițire sau prin inhalare',
    sk: 'Toxický pri požití alebo vdýchnutí',
    sl: 'Strupeno pri zaužitju ali vdihavanju',
    sv: 'Giftigt vid förtäring eller inandning'
  }
} ) as const satisfies Statement;
