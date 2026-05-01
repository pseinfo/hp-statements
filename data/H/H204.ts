import type { Statement } from '../../src/types';

export default ( {
  code: 'H204',
  translations: {
    bg: 'Опасност от пожар или разпръскване.',
    cs: 'Nebezpečí požáru nebo zasažení částicemi.',
    da: 'Fare for brand eller udslyngning af fragmenter.',
    de: 'Gefahr durch Feuer oder Splitter, Spreng- und Wurfstücke.',
    el: 'Κίνδυνος πυρκαγιάς ή εκτόξευσης.',
    en: 'Fire or projection hazard.',
    es: 'Peligro de incendio o de proyección.',
    et: 'Süttimis- või laialipaiskumisoht.',
    fi: 'Palo- tai sirpalevaara.',
    fr: 'Danger d\'incendie ou de projection.',
    ga: 'Guais dóiteáin nó teilgin.',
    hr: 'Opasnost od vatre ili rasprskavanja.',
    hu: 'Tűz vagy kivetés veszélye.',
    it: 'Pericolo di incendio o di proiezione.',
    lt: 'Gaisro arba išsvaidymo pavojus.',
    lv: 'Uguns vai izmetes bīstamība.',
    mt: 'Periklu ta\' nar jew ta\' projezzjoni.',
    nl: 'Gevaar voor brand of scherfwerking.',
    pl: 'Zagrożenie pożarem lub rozrzutem.',
    pt: 'Perigo de incêndio ou projecções.',
    ro: 'Pericol de incendiu sau de proiectare.',
    sk: 'Nebezpečenstvo požiaru alebo rozletenia úlomkov.',
    sl: 'Nevarnost za nastanek požara ali drobcev.',
    sv: 'Fara för brand eller splitter och kaststycken.'
  }
} ) as const satisfies Statement;
