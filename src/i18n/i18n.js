import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./fr.json";
import en from "./en.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "fr",            
    fallbackLng: "en",
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
  });

export default i18n;
