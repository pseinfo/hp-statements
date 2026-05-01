import type { Statement } from '../../src/types';

export default ( {
  code: 'P370+P380+P375',
  translations: {
    bg: 'При пожар: Евакуирайте зоната. Гасете пожара от разстояние поради опасност от експлозия.',
    cs: 'V případě požáru: Vykliďte prostor. Kvůli nebezpečí výbuchu haste z dostatečné vzdálenosti.',
    da: 'Ved brand: Evakuer området. Bekæmp branden på afstand på grund af eksplosionsfare.',
    de: 'Bei Brand: Umgebung räumen. Wegen Explosionsgefahr Brand aus der Entfernung bekämpfen.',
    el: 'Σε περίπτωση πυρκαγιάς: Εκκενώστε την περιοχή. Προσπαθήστε να σβήσετε την πυρκαγιά από απόσταση, επειδή υπάρχει κίνδυνος έκρηξης.',
    en: 'In case of fire: Evacuate area. Fight fire remotely due to the risk of explosion.',
    es: 'En caso de incendio: Evacuar la zona. Luchar contra el incendio a distancia, dado el riesgo de explosión.',
    et: 'Tulekahju korral: ala evakueerida. Plahvatusohu tõttu teha kustutustöid eemalt.',
    fi: 'Tulipalon sattuessa: Evakuoi alue. Sammuta palo etäältä räjähdysvaaran takia.',
    fr: 'En cas d’incendie: évacuer la zone. Combattre l’incendie à distance à cause du risque d’explosion.',
    ga: 'I gcás dóiteáin: Aslonnaigh gach duine as an limistéar. Téigh i gcianghleic leis an dóiteán mar gheall ar an mbaol pléasctha.',
    hr: 'U slučaju požara: evakuirati područje. Gasiti s veće udaljenosti zbog opasnosti od eksplozije.',
    hu: 'Tűz esetén: Ki kell üríteni a területet. A tűz oltását robbanásveszély miatt távolból kell végezni.',
    it: 'In caso di incendio: evacuare la zona. Rischio di esplosione. Utilizzare i mezzi estinguenti a grande distanza.',
    lt: 'Gaisro atveju: evakuoti zoną. Gaisrą gesinti iš toli dėl sprogimo pavojaus.',
    lv: 'Ugunsgrēka gadījumā: evakuēt zonu. Dzēst uguni no attāluma eksplozijas riska dēļ.',
    mt: 'F’każ ta\' nar: Evakwa ż-żona. Itfi n-nar mill-bogħod minħabba r-riskju ta\' splużjoni.',
    nl: 'In geval van brand: evacueren. Op afstand blussen omwille van ontploffingsgevaar.',
    pl: 'W przypadku pożaru: Ewakuować teren. Z powodu ryzyka wybuchu gasić pożar z odległości.',
    pt: 'Em caso de incêndio: evacuar a zona. Combater o incêndio à distância, devido ao risco de explosão.',
    ro: 'În caz de incendiu: evacuați zona. Stingeți incendiul de la distanță din cauza pericolului de explozie.',
    sk: 'V prípade požiaru: priestory evakuujte. Z dôvodu nebezpečenstva výbuchu požiar haste z diaľky.',
    sl: 'Ob požaru: izprazniti območje. Gasiti z večje razdalje zaradi nevarnosti eksplozije.',
    sv: 'Vid brand: Utrym området. Bekämpa branden på avstånd på grund av explosionsrisken.'
  }
} ) as const satisfies Statement;
