import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enData } from "./en";
import { ruData } from "./ru";
import { uzData } from "./uz";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: enData,
    },
    ru: {
      translation: ruData,
    },
    uz: {
      translation: uzData,
    },
  },
});

export default i18n;
