import type { Statement } from '../../src/types';

export default ( {
  code: 'P370+P376',
  translations: {
    bg: 'При пожар: Спрете теча, ако е безопасно.',
    cs: 'V případě požáru: Zastavte únik, můžete-li tak učinit bez rizika.',
    da: 'Ved brand: Stands lækagen, hvis dette er sikkert.',
    de: 'Bei Brand: Undichtigkeit beseitigen, wenn gefahrlos möglich.',
    el: 'Σε περίπτωση πυρκαγιάς: Σταματήστε τη διαρροή, εφόσον δεν υπάρχει κίνδυνος.',
    en: 'In case of fire: Stop leak if safe to do so.',
    es: 'En caso de incendio: Detener la fuga, si no hay peligro en hacerlo.',
    et: 'Tulekahju korral: leke peatada, kui seda on võimalik teha ohutult.',
    fi: 'Tulipalon sattuessa: Sulje vuoto, jos sen voi tehdä turvallisesti.',
    fr: 'En cas d’incendie: obturer la fuite si cela peut se faire sans danger.',
    ga: 'I gcás dóiteáin: Cuir stop leis an sceitheadh má tá sé sábháilte é sin a dhéanamh.',
    hr: 'U slučaju požara: ako je sigurno, zaustaviti istjecanje.',
    hu: 'Tűz esetén: Meg kell szüntetni a szivárgást, ha ez biztonságosan megtehető.',
    it: 'In caso di incendio: bloccare la perdita se non c’è pericolo.',
    lt: 'Gaisro atveju: sustabdyti nuotėkį, jeigu galima saugiai tai padaryti.',
    lv: 'Ugunsgrēka gadījumā: apturiet noplūdi, ja to darīt ir droši.',
    mt: 'F’każ ta\' nar: Waqqaf it-tnixxija sakemm ma jkunx ta\' periklu.',
    nl: 'In geval van brand: het lek dichten als dat veilig gedaan kan worden.',
    pl: 'W przypadku pożaru: Jeżeli jest to bezpieczne zahamować wyciek.',
    pt: 'Em caso de incêndio: deter a fuga se tal puder ser feito em segurança.',
    ro: 'În caz de incendiu: opriți scurgerea, dacă acest lucru se poate face în siguranță.',
    sk: 'V prípade požiaru: ak je to bezpečné, zastavte únik.',
    sl: 'Ob požaru: zaustaviti puščanje, če je varno.',
    sv: 'Vid brand: Stoppa läckan om det kan göras på ett säkert sätt.'
  }
} ) as const satisfies Statement;
