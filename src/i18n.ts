import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      appName: 'AI Model Manager',
      dashboard: 'Dashboard',
      aiModels: 'AI Models',
      welcome: 'Welcome to AI Model Manager',
    },
  },
  ja: {
    translation: {
      appName: 'AIモデルマネージャー',
      dashboard: 'ダッシュボード',
      aiModels: 'AIモデル',
      welcome: 'AIモデルマネージャーへようこそ',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
