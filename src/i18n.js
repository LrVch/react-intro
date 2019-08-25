import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',

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

console.log(i18n)

export default i18n;