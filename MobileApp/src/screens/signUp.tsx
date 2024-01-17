import React, {useState} from 'react';
import {Loader, BaseLayout, Text, Spacer, TextInput, Button} from 'components';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {BLACK} from 'appConstants/colors';
import {ROUTE_SETTINGS} from 'appConstants/routes';

const SignUp = (props: any) => {
  const {navigation} = props;
  const {t} = useTranslation();

  const renderSettings = () => {
    navigation.navigate(ROUTE_SETTINGS);
  };

  return (
    <BaseLayout style={{justifyContent: 'center'}}>
      <Icon
        name="three-bars"
        size={24}
        color={BLACK}
        onPress={renderSettings}
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          top: 10,
          right: 24,
        }}
      />
      <Text bold big>
        {t('signUp.createAccount')}
      </Text>
      <Spacer />
      <TextInput
        label={t('signUp.username')}
        returnKeyType="next"
        //value={name.value}
        // onChangeText={text => setName({ value: text, error: '' })}
        // error={!!name.error}
        // errorText={name.error}
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
      <Button mode="contained" onPress={null}>
        {t('signUp.signUp')}
      </Button>
      <Spacer />
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
