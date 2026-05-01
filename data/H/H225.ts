import type { Statement } from '../../src/types';

export default ( {
  code: 'H225',
  translations: {
    bg: 'Силно запалими течност и пари.',
    cs: 'Vysoce hořlavá kapalina a páry.',
    da: 'Meget brandfarlig væske og damp.',
    de: 'Flüssigkeit und Dampf leicht entzündbar.',
    el: 'Υγρό και ατμοί πολύ εύφλεκτα.',
    en: 'Highly flammable liquid and vapour.',
    es: 'Líquido y vapores muy inflamables.',
    et: 'Väga tuleohtlik vedelik ja aur.',
    fi: 'Helposti syttyvä neste ja höyry.',
    fr: 'Liquide et vapeurs très inflammables.',
    ga: 'Leacht an-inadhainte agus gal an-inadhainte.',
    hr: 'Lako zapaljiva tekućina i para.',
    hu: 'Fokozottan tűzveszélyes folyadék és gőz.',
    it: 'Liquido e vapori facilmente infiammabili.',
    lt: 'Labai degūs skystis ir garai.',
    lv: 'Viegli uzliesmojošs šķidrums un tvaiki.',
    mt: 'Likwidu u fwar li jaqbdu malajr ħafna.',
    nl: 'Licht ontvlambare vloeistof en damp.',
    pl: 'Wysoce łatwopalna ciecz i pary.',
    pt: 'Líquido e vapor facilmente inflamáveis.',
    ro: 'Lichid și vapori foarte inflamabili.',
    sk: 'Veľmi horľavá kvapalina a pary.',
    sl: 'Lahko vnetljiva tekočina in hlapi.',
    sv: 'Mycket brandfarlig vätska och ånga.'
  }
} ) as const satisfies Statement;
