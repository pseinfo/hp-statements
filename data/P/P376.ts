import type { Statement } from '../../src/types';

export default ( {
  code: 'P376',
  translations: {
    bg: 'Спрете теча, ако е безопасно.',
    cs: 'Zastavte únik, můžete-li tak učinit bez rizika.',
    da: 'Stands lækagen, hvis dette er sikkert.',
    de: 'Undichtigkeit beseitigen, wenn gefahrlos möglich.',
    el: 'Σταματήστε τη διαρροή, εφόσον δεν υπάρχει κίνδυνος.',
    en: 'Stop leak if safe to do so.',
    es: 'Detener la fuga, si no hay peligro en hacerlo.',
    et: 'Leke peatada, kui seda on võimalik teha ohutult.',
    fi: 'Sulje vuoto, jos sen voi tehdä turvallisesti.',
    fr: 'Obturer la fuite si cela peut se faire sans danger.',
    ga: 'Cuir stop leis an sceitheadh má tá sé sábháilte é sin a dhéanamh.',
    hr: 'Ako je sigurno, zaustaviti istjecanje.',
    hu: 'Meg kell szüntetni a szivárgást, ha ez biztonságosan megtehető.',
    it: 'Bloccare la perdita se non c’è pericolo.',
    lt: 'Sustabdyti nuotėkį, jeigu galima saugiai tai padaryti.',
    lv: 'Apstādināt noplūdi, ja to var izdarīt drošā veidā.',
    mt: 'Waqqaf it-tnixxija jekk ma jkunx hemm periklu.',
    nl: 'Het lek dichten als dat veilig gedaan kan worden.',
    pl: 'Jeżeli jest to bezpieczne zahamować wyciek.',
    pt: 'Deter a fuga se tal puder ser feito em segurança.',
    ro: 'Opriți scurgerea, dacă acest lucru se poate face în siguranță.',
    sk: 'Zastavte únik, ak je to bezpečné.',
    sl: 'Zaustaviti puščanje, če je varno.',
    sv: 'Stoppa läckan om det kan göras på ett säkert sätt.'
  }
} ) as const satisfies Statement;
