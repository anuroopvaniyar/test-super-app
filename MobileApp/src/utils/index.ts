import {TEXT_SIZE} from 'types';
import {LANGUAGE_CODES, COUNTRY} from 'types';
import {Regex} from 'src/validations/regex';
import {SPCL_CHAR} from 'appConstants/keys';
import {NUMBER_FIVE, NUMBER_SEVEN, NUMBER_SIX} from 'appConstants';
import {SPCL_CHAR_EG} from 'appConstants/';
import {SPCL_CHAR_PK} from 'appConstants/';
import {SuperAppUserData} from 'types/index';
import {find} from 'lodash';

export const getTextFontSize = (size: TEXT_SIZE) => {
  const fontSizes = {
    [TEXT_SIZE.SMALL]: {
      fontSize: 16,
    },
    [TEXT_SIZE.MEDIUM]: {
      fontSize: 24,
    },
    [TEXT_SIZE.BIG]: {
      fontSize: 32,
    },
  };

  return (
    fontSizes[size] ?? {
      fontSize: 24,
    }
  );
};

export const isRTLRequired = (languageCode: LANGUAGE_CODES) => {
  // Add RTL languages in future if needed
  const requiredLanguages = [LANGUAGE_CODES.ARABIC, LANGUAGE_CODES.URDU];

  return requiredLanguages.includes(languageCode);
};

// List of countries currently applicable in the app
export const getCountriesData = (t: any) => {
  return [
    {
      id: 1,
      label: t('selectCountry.AE.label'),
      value: COUNTRY.AE,
    },
    {
      id: 2,
      label: t('selectCountry.EG.label'),
      value: COUNTRY.EG,
    },
    {
      id: 3,
      label: t('selectCountry.IN.label'),
      value: COUNTRY.IN,
    },
    {
      id: 4,
      label: t('selectCountry.PK.label'),
      value: COUNTRY.PK,
    },
  ];
};

// List of languages currently applicable in the app
export const getLanguagesData = (t: any) => {
  return [
    {
      id: 1,
      label: t('selectLanguage.EN.label'),
      value: LANGUAGE_CODES.ENGLISH,
    },
    {
      id: 2,
      label: t('selectLanguage.AR.label'),
      value: LANGUAGE_CODES.ARABIC,
    },
    {
      id: 3,
      label: t('selectLanguage.HI.label'),
      value: LANGUAGE_CODES.HINDI,
    },
    {
      id: 4,
      label: t('selectLanguage.UR.label'),
      value: LANGUAGE_CODES.URDU,
    },
  ];
};

export const getUsernameValidationConfigByCountry = (
  countryCode: COUNTRY,
  t: any,
) => {
  const validations = {
    [COUNTRY.AE]: {
      regex: Regex.ALPHA_NUMERIC_ONLY,
      errorText: t('validationError.username.error'),
      minLength: NUMBER_FIVE,
    },
    [COUNTRY.EG]: {
      regex: Regex.ALPHA_NUMERIC_SPL_CHARS_ONLY.replace(
        SPCL_CHAR,
        SPCL_CHAR_EG,
      ),
      errorText: t('validationError.username.errorSplChars', {
        splChars: SPCL_CHAR_EG,
      }),
      minLength: NUMBER_SEVEN,
    },
    [COUNTRY.IN]: {
      regex: Regex.ALPHA_NUMERIC_STARTING_WITH_LETTER,
      errorText: t('validationError.username.error'),
      minLength: NUMBER_SIX,
    },
    [COUNTRY.PK]: {
      regex: Regex.ALPHA_NUMERIC_SPL_CHARS_ONLY.replace(
        SPCL_CHAR,
        SPCL_CHAR_PK,
      ),
      errorText: t('validationError.username.errorSplChars', {
        splChars: SPCL_CHAR_PK,
      }),
      minLength: NUMBER_SEVEN,
    },
  };

  return (
    validations[countryCode] ?? {
      regex: Regex.ALPHA_NUMERIC_ONLY,
      errorText: t('validationError.username.error'),
      minLength: NUMBER_FIVE,
    }
  );
};

export const isExistingUser = (
  usersData: Array<SuperAppUserData>,
  enteredUserData: SuperAppUserData,
) => {
  return find(
    usersData,
    user =>
      user?.username?.toLowerCase() ===
        enteredUserData?.username.toLowerCase() &&
      user?.password?.toLowerCase() ===
        enteredUserData?.password.toLowerCase() &&
      user?.country === enteredUserData?.country,
  );
};

export const getInitialState = () => {
  return {
    loading: false,
    response: null,
    error: null,
  };
};

export const getReducerForApi = actions => {
  const initialState = getInitialState();
  const {success, request, failure, clear} = actions;

  return (state = initialState, action: any) => {
    switch (action.type) {
      case request:
        return {
          ...state,
          loading: true,
          response: null,
          error: null,
        };

      case success:
        return {
          ...state,
          loading: false,
          response: action.payload,
          error: null,
        };

      case failure:
        return {
          ...state,
          loading: false,
          response: null,
          error: action.payload,
        };

      case clear:
        return {
          ...initialState,
        };

      default:
        return state;
    }
  };
};
