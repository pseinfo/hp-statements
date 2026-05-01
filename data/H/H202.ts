import type { Statement } from '../../src/types';

export default ( {
  code: 'H202',
  translations: {
    bg: 'Експлозив; сериозна опасност от разпръскване.',
    cs: 'Výbušnina; vážné nebezpečí zasažení částicemi.',
    da: 'Eksplosiv, alvorlig fare for udslyngning af fragmenter.',
    de: 'Explosiv; große Gefahr durch Splitter, Spreng- und Wurfstücke.',
    el: 'Εκρηκτικό· σοβαρός κίνδυνος εκτόξευσης.',
    en: 'Explosive, severe projection hazard.',
    es: 'Explosivo; grave peligro de proyección.',
    et: 'Plahvatusohtlik; suur laialipaiskumisoht.',
    fi: 'Räjähde; vakava sirpalevaara.',
    fr: 'Explosif; danger sérieux de projection.',
    ga: 'Pléascach, guais throm teilgin.',
    hr: 'Eksplozivno; velika opasnost od rasprskavanja.',
    hu: 'Robbanóanyag; kivetés súlyos veszélye.',
    it: 'Esplosivo; grave pericolo di proiezione.',
    lt: 'Sprogios medžiagos, kelia didelį išsvaidymo pavojų.',
    lv: 'Sprādzienbīstams; augsta izmetes bīstamība.',
    mt: 'Splussiv, periklu serju ta\' projezzjoni.',
    nl: 'Ontplofbare stof, ernstig gevaar voor scherfwerking.',
    pl: 'Materiał wybuchowy, poważne zagrożenie rozrzutem.',
    pt: 'Explosivo, perigo grave de projecções.',
    ro: 'Exploziv; pericol grav de proiectare.',
    sk: 'Výbušnina, závažné nebezpečenstvo rozletenia úlomkov.',
    sl: 'Eksplozivno, velika nevarnost za nastanek drobcev.',
    sv: 'Explosivt. Allvarlig fara för splitter och kaststycken.'
  }
} ) as const satisfies Statement;
