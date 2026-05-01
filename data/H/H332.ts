import type { Statement } from '../../src/types';

export default ( {
  code: 'H332',
  translations: {
    bg: 'Вреден при вдишване.',
    cs: 'Zdraví škodlivý při vdechování.',
    da: 'Farlig ved indånding.',
    de: 'Gesundheitsschädlich bei Einatmen.',
    el: 'Επιβλαβές σε περίπτωση εισπνοής.',
    en: 'Harmful if inhaled.',
    es: 'Nocivo en caso de inhalación.',
    et: 'Sissehingamisel kahjulik.',
    fi: 'Haitallista hengitettynä.',
    fr: 'Nocif par inhalation.',
    ga: 'Díobhálach má ionanálaítear.',
    hr: 'Štetno ako se udiše.',
    hu: 'Belélegezve ártalmas.',
    it: 'Nocivo se inalato.',
    lt: 'Kenksminga įkvėpus.',
    lv: 'Kaitīgs ieelpojot.',
    mt: 'Jagħmel il-ħsara jekk jinxtamm.',
    nl: 'Schadelijk bij inademing.',
    pl: 'Działa szkodliwie w następstwie wdychania.',
    pt: 'Nocivo por inalação.',
    ro: 'Nociv în caz de inhalare.',
    sk: 'Škodlivý pri vdýchnutí.',
    sl: 'Zdravju škodljivo pri vdihavanju.',
    sv: 'Skadligt vid inandning.'
  }
} ) as const satisfies Statement;
