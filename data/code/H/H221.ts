import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H221',
  translations: {
    bg: 'Запалим газ.',
    cs: 'Hořlavý plyn.',
    da: 'Brandfarlig gas.',
    de: 'Entzündbares Gas.',
    el: 'Εύφλεκτο αέριο.',
    en: 'Flammable gas.',
    es: 'Gas inflamable.',
    et: 'Tuleohtlik gaas.',
    fi: 'Syttyvä kaasu.',
    fr: 'Gaz inflammable.',
    ga: 'Gás inadhainte.',
    hr: 'Zapaljivi plin.',
    hu: 'Tűzveszélyes gáz.',
    it: 'Gas infiammabile.',
    lt: 'Degios dujos.',
    lv: 'Uzliesmojoša gāze.',
    mt: 'Gass li jaqbad.',
    nl: 'Ontvlambaar gas.',
    pl: 'Gaz łatwopalny.',
    pt: 'Gás inflamável.',
    ro: 'Gaz inflamabil.',
    sk: 'Horľavý plyn.',
    sl: 'Vnetljiv plin.',
    sv: 'Brandfarlig gas.'
  }
} ) as const satisfies StatementConfig;
