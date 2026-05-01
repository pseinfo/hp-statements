import type { StatementConfig } from '../../src/types';

export default ( {
  code: 'EUH210',
  translations: {
    bg: 'Информационен лист за безопасност ще бъде представен при поискване.',
    cs: 'Na vyžádání je k°dispozici bezpečnostní list.',
    da: 'Sikkerhedsdatablad kan på anmodning rekvireres.',
    de: 'Sicherheitsdatenblatt auf Anfrage erhältlich.',
    el: 'Δελτίο δεδομένων ασφαλείας παρέχεται εφόσον ζητηθεί.',
    en: 'Safety data sheet available on request.',
    es: 'Puede solicitarse la ficha de datos de seguridad.',
    et: 'Ohutuskaart nõudmisel kättesaadav.',
    fi: 'Käyttöturvallisuustiedote toimitetaan pyynnöstä.',
    fr: 'Fiche de données de sécurité disponible sur demande.',
    ga: 'Bileog sonraí sábháilteachta ar fáil arna iarraidh sin.',
    hr: 'Sigurnosno-tehnički list dostupan na zahtjev.',
    hu: 'Kérésre biztonsági adatlap kapható.',
    it: 'Scheda dati di sicurezza disponibile su richiesta.',
    lt: 'Saugos duomenų lapą galima gauti paprašius.',
    lv: 'Drošības datu lapa ir pieejama pēc pieprasījuma.',
    mt: 'Il-karta tad-data dwar is-sikurezza hija disponibbli meta tintalab.',
    nl: 'Veiligheidsinformatieblad op verzoek verkrijgbaar.',
    pl: 'Karta charakterystyki dostępna na żądanie.',
    pt: 'Ficha de segurança fornecida a pedido.',
    ro: 'Fișa cu date de securitate disponibilă la cerere.',
    sk: 'Na požiadanie možno poskytnúť kartu bezpečnostných údajov.',
    sl: 'Varnosti list na voljo na zahtevo.',
    sv: 'Säkerhetsdatablad finns att rekvirera.'
  }
} ) as const satisfies StatementConfig;
