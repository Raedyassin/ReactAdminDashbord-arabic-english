import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './locales/en.json'
import arabic from './locales/ar.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: arabic,
      en: english,
    },
    fallbackLng: 'en',
    lng: "en",
    // defaultNS: 'logo'
  });

export default i18n;