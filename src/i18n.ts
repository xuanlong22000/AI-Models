import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      appName: 'AI Model Manager',
      dashboard: 'Dashboard',
      aiModels: 'AI Models',
      welcome: 'Welcome to AI Model Manager',
      noModelsFound: 'No models found.',
      modelName: 'Model Name',
      modelDescription: 'Model Description',
      modelVersion: 'Version',
      modelStatus: 'Status',
      modelCreatedAt: 'Created At',
      modelTags: 'Tags',
      modelTag: 'Tag',
      back: 'Back',
      modelContent: 'Content',
    },
  },
  ja: {
    translation: {
      appName: 'AIモデルマネージャー',
      dashboard: 'ダッシュボード',
      aiModels: 'AIモデル',
      welcome: 'AIモデルマネージャーへようこそ',
      noModelsFound: 'モデルが見つかりません。',
      modelName: 'モデル名',
      modelDescription: 'モデル説明',
      modelVersion: 'バージョン',
      modelStatus: 'ステータス',
      modelCreatedAt: '作成日時',
      modelTags: 'タグ',
      modelTag: 'タグ',
      back: '戻る',
      modelContent: 'コンテンツ',
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
