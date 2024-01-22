import { LANGUAGE_CODES, COUNTRY } from "../types";
import { Regex } from "../validations/regex";
import {
  SPCL_CHAR,
  NUMBER_FIVE,
  NUMBER_SEVEN,
  NUMBER_SIX,
  SPCL_CHAR_EG,
  SPCL_CHAR_PK,
} from "../constants";
import { default as themeUae } from "../theme/variants/AE";
import { default as themeEgypt } from "../theme/variants/EG";
import { default as themeIndia } from "../theme/variants/IN";
import { default as themePakistan } from "../theme/variants/PK";

export const getTheme = (themeInfo: { countryCode: COUNTRY }) => {
  const { countryCode } = themeInfo;
  const themes = {
    [COUNTRY.AE]: themeUae,
    [COUNTRY.EG]: themeEgypt,
    [COUNTRY.IN]: themeIndia,
    [COUNTRY.PK]: themePakistan,
  };

  return themes[countryCode] ?? themeUae;
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
      label: t("selectCountry.AE.label"),
      value: COUNTRY.AE,
    },
    {
      id: 2,
      label: t("selectCountry.EG.label"),
      value: COUNTRY.EG,
    },
    {
      id: 3,
      label: t("selectCountry.IN.label"),
      value: COUNTRY.IN,
    },
    {
      id: 4,
      label: t("selectCountry.PK.label"),
      value: COUNTRY.PK,
    },
  ];
};

// List of languages currently applicable in the app
export const getLanguagesData = (t: any) => {
  return [
    {
      id: 1,
      label: t("selectLanguage.EN.label"),
      value: LANGUAGE_CODES.ENGLISH,
    },
    {
      id: 2,
      label: t("selectLanguage.AR.label"),
      value: LANGUAGE_CODES.ARABIC,
    },
    {
      id: 3,
      label: t("selectLanguage.HI.label"),
      value: LANGUAGE_CODES.HINDI,
    },
    {
      id: 4,
      label: t("selectLanguage.UR.label"),
      value: LANGUAGE_CODES.URDU,
    },
  ];
};

export const getUsernameValidationConfigByCountry = (
  countryCode: COUNTRY,
  t: any
) => {
  const validations = {
    [COUNTRY.AE]: {
      regex: Regex.ALPHA_NUMERIC_ONLY,
      errorText: t("validationError.username.error"),
      minLength: NUMBER_FIVE,
    },
    [COUNTRY.EG]: {
      regex: Regex.ALPHA_NUMERIC_SPL_CHARS_ONLY.replace(
        SPCL_CHAR,
        SPCL_CHAR_EG
      ),
      errorText: t("validationError.username.errorSplChars", {
        splChars: SPCL_CHAR_EG,
      }),
      minLength: NUMBER_SEVEN,
    },
    [COUNTRY.IN]: {
      regex: Regex.ALPHA_NUMERIC_STARTING_WITH_LETTER,
      errorText: t("validationError.username.error"),
      minLength: NUMBER_SIX,
    },
    [COUNTRY.PK]: {
      regex: Regex.ALPHA_NUMERIC_SPL_CHARS_ONLY.replace(
        SPCL_CHAR,
        SPCL_CHAR_PK
      ),
      errorText: t("validationError.username.errorSplChars", {
        splChars: SPCL_CHAR_PK,
      }),
      minLength: NUMBER_SEVEN,
    },
  };

  return (
    validations[countryCode] ?? {
      regex: Regex.ALPHA_NUMERIC_ONLY,
      errorText: t("validationError.username.error"),
      minLength: NUMBER_FIVE,
    }
  );
};

export const randomString = () => Math.random().toString(36).substring(2);
