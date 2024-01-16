import {LANGUAGE_CODES} from '../types';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import {LANGUAGE_KEY} from 'appConstants/keys';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useChangeLanguage = () => {
  const {i18n} = useTranslation();

  const onLanguageChange = async (languageCode: LANGUAGE_CODES) => {
    // Apply the language change
    i18n.changeLanguage(languageCode);
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(LANGUAGE_KEY, languageCode);
    } catch (error) {}
    // // Reload the app
    // RNRestart.restart();
  };

  return {
    onLanguageChange,
  };
};

export default useChangeLanguage;
