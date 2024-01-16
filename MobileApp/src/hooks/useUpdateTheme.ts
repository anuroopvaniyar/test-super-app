import {COUNTRY} from 'types';
import {default as themeUae} from '../theme/variants/AE';
import {default as themeEgypt} from '../theme/variants/EG';
import {default as themeIndia} from '../theme/variants/IN';
import {default as themePakistan} from '../theme/variants/PK';

const useUpdateTheme = () => {
  const getTheme = (themeInfo: {countryCode: COUNTRY}) => {
    const {countryCode} = themeInfo;
    const themes = {
      [COUNTRY.AE]: themeUae,
      [COUNTRY.EG]: themeEgypt,
      [COUNTRY.IN]: themeIndia,
      [COUNTRY.PK]: themePakistan,
    };

    return themes[countryCode] ?? themeUae;
  };

  return {
    getTheme,
  };
};

export default useUpdateTheme;
