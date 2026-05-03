import type { StatementConfig } from '../../../src/types';

export default ( {
  code: 'P411',
  translations: {
    bg: 'Да се съхранява при температури, не по-високи от … °C/…°F.',
    cs: 'Skladujte při teplotě nepřesahující … °C/…°F.',
    da: 'Opbevares ved en temperatur, som ikke overstiger … °C/…°F.',
    de: 'Bei Temperaturen nicht über … °C/… °F aufbewahren.',
    el: 'Αποθηκεύεται σε θερμοκρασίες που δεν υπερβαίνουν τους … °C/…°F.',
    en: 'Store at temperatures not exceeding … °C/…°F.',
    es: 'Almacenar a temperaturas no superiores a … °C/…°F.',
    et: 'Hoida temperatuuril mitte üle … °C/… °F.',
    fi: 'Varastoi alle … °C/…°F lämpötilassa.',
    fr: 'Stocker à une température ne dépassant pas … °C/… °F.',
    ga: 'Stóráil ag teocht nach airde ná … °C/…°F.',
    hr: 'Skladištiti na temperaturi koja ne prelazi …°C/…°F.',
    hu: 'A tárolási hőmérséklet legfeljebb … °C/…°F lehet.',
    it: 'Conservare a temperature non superiori a … °C/…°F.',
    lt: 'Laikyti ne aukštesnėje kaip … °C/…°F temperatūroje.',
    lv: 'Uzglabāt temperatūrā, kas nepārsniedz … °C/…°F.',
    mt: 'Aħżen f’temperaturi li ma jeċċedux … °C/…°F.',
    nl: 'Bij maximaal … °C/…°F bewaren.',
    pl: 'Przechowywać w temperaturze nieprzekraczającej … °C/…°F.',
    pt: 'Armazenar a uma temperatura não superior a … °C/…°F.',
    ro: 'A se depozita la temperaturi care să nu depășească … °C/…°F.',
    sk: 'Uchovávajte pri teplotách do … °C/…°F',
    sl: 'Hraniti pri temperaturi do … °C/… °F.',
    sv: 'Förvaras vid högst … °C/…°F.'
  }
} ) as const satisfies StatementConfig;
