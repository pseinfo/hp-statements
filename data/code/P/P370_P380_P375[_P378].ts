import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'P370+P380+P375[+P378]',
  translations: {
    bg: 'При пожар: евакуирайте зоната. Гасете пожара от разстояние поради опасност от експлозия. [Използвайте…, за да загасите].',
    cs: 'V případě požáru: Vykliďte prostor. Kvůli nebezpečí výbuchu haste z dostatečné vzdálenosti. [K uhašení použijte …].',
    da: 'Ved brand: Evakuer området. Bekæmp branden på afstand på grund af eksplosionsfare. [Anvend … til brandslukning].',
    de: 'Bei Brand: Umgebung räumen. Wegen Explosionsgefahr Brand aus der Entfernung bekämpfen. [… zum Löschen verwenden.]',
    el: 'Σε περίπτωση πυρκαγιάς: Εκκενώστε την περιοχή. Προσπαθήστε να σβήσετε την πυρκαγιά από απόσταση, επειδή υπάρχει κίνδυνος έκρηξης [Χρησιμοποιήστε … για την κατάσβεση].',
    en: 'In case of fire: Evacuate area. Fight fire remotely due to the risk of explosion. [Use … to extinguish].',
    es: 'En caso de incendio: Evacuar la zona. Combatir el incendio a distancia, debido al riesgo de explosión. [Utilizar … en la extinción].',
    et: 'Tulekahju korral: ala evakueerida. Plahvatusohu tõttu teha kustutustöid eemalt. [Kustutamiseks kasutada ….].',
    fi: 'Tulipalon sattuessa: Evakuoi alue. Sammuta palo etäältä räjähdysvaaran takia. [Käytä palon sammuttamiseen …].',
    fr: 'En cas d\'incendie: Évacuer la zone. Combattre l\'incendie à distance à cause du risque d\'explosion. [Utiliser … pour l\'extinction].',
    ga: 'I gcás dóiteáin: Aslonnaigh gach duine as an limistéar. Téigh i gcianghleic leis an dóiteán mar gheall ar an mbaol pléasctha. [Úsáid … le haghaidh múchta].',
    hr: 'U slučaju požara: evakuirati područje. Gasiti s veće udaljenosti zbog opasnosti od eksplozije. [Za gašenje rabiti…].',
    hu: 'Tűz esetén: A területet ki kell üríteni. A tűz oltását robbanásveszély miatt távolból kell végezni. [Az oltáshoz … használandó].',
    it: 'In caso di incendio: evacuare la zona. Rischio di esplosione. Utilizzare i mezzi estinguenti a grande distanza. [Estinguere con…].',
    lt: 'Gaisro atveju: evakuoti zoną. Gaisrą gesinti iš toli dėl sprogimo pavojaus. [Gesinimui naudoti …].',
    lv: 'Ugunsgrēka gadījumā: Evakuēt zonu. Dzēst uguni no attāluma eksplozijas riska dēļ. [Dzēšanai lietot …].',
    mt: 'F\'każ ta\' nar: Evakwa ż-żona. Itfi n-nar mill-bogħod minħabba r-riskju ta\' splużjoni. [Uża … biex titfi].',
    nl: 'In geval van brand: evacueren. Op afstand blussen in verband met ontploffingsgevaar. [Blussen met …].',
    pl: 'W przypadku pożaru: Ewakuować teren. Z powodu ryzyka wybuchu gasić pożar z odległości. [Użyć … do gaszenia].',
    pt: 'Em caso de incêndio: Evacuar a zona. Combater o incêndio à distância, devido ao risco de explosão. [Para extinguir utilizar…].',
    ro: 'În caz de incendiu: Evacuați zona. Stingeți incendiul de la distanță din cauza pericolului de explozie. [Utilizați … pentru stingere].',
    sk: 'V prípade požiaru: Priestory evakuujte. Z dôvodu nebezpečenstva výbuchu požiar haste z diaľky. [Na hasenie použite…].',
    sl: 'Ob požaru: Izprazniti območje. Gasiti z večje razdalje zaradi nevarnosti eksplozije. [Za gašenje uporabiti …].',
    sv: 'Vid brand: Utrym området. Bekämpa branden på avstånd på grund av explosionsrisken. [Släck med …].'
  }
} ) as const satisfies StatementConfig;
