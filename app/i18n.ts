import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: require('../public/locales/en-us/translation.json')
            },
            pt: {
                translation: require('../public/locales/pt-br/translation.json')
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;