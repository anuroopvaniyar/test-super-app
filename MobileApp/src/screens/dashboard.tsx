import React, {useState, useEffect} from 'react';
import {Loader, BaseLayout, Text, Spacer} from 'components';
import {useTranslation} from 'react-i18next';
import {TEXT_SIZE} from 'types/';
import {BLACK} from 'appConstants/colors';
import {useAppSettings} from 'hooks';
import {COUNTRY, LANGUAGE_CODES} from 'types';
import Icon from 'react-native-vector-icons/AntDesign';
import {ROUTE_SIGN_UP} from 'appConstants/routes';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ENCRYPTED_USERNAME} from 'appConstants/keys';
import {useDispatch} from 'react-redux';
import {Selector} from 'components';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useTheme} from 'react-native-paper';

const Dashboard = (props: any) => {
  const {navigation} = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [retrievedUsername, setRetriedUsername] = useState('');
  const [biometricError, setBiometricError] = useState(false);
  const {
    country = COUNTRY.AE,
    language = LANGUAGE_CODES.ENGLISH,
    username = '',
  } = useAppSettings();

  const {t} = useTranslation();

  useEffect(() => {
    async function saveEncryptedUsername() {
      try {
        await EncryptedStorage.setItem(ENCRYPTED_USERNAME, username);
      } catch (error) {}
    }

    saveEncryptedUsername();
  }, []);

  const showUsername = async () => {
    try {
      biometricError && setBiometricError(false);
      const biometrics = new ReactNativeBiometrics();
      const {available, biometryType} = await biometrics.isSensorAvailable();
      if (available) {
        const {success} = await biometrics.simplePrompt({
          promptMessage: 'Confirmation',
        });
        if (success) {
          const username = await EncryptedStorage.getItem(ENCRYPTED_USERNAME);
          setRetriedUsername(username);
        } else {
          setBiometricError(true);
        }
      } else {
        setBiometricError(true);
      }
    } catch (error) {
      // There was an error on the native side
    }
  };

  const logOut = () => {
    navigation.replace(ROUTE_SIGN_UP);
  };

  const renderUsername = () => {
    return biometricError ? (
      <>
        <Text bold size={TEXT_SIZE.MEDIUM} color={theme.colors.error}>
          {t('dashboard.biometricError')}
        </Text>
        <Selector label={t('dashboard.viewUsername')} onPress={showUsername} />
      </>
    ) : !!retrievedUsername ? (
      <Text bold size={TEXT_SIZE.MEDIUM} color={BLACK}>
        {t('dashboard.username')} - {retrievedUsername}
      </Text>
    ) : (
      <Selector label={t('dashboard.viewUsername')} onPress={showUsername} />
    );
  };

  return (
    <BaseLayout>
      <Icon
        name="logout"
        size={24}
        color={BLACK}
        onPress={logOut}
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          top: 10,
          right: 24,
        }}
      />
      <Spacer size={50} />
      <Text bold>{t('dashboard.welcome')}</Text>
      <Spacer size={40} />
      {renderUsername()}
      <Spacer />
      <Text bold size={TEXT_SIZE.MEDIUM} color={BLACK}>
        {t('dashboard.country')} - {country}
      </Text>
      <Spacer />
      <Text bold size={TEXT_SIZE.MEDIUM} color={BLACK}>
        {t('dashboard.language')} - {language}
      </Text>
      <Spacer />
    </BaseLayout>
  );
};

export default Dashboard;
