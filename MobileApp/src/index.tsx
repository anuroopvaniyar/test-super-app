import React, {useRef} from 'react';
import {COUNTRY, TEXT_SIZE} from './types';
import {Provider as ThemeProvider} from 'react-native-paper';
import AppNavigator from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSettings, useUpdateTheme, useAppInit} from 'hooks';
import {Loader, Text, Button, BaseLayout} from 'components';
import {useTranslation} from 'react-i18next';
import {BLACK} from 'appConstants/colors';
import ErrorBoundary from 'react-native-error-boundary';
import {Spacer} from './components';
import RNRestart from 'react-native-restart';

const SuperApp = () => {
  const navigationRef = useRef();
  const {t} = useTranslation();

  const {isLoadingComplete} = useAppInit();

  const {country = COUNTRY.AE} = useAppSettings();
  const {getTheme} = useUpdateTheme();

  if (!isLoadingComplete) return <Loader />;

  const reStart = () => RNRestart.restart();

  const CustomFallback = () => (
    <BaseLayout>
      <Spacer size={50} />
      <Text color={BLACK}>{t('error.title')}</Text>
      <Spacer />
      <Text color={BLACK} size={TEXT_SIZE.MEDIUM}>
        {t('error.msg')}
      </Text>
      <Spacer />
      <Button onPress={reStart}>{t('error.cta')}</Button>
    </BaseLayout>
  );

  return (
    <ThemeProvider theme={getTheme({countryCode: country})}>
      <NavigationContainer ref={navigationRef}>
        <ErrorBoundary FallbackComponent={CustomFallback}>
          <AppNavigator />
        </ErrorBoundary>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default SuperApp;
