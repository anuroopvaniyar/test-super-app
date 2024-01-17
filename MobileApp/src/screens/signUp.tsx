import React, {useState} from 'react';
import {Loader, BaseLayout, Text, Spacer, TextInput, Button} from 'components';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Platform} from 'react-native';
import SelectCountry from 'src/uiviews/selectCountry';
import SelectLanguage from 'src/uiviews/selectLanguage';

const SignUp = (props: any) => {
  const {t} = useTranslation();

  const [showCountryList, setShowCountryList] = useState(false);
  const [showLanguageList, setShowLanguageList] = useState(false);

  return (
    <BaseLayout style={{justifyContent: 'flex-start'}}>
      <Spacer />
      <Text bold big>
        {t('signUp.createAccount')}
      </Text>
      <Spacer />
      <TextInput
        label={t('signUp.name')}
        returnKeyType="next"
        //value={name.value}
        // onChangeText={text => setName({ value: text, error: '' })}
        // error={!!name.error}
        // errorText={name.error}
      />
      <Spacer />
      <TextInput
        label={t('signUp.email')}
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
        label={t('signUp.password')}
        returnKeyType="done"
        // value={password.value}
        // onChangeText={text => setPassword({ value: text, error: '' })}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
      <Spacer />
      <Button mode="contained" onPress={null} style={styles.button}>
        {t('signUp.signUp')}
      </Button>
      <Spacer />
      <Button
        mode="contained"
        onPress={() => setShowCountryList(true)}
        style={styles.button}>
        {'Select Country'}
      </Button>
      <Spacer />
      <Button
        mode="contained"
        onPress={() => setShowLanguageList(true)}
        style={styles.button}>
        {'Select Language'}
      </Button>
      {showCountryList && (
        <SelectCountry onDismiss={() => setShowCountryList(false)} />
      )}
      {showLanguageList && (
        <SelectLanguage onDismiss={() => setShowLanguageList(false)} />
      )}
    </BaseLayout>
  );
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

export default SignUp;
