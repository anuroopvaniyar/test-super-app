import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keys from 'appConstants/keys';
import {useTranslation} from 'react-i18next';

// To load any resources or data or do some checks before rendering the app
const useAppInit = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const {i18n} = useTranslation();

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Check if language has been saved. If yes, load it
        const storedLanguage = await AsyncStorage.getItem(Keys.LANGUAGE_KEY);
        !!storedLanguage && i18n.changeLanguage(storedLanguage);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return {isLoadingComplete};
};

export default useAppInit;
