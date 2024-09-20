import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const savedLanguage = localStorage.getItem('language') || 'en-us';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-us',
        lng: savedLanguage,
        resources: {
            'en-us': {
                translation: require('../public/locales/en-us/translation.json')
            },
            'pt-br': {
                translation: require('../public/locales/pt-br/translation.json')
            },
            'es': {
                translation: require('../public/locales/es/translation.json')
            }
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;