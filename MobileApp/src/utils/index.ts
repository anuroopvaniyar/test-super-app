import {TEXT_SIZE} from 'types';
import {LANGUAGE_CODES} from 'types/';

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
  const requiredLanguages = [LANGUAGE_CODES.ARABIC];

  return requiredLanguages.includes(languageCode);
};
