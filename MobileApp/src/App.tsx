/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Platform} from 'react-native';
import './localization/i18n';
import {useTranslation} from 'react-i18next';
import {useChangeLanguage, useAppInit, useUpdateTheme} from 'hooks';
import {LANGUAGE_CODES} from 'types';
import {Loader, BaseLayout, Text, Spacer, TextInput, Button} from 'components';
import {Provider as ThemeProvider} from 'react-native-paper';
import SignUp from './screens/signUp';
import AppNavigator from './navigation';
import {NavigationContainer, NavigationState} from '@react-navigation/native';

const App = () => {
  const {isLoadingComplete} = useAppInit();
  const {t} = useTranslation();
  const navigationRef = useRef();

  const {onLanguageChange} = useChangeLanguage();
  const {getTheme} = useUpdateTheme();

  if (!isLoadingComplete) {
    return <Loader />;
  } else {
    return (
      <ThemeProvider theme={getTheme({countryCode: 'IN'})}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

export default App;
