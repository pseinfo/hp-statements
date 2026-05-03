import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'P403+P235',
  translations: {
    bg: 'Да се съхранява на добре проветриво място. Да се съхранява на хладно.',
    cs: 'Skladujte na dobře větraném místě. Uchovávejte v chladu.',
    da: 'Opbevares på et godt ventileret sted. Opbevares køligt.',
    de: 'An einem gut belüfteten Ort aufbewahren. Kühl halten.',
    el: 'Αποθηκεύεται σε καλά αεριζόμενο χώρο. Διατηρείται δροσερό.',
    en: 'Store in a well-ventilated place. Keep cool.',
    es: 'Almacenar en un lugar bien ventilado. Mantener en lugar fresco.',
    et: 'Hoida hästi ventileeritavas kohas. Hoida jahedas.',
    fi: 'Varastoi paikassa, jossa on hyvä ilmanvaihto. Säilytä viileässä.',
    fr: 'Stocker dans un endroit bien ventilé. Tenir au frais.',
    ga: 'Stóráil in áit dhea-aeráilte. Coimeád fionnuar.',
    hr: 'Skladištiti na dobro prozračenom mjestu. Održavati hladnim.',
    hu: 'Jól szellőző helyen tárolandó. Hűvös helyen tartandó.',
    it: 'Conservare in luogo fresco e ben ventilato.',
    lt: 'Laikyti gerai vėdinamoje vietoje. Laikyti vėsioje vietoje.',
    lv: 'Glabāt labi vēdināmās telpās. Turēt vēsumā.',
    mt: 'Aħżen f\'post b\'ventilazzjoni tajba. Żomm frisk.',
    nl: 'Op een goed geventileerde plaats bewaren. Koel bewaren.',
    pl: 'Przechowywać w dobrze wentylowanym miejscu. Przechowywać w chłodnym miejscu.',
    pt: 'Armazenar em local bem ventilado. Conservar em ambiente fresco.',
    ro: 'A se depozita într-un spațiu bine ventilat. A se păstra la rece.',
    sk: 'Uchovávajte na dobre vetranom mieste. Uchovávajte v chlade.',
    sl: 'Hraniti na dobro prezračevanem mestu. Hraniti na hladnem.',
    sv: 'Förvaras på väl ventilerad plats. Förvaras svalt.'
  }
} ) as const satisfies StatementConfig;
