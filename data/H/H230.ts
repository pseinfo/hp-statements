import type { Statement } from '../../src/types';

export default ( {
  code: 'H230',
  translations: {
    bg: 'Може да реагира експлозивно дори при отсъствие на въздух.',
    cs: 'Může reagovat výbušně i bez přítomnosti vzduchu.',
    da: 'Kan reagere eksplosivt selv i fravær af luft.',
    de: 'Kann auch in Abwesenheit von Luft explosionsartig reagieren.',
    el: 'Δύναται να εκραγεί ακόμη και απουσία αέρος.',
    en: 'May react explosively even in the absence of air.',
    es: 'Puede explotar incluso en ausencia de aire.',
    et: 'Võib reageerida plahvatuslikult isegi õhuga kokku puutumata.',
    fi: 'Voi reagoida räjähtäen jopa ilmattomassa tilassa.',
    fr: 'Peut exploser même en l’absence d’air.',
    ga: 'D’fhéadfadh sé imoibriú go pléascach fiú mura bhfuil aer ann.',
    hr: 'Može eksplozivno reagirati i bez prisustva zraka.',
    hu: 'Még levegő hiányában is robbanásszerű reakcióba léphet.',
    it: 'Può esplodere anche in assenza di aria.',
    lt: 'Gali sprogti net ir nesant oro.',
    lv: 'Var eksplodēt pat bezgaisa vidē.',
    mt: 'Jista jisplodi anke fin-nuqqas ta’ l-arja.',
    nl: 'Kan explosief reageren zelfs in afwezigheid van lucht.',
    pl: 'Może reagować wybuchowo nawet bez dostępu powietrza.',
    pt: 'Pode reagir explosivamente mesmo na ausência de ar.',
    ro: 'Pericol de explozie, chiar si in absenta aerului.',
    sk: 'Môže reagovať výbušne aj bez prítomnosti vzduchu.',
    sl: 'Lahko reagira eksplozivno tudi v odsotnosti zraka.',
    sv: 'Kan reagera explosivt även i frånvaro av luft.'
  }
} ) as const satisfies Statement;
