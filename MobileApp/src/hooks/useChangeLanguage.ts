import {LANGUAGE_CODES, PERSIST_FIELD_NAMES} from '../types';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';
import {isRTLRequired} from 'src/utils';
import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';

const useChangeLanguage = () => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();

  const onLanguageChange = async (languageCode: LANGUAGE_CODES) => {
    // Persist the value
    dispatch(setValue(PERSIST_FIELD_NAMES.LANGUAGE, languageCode));

    const isRTLNeeded = isRTLRequired(languageCode);
    // Apply the language change
    i18n.changeLanguage(languageCode);
    I18nManager.forceRTL(isRTLNeeded);

    // Reload the app
    RNRestart.restart();
  };

  return {
    onLanguageChange,
  };
};

export default useChangeLanguage;
