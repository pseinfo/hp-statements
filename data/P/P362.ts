import type { Statement } from '../../src/types';

export default ( {
  code: 'P362',
  translations: {
    bg: 'Свалете замърсеното облекло.',
    cs: 'Kontaminovaný oděv svlékněte.',
    da: 'Alt tilsmudset tøj tages af.',
    de: 'Kontaminierte Kleidung ausziehen.',
    el: 'Βγάλτε τα μολυσμένα ρούχα.',
    en: 'Take off contaminated clothing.',
    es: 'Quitar las prendas contaminadas.',
    et: 'Võtta saastunud rõivad seljast.',
    fi: 'Riisu saastunut vaatetus.',
    fr: 'Enlever les vêtements contaminés.',
    ga: 'Bain díot aon éadaí éillithe.',
    hr: 'Skinuti zagađenu odjeću.',
    hu: 'A szennyezett ruhadarabot le kell vetni.',
    it: 'Togliere gli indumenti contaminati.',
    lt: 'Nuvilkti užterštus drabužius.',
    lv: 'Novilkt piesārņoto apģērbu.',
    mt: 'Neħħi l-ħwejjeġ kontaminati.',
    nl: 'Verontreinigde kleding uittrekken.',
    pl: 'Zdjąć zanieczyszczoną odzież.',
    pt: 'Retirar a roupa contaminada.',
    ro: 'Scoateți îmbrăcămintea contaminată.',
    sk: 'Kontaminovaný odev vyzlečte.',
    sl: 'Sleči kontaminirana oblačila.',
    sv: 'Ta av nedstänkta kläder.'
  }
} ) as const satisfies Statement;
