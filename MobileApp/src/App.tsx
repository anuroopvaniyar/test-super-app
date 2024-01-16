/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Platform} from 'react-native';
import './localization/i18n';
import {useTranslation} from 'react-i18next';
import {useChangeLanguage, useAppInit, useUpdateTheme} from 'hooks';
import {LANGUAGE_CODES} from 'types';
import {Loader, BaseLayout, Text, Spacer, TextInput, Button} from 'components';
import {Provider as ThemeProvider} from 'react-native-paper';

const App = () => {
  const {isLoadingComplete} = useAppInit();
  const {t} = useTranslation();

  const {onLanguageChange} = useChangeLanguage();
  const {getTheme} = useUpdateTheme();

  // const deviceLanguage =
  // Platform.OS === OS.IOS
  //   ? NativeModules.SettingsManager.settings.AppleLocale ||
  //     NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  //   : NativeModules.I18nManager.localeIdentifier.replace(/_/, '-');

  if (!isLoadingComplete) {
    return <Loader />;
  } else {
    return (
      <ThemeProvider theme={getTheme({countryCode: 'AE'})}>
        <BaseLayout image style={{justifyContent: 'flex-start'}}>
          <Spacer />
          <Text bold big>
            {t('screens.intro.text.login')}
          </Text>
          <Spacer />
          <TextInput
            label="Name"
            returnKeyType="next"
            //value={name.value}
            // onChangeText={text => setName({ value: text, error: '' })}
            // error={!!name.error}
            // errorText={name.error}
          />
          <Spacer />
          <TextInput
            label="Email"
            returnKeyType="next"
            //value={email.value}
            //onChangeText={text => setEmail({ value: text, error: '' })}
            // error={!!email.error}
            // errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Spacer />
          <TextInput
            label="Password"
            returnKeyType="done"
            // value={password.value}
            // onChangeText={text => setPassword({ value: text, error: '' })}
            // error={!!password.error}
            // errorText={password.error}
            secureTextEntry
          />
          <Spacer />
          <Button
            mode="contained"
            onPress={() => onLanguageChange('ar')}
            style={styles.button}>
            {'Sign Up'}
          </Button>
        </BaseLayout>
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
