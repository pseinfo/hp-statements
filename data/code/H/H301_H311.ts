import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'H301+H311',
  translations: {
    bg: 'Токсичен при поглъщане или при контакт с кожата',
    cs: 'Toxický při požití a při styku s kůží',
    da: 'Giftig ved indtagelse eller hudkontakt',
    de: 'Giftig bei Verschlucken oder Hautkontakt',
    el: 'Τοξικό σε περίπτωση κατάποσης ή σε επαφή με το δέρμα',
    en: 'Toxic if swallowed or in contact with skin',
    es: 'Tóxico en caso de ingestión o en contacto con la piel',
    et: 'Allaneelamisel või nahale sattumisel mürgine',
    fi: 'Myrkyllistä nieltynä tai joutuessaan iholle',
    fr: 'Toxique par ingestion ou par contact cutané',
    ga: 'Ábhar tocsaineach má shlogtar é nó má theagmhaíonn leis an gcraiceann',
    hr: 'Otrovno ako se proguta ili u dodiru s kožom',
    hu: 'Lenyelve vagy bőrrel érintkezve mérgező',
    it: 'Tossico se ingerito o a contatto con la pelle',
    lt: 'Toksiška prarijus arba susilietus su oda',
    lv: 'Toksisks, ja norīts vai saskaras ar ādu',
    mt: 'Tossika jekk tinbela\' jew tmiss mal-ġilda',
    nl: 'Giftig bij inslikken en bij contact met de huid',
    pl: 'Działa toksycznie po połknięciu lub w kontakcie ze skórą',
    pt: 'Tóxico por ingestão ou contacto com a pele',
    ro: 'Toxic în caz de înghițire sau în contact cu pielea',
    sk: 'Toxický pri požití a pri styku s kožou',
    sl: 'Strupeno pri zaužitju ali v stiku s kožo',
    sv: 'Giftigt vid förtäring eller hudkontakt'
  }
} ) as const satisfies StatementConfig;
