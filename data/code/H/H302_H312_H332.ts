import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H302+H312+H332',
  translations: {
    bg: 'Вреден при поглъщане, при контакт с кожата или при вдишване',
    cs: 'Zdraví škodlivý při požití, při styku s kůží a při vdechování',
    da: 'Farlig ved indånding, hudkontakt eller indånding',
    de: 'Gesundheitsschädlich bei Verschlucken, Hautkontakt oder Einatmen',
    el: 'Επιβλαβές σε περίπτωση κατάποσης, σε επαφή με το δέρμα ή σε περίπτωση εισπνοής',
    en: 'Harmful if swallowed, in contact with skin or if inhaled',
    es: 'Nocivo en caso de ingestión, contacto con la piel o inhalación',
    et: 'Allaneelamisel, nahale sattumisel või sissehingamisel kahjulik',
    fi: 'Haitallista nieltynä, joutuessaan iholle tai hengitettynä',
    fr: 'Nocif en cas d\'ingestion, de contact cutané ou d\'inhalation',
    ga: 'Ábhar dochrach má shlogtar, má theagmhaíonn leis an gcraiceann nó má ionanálaítear é',
    hr: 'Štetno ako se proguta, u dodiru s kožom ili ako se udiše',
    hu: 'Lenyelve, bőrrel érintkezve vagy belélegezve ártalmas',
    it: 'Nocivo se ingerito, a contatto con la pelle o se inalato',
    lt: 'Kenksminga prarijus, susilietus su oda arba įkvėpus',
    lv: 'Kaitīgs, ja norīts, saskaras ar ādu vai nonāk elpceļos',
    mt: 'Tagħmel il-ħsara jekk tinbela\', tmiss mal-ġilda jew tittiħed bin-nifs',
    nl: 'Schadelijk bij inslikken, bij contact met de huid en bij inademing',
    pl: 'Działa szkodliwie po połknięciu, w kontakcie ze skórą lub w następstwie wdychania',
    pt: 'Nocivo por ingestão, contacto com a pele ou inalação',
    ro: 'Nociv în caz de înghițire, în contact cu pielea sau prin inhalare',
    sk: 'Zdraviu škodlivý pri požití, styku s kožou alebo pri vdýchnutí',
    sl: 'Zdravju škodljivo pri zaužitju, v stiku s kožo ali pri vdihavanju',
    sv: 'Skadligt vid förtäring, hudkontakt eller inandning'
  }
} ) as const satisfies StatementConfig;
