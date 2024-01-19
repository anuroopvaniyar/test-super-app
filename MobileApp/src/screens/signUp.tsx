import React, {useState, useEffect} from 'react';
import {BaseLayout, Text, Spacer, Button} from 'components';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {BLACK} from 'appConstants/colors';
import {ROUTE_SETTINGS, ROUTE_DASHBOARD} from 'appConstants/routes';
import useValidateSignUp from 'hooks/useValidateSignUp';
import {SIGNUP_INPUTS} from 'types/';
import TextInputWithController from 'components/TextInputWIthController';
import SelectCountry from 'src/uiviews/selectCountry';
import {useAppSettings} from 'hooks';
import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';
import {PERSIST_FIELD_NAMES} from 'types/';
import {useTheme} from 'react-native-paper';
import {TEXT_SIZE} from 'types/';

const SignUp = (props: {navigation: Object}) => {
  const {navigation} = props;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme();

  const {row, link, icon} = styles(theme);

  const {firstLaunch} = useAppSettings();
  const [showSignUp, setShowSignUp] = useState(firstLaunch);
  const [showCountryList, setShowCountryList] = useState(false);

  useEffect(() => {
    firstLaunch && setShowCountryList(true);
  }, []);

  const {control, errors, getValues, formState} = useValidateSignUp();

  const renderSettings = () => {
    navigation.navigate(ROUTE_SETTINGS);
  };

  const onSignUp = () => {
    dispatch(
      setValue(PERSIST_FIELD_NAMES.USERNAME, getValues(SIGNUP_INPUTS.USERNAME)),
    );
    navigation.navigate(ROUTE_DASHBOARD);
  };

  const renderInputFields = () => {
    return (
      <>
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
      </>
    );
  };

  const renderOtherOption = ({
    text,
    linkText,
    onClick,
  }: {
    text: string;
    linkText: string;
    onClick: Function;
  }) => {
    return (
      <View style={row}>
        <Text size={TEXT_SIZE.SMALL} color={BLACK}>
          {text}
        </Text>
        <TouchableOpacity onPress={onClick}>
          <Text size={TEXT_SIZE.SMALL} style={link}>
            {` ${linkText}`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSignUpForm = () => {
    return (
      <>
        <Text bold big>
          {t('signUp.createAccount')}
        </Text>
        <Spacer />
        {renderInputFields()}
        <Spacer />
        <Button
          mode="contained"
          onPress={onSignUp}
          disabled={!formState?.isValid}>
          {t('signUp.signUp')}
        </Button>
        {renderOtherOption({
          text: t('signUp.hasAccount'),
          linkText: t('signUp.login'),
          onClick: () => setShowSignUp(false),
        })}
      </>
    );
  };

  const renderLoginForm = () => {
    return (
      <>
        <Text bold big>
          {t('login.login')}
        </Text>
        <Spacer />
        {renderInputFields()}
        <Spacer />
        <Button
          mode="contained"
          onPress={onSignUp}
          disabled={!formState?.isValid}>
          {t('login.login')}
        </Button>
        {renderOtherOption({
          text: t('login.noAccount'),
          linkText: t('login.signUp'),
          onClick: () => setShowSignUp(true),
        })}
      </>
    );
  };

  return (
    <BaseLayout style={{justifyContent: 'center'}}>
      <Icon
        name="three-bars"
        size={24}
        color={BLACK}
        onPress={renderSettings}
        style={icon}
      />
      {showSignUp ? renderSignUpForm() : renderLoginForm()}
      {showCountryList && (
        <SelectCountry
          onDismiss={() => setShowCountryList(false)}
          hideBackButton
        />
      )}
    </BaseLayout>
  );
};

const styles = theme =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    icon: {
      alignSelf: 'flex-end',
      position: 'absolute',
      top: 10,
      right: 24,
    },
  });

export default SignUp;
