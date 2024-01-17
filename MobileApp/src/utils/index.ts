import {TEXT_SIZE} from 'types';
import {LANGUAGE_CODES, COUNTRY} from 'types/';

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
  const requiredLanguages = [LANGUAGE_CODES.ARABIC, LANGUAGE_CODES.URDU];

  return requiredLanguages.includes(languageCode);
};

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
