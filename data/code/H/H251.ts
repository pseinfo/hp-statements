import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H251',
  translations: {
    bg: 'Самонагряващо се: може да се запали.',
    cs: 'Samovolně se zahřívá: může se vznítit.',
    da: 'Selvopvarmende, kan selvantænde.',
    de: 'Selbsterhitzungsfähig; kann in Brand geraten.',
    el: 'Αυτοθερμαίνεται: μπορεί να αναφλεγεί.',
    en: 'Self-heating: may catch fire.',
    es: 'Se calienta espontáneamente; puede inflamarse.',
    et: 'Isekuumenev, võib süttida.',
    fi: 'Itsestään kuumeneva; voi syttyä palamaan.',
    fr: 'Matière auto-échauffante; peut s\'enflammer.',
    ga: 'Féintéamh: d\'fhéadfadh sé dul trí thine.',
    hr: 'Samozagrijavanje; može se zapaliti.',
    hu: 'Önmelegedő: meggyulladhat.',
    it: 'Autoriscaldante; può infiammarsi.',
    lt: 'Savaime kaistančios, gali užsidegti.',
    lv: 'Pašsasilstošs; var aizdegties.',
    mt: 'Jisħon waħdu: jista\' jieħu n-nar.',
    nl: 'Vatbaar voor zelfverhitting: kan vlam vatten.',
    pl: 'Substancja samonagrzewająca się: może się zapalić.',
    pt: 'Susceptível de auto-aquecimento: risco de inflamação.',
    ro: 'Se autoîncălzește, pericol de aprindere.',
    sk: 'Samovoľne sa zahrieva; môže sa vznietiť.',
    sl: 'Samosegrevanje: lahko povzroči požar.',
    sv: 'Självupphettande. Kan börja brinna.'
  }
} ) as const satisfies StatementConfig;
