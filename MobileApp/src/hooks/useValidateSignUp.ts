import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
import {useAppSettings} from '.';
import {COUNTRY} from 'types/';
import {SIGNUP_INPUTS} from 'types/';
import {getUsernameValidationConfigByCountry} from 'src/utils';
import {useTranslation} from 'react-i18next';
import {NUMBER_SEVEN} from 'appConstants/';

const useValidateSignUp = () => {
  const {t} = useTranslation();
  const {country = COUNTRY.AE} = useAppSettings();

  const {regex, errorText, minLength} = getUsernameValidationConfigByCountry(
    country,
    t,
  );

  const {control, formState, handleSubmit, getValues, errors} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        [SIGNUP_INPUTS.USERNAME]: yup
          .string()
          .required()
          .min(
            minLength,
            t('validationError.username.length', {
              count: minLength,
            }),
          )
          .matches(regex, errorText),
        [SIGNUP_INPUTS.PASSWORD]: yup
          .string()
          .required()
          .min(
            NUMBER_SEVEN,
            t('validationError.password.length', {
              count: NUMBER_SEVEN,
            }),
          ),
      }),
    ),
    defaultValues: {
      [SIGNUP_INPUTS.USERNAME]: '',
      [SIGNUP_INPUTS.PASSWORD]: '',
    },
  });

  return {
    control,
    handleSubmit,
    getValues,
    errors,
    formState,
  };
};

export default useValidateSignUp;
