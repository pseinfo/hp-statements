import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'H312',
  translations: {
    bg: 'Вреден при контакт с кожата.',
    cs: 'Zdraví škodlivý při styku s kůží.',
    da: 'Farlig ved hudkontakt.',
    de: 'Gesundheitsschädlich bei Hautkontakt.',
    el: 'Επιβλαβές σε επαφή με το δέρμα.',
    en: 'Harmful in contact with skin.',
    es: 'Nocivo en contacto con la piel.',
    et: 'Nahale sattumisel kahjulik.',
    fi: 'Haitallista joutuessaan iholle.',
    fr: 'Nocif par contact cutané.',
    ga: 'Díobhálach i dteagmháil leis an gcraiceann.',
    hr: 'Štetno u dodiru s kožom.',
    hu: 'Bőrrel érintkezve ártalmas.',
    it: 'Nocivo per contatto con la pelle.',
    lt: 'Kenksminga susilietus su oda.',
    lv: 'Kaitīgs, ja nonāk saskarē ar ādu.',
    mt: 'Jagħmel il-ħsara meta jmiss mal-ġilda.',
    nl: 'Schadelijk bij contact met de huid.',
    pl: 'Działa szkodliwie w kontakcie ze skórą.',
    pt: 'Nocivo em contacto com a pele.',
    ro: 'Nociv în contact cu pielea.',
    sk: 'Škodlivý pri kontakte s pokožkou.',
    sl: 'Zdravju škodljivo v stiku s kožo.',
    sv: 'Skadligt vid hudkontakt.'
  }
} ) as const satisfies StatementConfig;
