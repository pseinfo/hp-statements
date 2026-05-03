import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H226',
  translations: {
    bg: 'Запалими течност и пари.',
    cs: 'Hořlavá kapalina a páry.',
    da: 'Brandfarlig væske og damp.',
    de: 'Flüssigkeit und Dampf entzündbar.',
    el: 'Υγρό και ατμοί εύφλεκτα.',
    en: 'Flammable liquid and vapour.',
    es: 'Líquidos y vapores inflamables.',
    et: 'Tuleohtlik vedelik ja aur.',
    fi: 'Syttyvä neste ja höyry.',
    fr: 'Liquide et vapeurs inflammables.',
    ga: 'Leacht inadhainte agus gal inadhainte.',
    hr: 'Zapaljiva tekućina i para.',
    hu: 'Tűzveszélyes folyadék és gőz.',
    it: 'Liquido e vapori infiammabili.',
    lt: 'Degūs skystis ir garai.',
    lv: 'Uzliesmojošs šķidrums un tvaiki.',
    mt: 'Likwidu u fwar li jaqbdu.',
    nl: 'Ontvlambare vloeistof en damp.',
    pl: 'Łatwopalna ciecz i pary.',
    pt: 'Líquido e vapor inflamáveis.',
    ro: 'Lichid și vapori inflamabili.',
    sk: 'Horľavá kvapalina a pary.',
    sl: 'Vnetljiva tekočina in hlapi.',
    sv: 'Brandfarlig vätska och ånga.'
  }
} ) as const satisfies StatementConfig;
