// import i18 from "i18next"
// import { initReactI18next } from "react-i18next"
// import Backend from "i18next-http-backend"
// import LanguageDetector from 'i18next-browser-languagedetector'

// i18
//     .use(initReactI18next)
//     .use(Backend)
//     .use(LanguageDetector)
//     .init({
//         debug: true,
//         fallbackLng: 'en',
//         interpolation: {
//             escapeValue: false,
//         }
//     })

// export default i18

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en/translation.json";
import esTranslation from "../locales/es/translation.json";
const savedLanguage = localStorage.getItem("language") || "en";
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            es: { translation: esTranslation },
        },
        lng: savedLanguage,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;

