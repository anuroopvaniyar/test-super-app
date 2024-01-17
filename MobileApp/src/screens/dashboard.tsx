import React, {useState} from 'react';
import {
  Loader,
  BaseLayout,
  Text,
  Spacer,
  BackButton,
  Selector,
} from 'components';
import {useTranslation} from 'react-i18next';
import {TEXT_SIZE} from 'types/';
import {BLACK} from 'appConstants/colors';
import {useAppSettings} from 'hooks';
import {COUNTRY, LANGUAGE_CODES} from 'types';
import Icon from 'react-native-vector-icons/AntDesign';
import {ROUTE_SIGN_UP} from 'appConstants/routes';

const Dashboard = (props: any) => {
  const {navigation} = props;
  const {
    country = COUNTRY.AE,
    language = LANGUAGE_CODES.ENGLISH,
  } = useAppSettings();

  const {t} = useTranslation();

  const logOut = () => {
    navigation.replace(ROUTE_SIGN_UP);
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
      <Text bold size={TEXT_SIZE.MEDIUM} color={BLACK}>
        {t('dashboard.username')}
      </Text>
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
