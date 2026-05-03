import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H280',
  translations: {
    bg: 'Съдържа газ под налягане; може да експлодира при нагряване.',
    cs: 'Obsahuje plyn pod tlakem; při zahřívání může vybuchnout.',
    da: 'Indeholder gas under tryk, kan eksplodere ved opvarmning.',
    de: 'Enthält Gas unter Druck; kann bei Erwärmung explodieren.',
    el: 'Περιέχει αέριο υπό πίεση· εάν θερμανθεί, μπορεί να εκραγεί.',
    en: 'Contains gas under pressure; may explode if heated.',
    es: 'Contiene gas a presión; peligro de explosión en caso de calentamiento.',
    et: 'Sisaldab rõhu all olevat gaasi, kuumenemisel võib plahvatada.',
    fi: 'Sisältää paineen alaista kaasua; voi räjähtää kuumennettaessa.',
    fr: 'Contient un gaz sous pression; peut exploser sous l\'effet de la chaleur.',
    ga: 'Gás istigh ann, faoi bhrú; d\'fhéadfadh sé pléascadh, má théitear.',
    hr: 'Sadrži stlačeni plin; zagrijavanje može uzrokovati eksploziju.',
    hu: 'Nyomás alatt lévő gázt tartalmaz; hő hatására robbanhat.',
    it: 'Contiene gas sotto pressione; può esplodere se riscaldato.',
    lt: 'Turi slėgio veikiamų dujų, kaitinant gali sprogti.',
    lv: 'Satur gāzi zem spiediena; karstumā var eksplodēt.',
    mt: 'Fih gass taħt pressjoni; jista\' jisplodi jekk jissaħħan.',
    nl: 'Bevat gas onder druk; kan ontploffen bij verwarming.',
    pl: 'Zawiera gaz pod ciśnieniem; ogrzanie grozi wybuchem.',
    pt: 'Contém gás sob pressão; risco de explosão sob a acção do calor.',
    ro: 'Conține un gaz sub presiune; pericol de explozie în caz de încălzire.',
    sk: 'Obsahuje plyn pod tlakom, pri zahriatí môže vybuchnúť.',
    sl: 'Vsebuje plin pod tlakom; segrevanje lahko povzroči eksplozijo.',
    sv: 'Innehåller gas under tryck. Kan explodera vid uppvärmning.'
  }
} ) as const satisfies StatementConfig;
