import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { contact, experience, header, projects } from './translations';

i18n
    .use(initReactI18next)
    .init({
    resources: {
        En: {
        translation: {
            // English translations go here
            ...header.en,
            ...experience.en,
            ...contact.en,
            ...projects.en
        },
        },
        Fr: {
        translation: {
            // French translations go here
            ...header.fr,
            ...experience.fr,
            ...contact.fr,
            ...projects.fr
        },
        },
    },
    lng: 'En', // Default language
    fallbackLng: 'En', // Fallback language
    interpolation: {
        escapeValue: false,
    },
    });

export default i18n;