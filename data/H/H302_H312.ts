import type { Statement } from '../../src/types';

export default ( {
  code: 'H302+H312',
  translations: {
    bg: 'Вреден при поглъщане или при контакт с кожата',
    cs: 'Zdraví škodlivý při požití a při styku s kůží',
    da: 'Farlig ved indtagelse eller hudkontakt',
    de: 'Gesundheitsschädlich bei Verschlucken oder Hautkontakt',
    el: 'Επιβλαβές σε περίπτωση κατάποσης ή σε επαφή με το δέρμα',
    en: 'Harmful if swallowed or in contact with skin',
    es: 'Nocivo en caso de ingestión o en contacto con la piel',
    et: 'Allaneelamisel või nahale sattumisel kahjulik',
    fi: 'Haitallista nieltynä tai joutuessaan iholle',
    fr: 'Nocif en cas d\'ingestion ou de contact cutané',
    ga: 'Ábhar dochrach má shlogtar é nó má theagmhaíonn leis an gcraiceann',
    hr: 'Štetno ako se proguta ili u dodiru s kožom',
    hu: 'Lenyelve vagy bőrrel érintkezve ártalmas',
    it: 'Nocivo se ingerito o a contatto con la pelle',
    lt: 'Kenksminga prarijus arba susilietus su oda',
    lv: 'Kaitīgs, ja norīts vai saskaras ar ādu',
    mt: 'Tagħmel ħsara jekk tinbela\' jew jekk tmiss mal- ġilda',
    nl: 'Schadelijk bij inslikken en bij contact met de huid',
    pl: 'Działa szkodliwie po połknięciu lub w kontakcie ze skórą',
    pt: 'Nocivo por ingestão ou contacto com a pele',
    ro: 'Nociv în caz de înghițire sau în contact cu pielea',
    sk: 'Zdraviu škodlivý pri požití alebo pri styku s kožou',
    sl: 'Zdravju škodljivo pri zaužitju ali v stiku s kožo',
    sv: 'Skadligt vid förtäring eller hudkontakt'
  }
} ) as const satisfies Statement;
