import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'P301+P310',
  translations: {
    bg: 'ПРИ ПОГЛЪЩАНЕ: Незабавно се обадете в ЦЕНТЪР ПО ТОКСИКОЛОГИЯ/на лекар/…',
    cs: 'PŘI POŽITÍ: Okamžitě volejte TOXIKOLOGICKÉ INFORMAČNÍ STŘEDISKO/lékaře/….',
    da: 'I TILFÆLDE AF INDTAGELSE: Ring omgående til en GIFTINFORMATION/læge/…',
    de: 'BEI VERSCHLUCKEN: Sofort GIFTINFORMATIONSZENTRUM/Arzt/…/anrufen.',
    el: 'ΣΕ ΠΕΡΙΠΤΩΣΗ ΚΑΤΑΠΟΣΗΣ: καλέστε αμέσως το ΚΕΝΤΡΟ ΔΗΛΗΤΗΡΙΑΣΕΩΝ/γιατρό/…',
    en: 'IF SWALLOWED: Immediately call a POISON CENTER/doctor/…',
    es: 'EN CASO DE INGESTIÓN: Llamar inmediatamente a un CENTRO DE TOXICOLOGĺA/médico/…',
    et: 'ALLANEELAMISE KORRAL: võtta viivitamata ühendust MÜRGISTUSTEABEKESKUSE/arstiga…',
    fi: 'JOS KEMIKAALIA ON NIELTY: Ota välittömästi yhteys MYRKYTYSTIETOKESKUKSEEN/lääkäriin/…',
    fr: 'EN CAS D’INGESTION: Appeler immédiatement un CENTRE ANTIPOISON/un médecin/…',
    ga: 'MÁ SHLOGTAR: Cuir glao láithreach ar IONAD NIMHE/ar dhoctúir/…',
    hr: 'AKO SE PROGUTA: odmah nazvati CENTAR ZA KONTROLU OTROVANJA/liječnika/…',
    hu: 'LENYELÉS ESETÉN: Azonnal forduljon TOXIKOLÓGIAI KÖZPONTHOZ/orvoshoz/….',
    it: 'IN CASO DI INGESTIONE: contattare immediatamente un CENTRO ANTIVELENI/un medico/…',
    lt: 'PRARIJUS: nedelsiant skambinti į APSINUODIJIMŲ KONTROLĖS IR INFORMACIJOS BIURĄ/kreiptis į gydytoją/…',
    lv: 'NORĪŠANAS GADĪJUMĀ: Nekavējoties sazinieties ar SAINDĒŠANĀS INFORMĀCIJAS CENTRU/ārstu/…',
    mt: 'JEKK JINBELA’: Sejjaħ minnufih ĊENTRU TAL-AVVELENAMENT/tabib/…',
    nl: 'NA INSLIKKEN: onmiddellijk een ANTIGIFCENTRUM/arts/… raadplegen.',
    pl: 'W PRZYPADKU POŁKNIĘCIA: Natychmiast skontaktować się z OŚRODKIEM ZATRUĆ/lekarzem/…',
    pt: 'EM CASO DE INGESTÃO: contacte imediatamente um CENTRO DE INFORMAÇÃO ANTIVENENOS/médico/…',
    ro: 'ÎN CAZ DE ÎNGHIȚIRE: sunați imediat la un CENTRU DE INFORMARE TOXICOLOGICĂ/un medic/…',
    sk: 'PO POŽITÍ: Okamžite volajte TOXIKOLOGICKÉ INFORMAČNÉ CENTRUM/lekára/…',
    sl: 'PRI ZAUŽITJU: Takoj pokličite CENTER ZA ZASTRUPITVE/zdravnika/…',
    sv: 'VID FÖRTÄRING: Kontakta genast GIFTINFORMATIONSCENTRALEN/läkare/…'
  }
} ) as const satisfies StatementConfig;
