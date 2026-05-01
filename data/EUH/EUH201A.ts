import type { Statement } from '../../src/types';

export default ( {
  code: 'EUH201A',
  translations: {
    bg: 'Внимание! Съдържа олово.',
    cs: 'Pozor! Obsahuje olovo.',
    da: 'Advarsel! Indeholder bly.',
    de: 'Achtung! Enthält Blei.',
    el: 'Προσοχή! Περιέχει μόλυβδο.',
    en: 'Warning! Contains lead.',
    es: '¡Atención! Contiene plomo.',
    et: 'Hoiatus! Sisaldab pliid.',
    fi: 'Varoitus! Sisältää lyijyä.',
    fr: 'Attention! Contient du plomb.',
    ga: 'Rabhadh! Luaidhe ann.',
    hr: 'Upozorenje! Sadrži olovo.',
    hu: 'Figyelem! Ólmot tartalmaz.',
    it: 'Attenzione! Contiene piombo.',
    lt: 'Atsargiai! Sudėtyje yra švino.',
    lv: 'Brīdinājums! Satur svinu.',
    mt: 'Twissija! Fih iċ-ċomb.',
    nl: 'Let op! Bevat lood.',
    pl: 'Uwaga! Zawiera ołów.',
    pt: 'Atenção! Contém chumbo.',
    ro: 'Atenție! Conține plumb.',
    sk: 'Pozor! Obsahuje olovo.',
    sl: 'Pozor! Vsebuje svinec.',
    sv: 'Varning! Innehåller bly.'
  }
} ) as const satisfies Statement;
