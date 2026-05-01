import type { Statement } from '../../src/types';

export default ( {
  code: 'P377',
  translations: {
    bg: 'Пожар от изтекъл газ: Не гасете освен при възможност за безопасно отстраняване на теча.',
    cs: 'Požár unikajícího plynu: Nehaste, nelze-li únik bezpečně zastavit.',
    da: 'Brand fra udsivende gas: Sluk ikke, medmindre det er sikkert at stoppe lækagen.',
    de: 'Brand von ausströmendem Gas: Nicht löschen, bis Undichtigkeit gefahrlos beseitigt werden kann.',
    el: 'Διαρροή φλεγόμενου αερίου: Μην την σβήσετε, εκτός εάν μπορείτε να σταματήσετε τη διαρροή χωρίς κίνδυνο.',
    en: 'Leaking gas fire: Do not extinguish, unless leak can be stopped safely.',
    es: 'Fuga de gas en llamas: No apagar, salvo si la fuga puede detenerse sin peligro.',
    et: 'Lekkiva gaasi põlemise korral mitte kustutada, välja arvatud juhul, kui leket on võimalik ohutult peatada.',
    fi: 'Vuotavasta kaasusta johtuva palo: Ei saa sammuttaa, jollei vuotoa voida pysäyttää turvallisesti.',
    fr: 'Fuite de gaz enflammé: Ne pas éteindre si la fuite ne peut pas être arrêtée sans danger.',
    ga: 'Tine gháis ag sceitheadh: Ná múch, mura i ndán agus gur féidir stop a chur leis an sceitheadh go sábháilte.',
    hr: 'Požar zbog istjecanja plina: ne gasiti ako nije moguće sa sigurnošću zaustaviti istjecanje.',
    hu: 'Égő szivárgó gáz: Csak akkor szabad a tüzet oltani, ha a szivárgás biztonságosan megszüntethető.',
    it: 'In caso d’incendio dovuto a perdita di gas, non estinguere a meno che non sia possibile bloccare la perdita senza pericolo.',
    lt: 'Dujų nuotėkio sukeltas gaisras: Negesinti, nebent nuotėkį būtų galima saugiai sustabdyti.',
    lv: 'Degšanas gāzes noplūde: Nedzēst, ja vien noplūdi var apstādināt drošā veidā.',
    mt: 'Tnixxija ta\' gass tan-nar: Tippruvax titfiha, sakemm it-tnixxija ma tkunx tista\' titwaqqaf bla periklu.',
    nl: 'Brand door lekkend gas: niet blussen, tenzij het lek veilig gedicht kan worden.',
    pl: 'W przypadku płonięcia wyciekającego gazu: Nie gasić, jeżeli nie można bezpiecznie zahamować wycieku.',
    pt: 'Incêndio por fuga de gás: não apagar, a menos que se possa deter a fuga em segurança.',
    ro: 'Incendiu cauzat de o scurgere de gaz: nu încercați să stingeți, decât dacă scurgerea poate fi oprită în siguranță.',
    sk: 'Požiar unikajúceho plynu: Nehaste, pokiaľ únik nemožno bezpečne zastaviť.',
    sl: 'Požar zaradi uhajanja plina: Ne gasiti, če puščanja ni mogoče varno zaustaviti.',
    sv: 'Läckande gas som brinner: Försök inte släcka branden om inte läckan kan stoppas på ett säkert sätt.'
  }
} ) as const satisfies Statement;
