import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'P222',
  translations: {
    bg: 'Не допускайте конктакт с въздух.',
    cs: 'Zabraňte styku se vzduchem.',
    da: 'Undgå kontakt med luft.',
    de: 'Keinen Kontakt mit Luft zulassen.',
    el: 'Να μην έρθει σε επαφή με τον αέρα.',
    en: 'Do not allow contact with air.',
    es: 'No dejar que entre en contacto con el aire.',
    et: 'Hoida õhuga kokkupuute eest.',
    fi: 'Ei saa joutua kosketuksiin ilman kanssa.',
    fr: 'Ne pas laisser au contact de l’air.',
    ga: 'Ná ceadaigh teagmháil le haer.',
    hr: 'Spriječiti dodir sa zrakom.',
    hu: 'Nem érintkezhet levegővel.',
    it: 'Evitare il contatto con l’aria.',
    lt: 'Saugoti nuo kontakto su oru.',
    lv: 'Nepieļaut kontaktu ar gaisu.',
    mt: 'Tħallix li jkun hemm kuntatt ma\' l-arja.',
    nl: 'Contact met de lucht vermijden.',
    pl: 'Nie dopuszczać do kontaktu z powietrzem.',
    pt: 'Não deixar entrar em contacto com o ar.',
    ro: 'A nu se lăsa în contact cu aerul.',
    sk: 'Zabráňte kontaktu so vzduchom.',
    sl: 'Preprečiti stik z zrakom.',
    sv: 'Undvik kontakt med luft.'
  }
} ) as const satisfies StatementConfig;
