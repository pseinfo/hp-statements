import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H302+H332',
  translations: {
    bg: 'Вреден при поглъщане или при вдишване',
    cs: 'Zdraví škodlivý při požití a při vdechování',
    da: 'Farlig ved indtagelse eller indånding',
    de: 'Gesundheitsschädlich bei Verschlucken oder Einatmen',
    el: 'Επιβλαβές σε περίπτωση κατάποσης ή σε περίπτωση εισπνοής',
    en: 'Harmful if swallowed or if inhaled',
    es: 'Nocivo en caso de ingestión o inhalación',
    et: 'Allaneelamisel või sissehingamisel kahjulik',
    fi: 'Haitallista nieltynä tai hengitettynä',
    fr: 'Nocif en cas d\'ingestion ou d\'inhalation',
    ga: 'Ábhar dochrach má shlogtar nó má ionanálaítear é',
    hr: 'Štetno ako se proguta ili ako se udiše',
    hu: 'Lenyelve vagy belélegezve ártalmas',
    it: 'Nocivo se ingerito o inalato',
    lt: 'Kenksminga prarijus arba įkvėpus',
    lv: 'Kaitīgs, ja norīts vai iekļūst elpceļos',
    mt: 'Tagħmel ħsara jekk tinbela\' jew tittieħed bin-nifs',
    nl: 'Schadelijk bij inslikken en bij inademing',
    pl: 'Działa szkodliwie po połknięciu lub w następstwie wdychania',
    pt: 'Nocivo por ingestão ou inalação',
    ro: 'Nociv în caz de înghițire sau inhalare',
    sk: 'Zdraviu škodlivý pri požití alebo vdýchnutí',
    sl: 'Zdravju škodljivo pri zaužitju in vdihavanju',
    sv: 'Skadligt vid förtäring eller inandning'
  }
} ) as const satisfies StatementConfig;
