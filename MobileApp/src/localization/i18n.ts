import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as translations from './translations';
import {LANGUAGE_CODES} from '../types';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(translations).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: LANGUAGE_CODES.ENGLISH,
  fallbackLng: LANGUAGE_CODES.ENGLISH,
});

export default i18n;
