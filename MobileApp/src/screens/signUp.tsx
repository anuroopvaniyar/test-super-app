import React, {useState} from 'react';
import {Loader, BaseLayout, Text, Spacer, Button} from 'components';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {BLACK} from 'appConstants/colors';
import {ROUTE_SETTINGS, ROUTE_DASHBOARD} from 'appConstants/routes';
import useValidateSignUp from 'hooks/useValidateSignUp';
import {SIGNUP_INPUTS} from 'types/';
import TextInputWithController from 'components/TextInputWIthController';

const SignUp = (props: any) => {
  const {navigation} = props;
  const {t} = useTranslation();

  const {control, errors, getValues, formState} = useValidateSignUp();

  const renderSettings = () => {
    navigation.navigate(ROUTE_SETTINGS);
  };

  const onSignUp = () => navigation.navigate(ROUTE_DASHBOARD);

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
      <TextInputWithController
        label={t('signUp.username')}
        control={control}
        name={SIGNUP_INPUTS.USERNAME}
        errorText={errors[SIGNUP_INPUTS.USERNAME]?.message}
        returnKeyType="next"
        showErrorText
      />
      <Spacer />
      <TextInputWithController
        label={t('signUp.password')}
        control={control}
        name={SIGNUP_INPUTS.PASSWORD}
        errorText={errors[SIGNUP_INPUTS.PASSWORD]?.message}
        returnKeyType="done"
        showErrorText
        secureTextEntry
      />
      <Spacer />
      <Spacer />
      <Button
        mode="contained"
        onPress={onSignUp}
        disabled={!formState?.isValid}>
        {t('signUp.signUp')}
      </Button>
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
