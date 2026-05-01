import type { Statement } from '../../src/types';

export default ( {
  code: 'H261',
  translations: {
    bg: 'При контакт с вода отделя запалими газове.',
    cs: 'Při styku s vodou uvolňuje hořlavé plyny.',
    da: 'Ved kontakt med vand udvikles brandfarlige gasser.',
    de: 'In Berührung mit Wasser entstehen entzündbare Gase.',
    el: 'Σε επαφή με το νερό ελευθερώνει εύφλεκτα αέρια.',
    en: 'In contact with water releases flammable gases.',
    es: 'En contacto con el agua desprende gases inflamables.',
    et: 'Kokkupuutel veega eraldab tuleohtlikke gaase.',
    fi: 'Kehittää syttyviä kaasuja veden kanssa.',
    fr: 'Dégage au contact de l\'eau des gaz inflammables.',
    ga: 'I dteagmháil le huisce scaoiltear gáis inadhainte.',
    hr: 'U dodiru s vodom oslobađa zapaljive plinove.',
    hu: 'Vízzel érintkezve tűzveszélyes gázokat bocsát ki.',
    it: 'A contatto con l\'acqua libera gas infiammabili.',
    lt: 'Kontaktuodami su vandeniu išskiria degias dujas',
    lv: 'Nonākot saskarē ar ūdeni, izdala uzliesmojošu gāzi.',
    mt: 'Meta jmiss ma\' l-ilma jerħi gassijiet li jaqbdu.',
    nl: 'In contact met water komen ontvlambare gassen vrij.',
    pl: 'W kontakcie z wodą uwalnia łatwopalne gazy.',
    pt: 'Em contacto com a água liberta gases inflamáveis.',
    ro: 'În contact cu apa degajă gaze inflamabile.',
    sk: 'Pri kontakte s vodou uvoľňuje horľavé plyny.',
    sl: 'V stiku z vodo se sproščajo vnetljivi plini.',
    sv: 'Vid kontakt med vatten utvecklas brandfarliga gaser.'
  }
} ) as const satisfies Statement;
