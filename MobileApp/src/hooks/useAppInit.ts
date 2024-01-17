import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {LANGUAGE_CODES} from 'types/';
import {useAppSettings} from '.';

// To load any resources or data or do some checks before rendering the app
const useAppInit = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const {i18n} = useTranslation();
  const {language = LANGUAGE_CODES.ENGLISH} = useAppSettings();

  useEffect(() => {
    try {
      !!language && i18n.changeLanguage(language);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
    }
  }, []);

  return {isLoadingComplete};
};

export default useAppInit;
