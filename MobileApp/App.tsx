/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import './src/localization/i18n';
import {useTranslation} from 'react-i18next';
import {useChangeLanguage, useAppInit} from 'hooks';
import {LANGUAGE_CODES} from 'types';
import Loader from 'components/Loader';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const {isLoadingComplete} = useAppInit();

  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();

  const {onLanguageChange} = useChangeLanguage();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const deviceLanguage =
  // Platform.OS === OS.IOS
  //   ? NativeModules.SettingsManager.settings.AppleLocale ||
  //     NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  //   : NativeModules.I18nManager.localeIdentifier.replace(/_/, '-');

  if (!isLoadingComplete) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Learn More">
              {t('screens.intro.text.introText')}
            </Section>
            <Section title="Learn More">
              {t('screens.intro.text.login')}
            </Section>

            <Button
              title="Arabic"
              color="#f194ff"
              onPress={() => onLanguageChange(LANGUAGE_CODES.ARABIC)}
            />
            <Button
              title="English"
              color="#f194ff"
              onPress={() => onLanguageChange(LANGUAGE_CODES.ENGLISH)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
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
});

export default App;
