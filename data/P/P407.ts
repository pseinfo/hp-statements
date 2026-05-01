import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'P407',
  translations: {
    bg: 'Да се остави въздушно пространство между купчините или палетите.',
    cs: 'Mezi stohy nebo paletami ponechte vzduchovou mezeru.',
    da: 'Opbevares med luftmellemrum mellem stakkene/pallerne.',
    de: 'Luftspalt zwischen Stapeln oder Paletten lassen.',
    el: 'Να υπάρχει κενό αέρος μεταξύ των σωρών ή παλετών.',
    en: 'Maintain air gap between stacks or pallets.',
    es: 'Dejar un espacio de aire entre las pilas o bandejas.',
    et: 'Jätta virnade või kaubaaluste vahele õhuvahe.',
    fi: 'Jätä pinojen tai kuormalavojen väliin ilmarako.',
    fr: 'Maintenir un intervalle d\'air entre les piles ou les palettes.',
    ga: 'Coimeád bearna aeir idir cruacha nó idir pailléid.',
    hr: 'Osigurati razmak između polica ili paleta.',
    hu: 'A rakatok vagy raklapok között térközt kell hagyni.',
    it: 'Mantenere uno spazio libero tra gli scaffali o i pallet.',
    lt: 'Palikti oro tarpą tarp eilių arba palečių.',
    lv: 'Saglabāt gaisa spraugu starp krāvumiem vai paletēm.',
    mt: 'Ħalli l-arja tgħaddi bejn l-imniezel jew il-palits.',
    nl: 'Ruimte laten tussen stapels of pallets.',
    pl: 'Zachować szczelinę powietrzną pomiędzy stosami lub paletami.',
    pt: 'Respeitar as distâncias mínimas entre pilhas ou paletes.',
    ro: 'Păstrați un spațiu gol între stive sau paleți.',
    sk: 'Medzi regálmi alebo paletami ponechajte vzduchovú medzeru.',
    sl: 'Ohraniti zračno režo med skladi ali paletami.',
    sv: 'Se till att det finns luft mellan staplar eller pallar.'
  }
} ) as const satisfies StatementConfig;
