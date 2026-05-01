import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'P405',
  translations: {
    bg: 'Да се съхранява под ключ.',
    cs: 'Skladujte uzamčené.',
    da: 'Opbevares under lås.',
    de: 'Unter Verschluss aufbewahren.',
    el: 'Φυλάσσεται κλειδωμένο.',
    en: 'Store locked up.',
    es: 'Guardar bajo llave.',
    et: 'Hoida lukustatult.',
    fi: 'Varastoi lukitussa tilassa.',
    fr: 'Garder sous clef.',
    ga: 'Stóráil faoi ghlas.',
    hr: 'Skladištiti pod ključem.',
    hu: 'Elzárva tárolandó.',
    it: 'Conservare sotto chiave.',
    lt: 'Laikyti užrakintą.',
    lv: 'Glabāt slēgtā veidā.',
    mt: 'Aħżen f\'post imsakkar.',
    nl: 'Achter slot bewaren.',
    pl: 'Przechowywać pod zamknięciem.',
    pt: 'Armazenar em local fechado à chave.',
    ro: 'A se depozita sub cheie.',
    sk: 'Uchovávajte uzamknuté.',
    sl: 'Hraniti zaklenjeno.',
    sv: 'Förvaras inlåst.'
  }
} ) as const satisfies StatementConfig;
