import type { Statement } from '../../src/types';

export default ( {
  code: 'P370+P378',
  translations: {
    bg: 'При пожар: Използвайте…, за да загасите.',
    cs: 'V případě požáru: K uhašení použijte…',
    da: 'Ved brand: Anvend… til brandslukning.',
    de: 'Bei Brand: … zum Löschen verwenden.',
    el: 'Σε περίπτωση πυρκαγιάς: Χρησιμοποιήστε… για να κατασβήσετε.',
    en: 'In case of fire: Use… to extinguish.',
    es: 'En caso de incendio: Utilizar… para la extinción.',
    et: 'Tulekahju korral: kasutada kustutamiseks…',
    fi: 'Tulipalon sattuessa: Käytä palon sammuttamiseen…',
    fr: 'En cas d’incendie: Utiliser… pour l’extinction.',
    ga: 'I gcás dóiteáin: Úsáid … le haghaidh múchta.',
    hr: 'U slučaju požara: za gašenje rabiti …',
    hu: 'Tűz esetén: oltásra …használandó.',
    it: 'In caso d’incendio: utilizzare…per estinguere.',
    lt: 'Gaisro atveju: gesinimui naudoti …',
    lv: 'Ugunsgrēka gadījumā: dzēšanai izmantojiet …',
    mt: 'F’każ ta’ nar: Uża… biex titfi.',
    nl: 'In geval van brand: blussen met …',
    pl: 'W przypadku pożaru: Użyć… do gaszenia.',
    pt: 'Em caso de incêndio: para extinguir utilizar….',
    ro: 'În caz de incendiu: a se utiliza… pentru a stinge.',
    sk: 'V prípade požiaru: Na hasenie použite…',
    sl: 'Ob požaru: Za gašenje se uporabi …',
    sv: 'Vid brand: Släck med…'
  }
} ) as const satisfies Statement;
