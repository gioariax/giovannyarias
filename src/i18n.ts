import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./translations/en.json";  // translation file containing json from above
import esp from "./translations/es.json";

const resources = {
  en: {translation: eng},
  es: {translation: esp},
}

i18n
  .use(initReactI18next)
  .init({ 
    resources, 
    lng: "en",
	interpolation: { 
	  escapeValue: false,
	} 
});

export default i18n;