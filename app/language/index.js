import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../language/en.json';
import hi from '../language/hi.json';
import {useSelector} from 'react-redux';
// const currentLang = useSelector(state => state.user.language);

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
    hi: {translation: hi},
  },
  lng: 'en', // ✅ Default language set to Hindi
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
