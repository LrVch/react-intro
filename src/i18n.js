import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-chained-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',
    // saveMissing: true,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },

    backend: {
      backends: [
        XHR
      ],
      backendOptions: [{
        /* below options */
      }, {
        loadPath: '/locales/{{lng}}/{{ns}}.json' // xhr load path for my own fallback
      }]
    }
  });

console.log('i18n', i18n)

export default i18n;