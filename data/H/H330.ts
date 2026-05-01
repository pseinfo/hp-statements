import type { Statement } from '../../src/types';

export default ( {
  code: 'H330',
  translations: {
    bg: 'Смъртоносен при вдишване.',
    cs: 'Při vdechování může způsobit smrt.',
    da: 'Livsfarlig ved indånding.',
    de: 'Lebensgefahr bei Einatmen.',
    el: 'Θανατηφόρο σε περίπτωση εισπνοής.',
    en: 'Fatal if inhaled.',
    es: 'Mortal en caso de inhalación.',
    et: 'Sissehingamisel surmav.',
    fi: 'Tappavaa hengitettynä.',
    fr: 'Mortel par inhalation.',
    ga: 'Marfach má ionanálaítear.',
    hr: 'Smrtonosno ako se udiše.',
    hu: 'Belélegezve halálos.',
    it: 'Letale se inalato.',
    lt: 'Mirtina įkvėpus.',
    lv: 'Ieelpojot, iestājas nāve.',
    mt: 'Fatali jekk jinxtamm.',
    nl: 'Dodelijk bij inademing.',
    pl: 'Wdychanie grozi śmiercią.',
    pt: 'Mortal por inalação.',
    ro: 'Mortal în caz de inhalare.',
    sk: 'Smrteľný pri vdýchnutí.',
    sl: 'Smrtno pri vdihavanju.',
    sv: 'Dödligt vid inandning.'
  }
} ) as const satisfies Statement;
