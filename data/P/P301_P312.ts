import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'P301+P312',
  translations: {
    bg: 'ПРИ ПОГЛЪЩАНЕ: при неразположение се обадете в ЦЕНТЪР ПО ТОКСИКОЛОГИЯ/на лекар/…',
    cs: 'PŘI POŽITÍ: Necítíte-li se dobře, volejte TOXIKOLOGICKÉ INFORMAČNÍ STŘEDISKO / lékaře / … .',
    da: 'I TILFÆLDE AF INDTAGELSE: Kontakt GIFTLINJEN/læge/… i tilfælde af ubehag.',
    de: 'BEI VERSCHLUCKEN: Bei Unwohlsein GIFTINFORMATIONSZENTRUM/Arzt/… anrufen.',
    el: 'ΣΕ ΠΕΡΙΠΤΩΣΗ ΚΑΤΑΠΟΣΗΣ: Καλέστε το ΚΕΝΤΡΟ ΔΗΛΗΤΗΡΙΑΣΕΩΝ/γιατρό/…, αν αισθανθείτε αδιαθεσία.',
    en: 'IF SWALLOWED: Call a POISON CENTRE/doctor/… if you feel unwell.',
    es: 'EN CASO DE INGESTIÓN: Llamar a un CENTRO DE TOXICOLOGÍA / médico /… si la persona se encuentra mal.',
    et: 'ALLANEELAMISE KORRAL: halva enesetunde korral võtta ühendust MÜRGISTUSTEABEKESKUSEGA/arstiga/…/.',
    fi: 'JOS KEMIKAALIA ON NIELTY: Ota yhteys MYRKYTYSTIETOKESKUKSEEN/lääkäriin/…, jos ilmenee pahoinvointia.',
    fr: 'EN CAS D\'INGESTION: Appeler un CENTRE ANTIPOISON/un médecin/…/ en cas de malaise.',
    ga: 'MÁ SHLOGTAR: Cuir glao ar IONAD NIMHE/dochtúir/… má bhraitheann tú tinn.',
    hr: 'AKO SE PROGUTA: u slučaju zdravstvenih tegoba nazvati CENTAR ZA KONTROLU OTROVANJA / liječnika / …',
    hu: 'LENYELÉS ESETÉN: Rosszullét esetén forduljon TOXIKOLÓGIAI KÖZPONTHOZ/orvoshoz/….',
    it: 'IN CASO DI INGESTIONE: in presenza di malessere, contattare un CENTRO ANTIVELENI/un medico/… .',
    lt: 'PRARIJUS: pasijutus blogai, skambinti į APSINUODIJIMŲ KONTROLĖS IR INFORMACIJOS BIURĄ / kreiptis į gydytoją / …',
    lv: 'NORĪŠANAS GADĪJUMĀ: Sazinieties ar SAINDĒŠANĀS INFORMĀCIJAS CENTRU/ ārstu/…, ja jums ir slikta pašsajūta.',
    mt: 'JEKK JINBELA\': Ikkuntattja ĊENTRU TAL-AVVELENAMENT / tabib /… jekk tħossok ma tiflaħx.',
    nl: 'NA INSLIKKEN: bij onwel voelen een ANTIGIFCENTRUM/arts/… raadplegen.',
    pl: 'W PRZYPADKU POŁKNIĘCIA: W przypadku złego samopoczucia skontaktować się z OŚRODKIEM ZATRUĆ/ lekarzem/….',
    pt: 'EM CASO DE INGESTÃO: Caso sinta indisposição, contacte um CENTRO DE INFORMAÇÃO ANTIVENENOS/médico/… .',
    ro: 'ÎN CAZ DE ÎNGHIȚIRE: Sunați la un CENTRU DE INFORMARE TOXICOLOGICĂ/un medic/… dacă nu vă simțiți bine.',
    sk: 'PO POŽITÍ: Pri zdravotných problémoch volajte NÁRODNÉ TOXIKOLOGICKÉ INFORMAČNÉ CENTRUM/lekára/… .',
    sl: 'PRI ZAUŽITJU: Ob slabem počutju pokličite CENTER ZA ZASTRUPITVE/zdravnika/… .',
    sv: 'VID FÖRTÄRING: Vid obehag, kontakta GIFTINFORMATIONSCENTRALEN/läkare… .'
  }
} ) as const satisfies StatementConfig;
