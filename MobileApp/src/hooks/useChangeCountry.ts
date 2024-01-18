import {PERSIST_FIELD_NAMES, COUNTRY} from '../types';
import RNRestart from 'react-native-restart';
import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';

const useChangeCountry = () => {
  const dispatch = useDispatch();

  const onCountryChange = async (countryCode: COUNTRY) => {
    // Persist the value
    dispatch(setValue(PERSIST_FIELD_NAMES.COUNTRY, countryCode));

    setTimeout(() => {
      // Reload the app
      RNRestart.restart();
    }, 1000);
  };

  return {
    onCountryChange,
  };
};

export default useChangeCountry;
