import type { Statement } from '../../src/types';

export default ( {
  code: 'H205',
  translations: {
    bg: 'Може да предизвика масова експлозия при пожар.',
    cs: 'Při požáru může způsobit masivní výbuch.',
    da: 'Fare for masseeksplosion ved brand.',
    de: 'Gefahr der Massenexplosion bei Feuer.',
    el: 'Κίνδυνος μαζικής έκρηξης σε περίπτωση πυρκαγιάς.',
    en: 'May mass explode in fire.',
    es: 'Peligro de explosión en masa en caso de incendio.',
    et: 'Süttimise korral massiplahvatusoht.',
    fi: 'Koko massa voi räjähtää tulessa.',
    fr: 'Danger d\'explosion en masse en cas d\'incendie.',
    ga: 'D\'fhéadfadh sé go mbeadh mórphléascadh i dtine.',
    hr: 'U vatri može izazvati eksploziju ogromnih razmjera.',
    hu: 'Tűz hatására a teljes tömeg felrobbanhat.',
    it: 'Pericolo di esplosione di massa in caso d\'incendio.',
    lt: 'Per gaisrą gali sukelti masinį sprogimą.',
    lv: 'Ugunī var masveidā eksplodēt.',
    mt: 'Jista\' jisplodi f\'daqqa fin-nar.',
    nl: 'Gevaar voor massa-explosie bij brand.',
    pl: 'Może wybuchać masowo w przypadku pożaru.',
    pt: 'Perigo de explosão em massa em caso de incêndio.',
    ro: 'Pericol de explozie în masă în caz de incendiu.',
    sk: 'Nebezpečenstvo rozsiahleho výbuchu pri požiari.',
    sl: 'Pri požaru lahko eksplodira v masi.',
    sv: 'Fara för massexplosion vid brand.'
  }
} ) as const satisfies Statement;
