import React, {useRef} from 'react';
import {COUNTRY} from './types';
import {Provider as ThemeProvider} from 'react-native-paper';
import AppNavigator from './navigation';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import {useAppSettings, useUpdateTheme, useAppInit} from 'hooks';
import {Loader} from 'components';

const SuperApp = () => {
  const navigationRef = useRef();

  const {isLoadingComplete} = useAppInit();

  const {country = COUNTRY.AE} = useAppSettings();
  const {getTheme} = useUpdateTheme();

  if (!isLoadingComplete) return <Loader />;

  return (
    <ThemeProvider theme={getTheme({countryCode: country})}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default SuperApp;
