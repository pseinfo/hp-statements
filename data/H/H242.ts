import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'H242',
  translations: {
    bg: 'Може да предизвика пожар при нагряване.',
    cs: 'Zahřívání může způsobit požár.',
    da: 'Brandfare ved opvarmning.',
    de: 'Erwärmung kann Brand verursachen.',
    el: 'Η θέρμανση μπορεί να προκαλέσει πυρκαγιά.',
    en: 'Heating may cause a fire.',
    es: 'Peligro de incendio en caso de calentamiento.',
    et: 'Kuumenemisel võib süttida.',
    fi: 'Palovaarallinen kuumennettaessa.',
    fr: 'Peut s\'enflammer sous l\'effet de la chaleur.',
    ga: 'D\'fhéadfadh téamh a bheith ina chúis le dóiteán.',
    hr: 'Zagrijavanje može uzrokovati požar.',
    hu: 'Hő hatására meggyulladhat.',
    it: 'Rischio d\'incendio per riscaldamento.',
    lt: 'Kaitinant gali sukelti gaisrą.',
    lv: 'Sakaršana var izraisīt degšanu.',
    mt: 'It-tisħin jista\' jikkawża nar.',
    nl: 'Brandgevaar bij verwarming.',
    pl: 'Ogrzanie może spowodować pożar.',
    pt: 'Risco de incêndio sob a acção do calor.',
    ro: 'Pericol de incendiu în caz de încălzire.',
    sk: 'Zahrievanie môže spôsobiť požiar.',
    sl: 'Segrevanje lahko povzroči požar.',
    sv: 'Brandfarligt vid uppvärmning.'
  }
} ) as const satisfies StatementConfig;
