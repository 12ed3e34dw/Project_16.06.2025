import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '/src/components/i18n/languages/en.json';
import uk from '/src/components/i18n/languages/uk.json';

export const resources = {
    en: { translation: en },
    uk: { translation: uk },
};

export const loadLanguage = () => {
    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: 'en', //default
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false,
            },
        });
};

export const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
};
