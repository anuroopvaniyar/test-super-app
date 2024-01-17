import React from 'react';
import {
  FullScreen,
  BaseLayout,
  Spacer,
  Text,
  Button,
  Selector,
} from 'components';
import {useTranslation} from 'react-i18next';
import {getCountriesData} from 'src/utils';
import {useUpdateTheme} from 'hooks';

const SelectCountry = (props: {onDismiss: () => void}) => {
  const {onDismiss} = props;
  const {t} = useTranslation();
  const {getTheme} = useUpdateTheme();

  const handleCountrySelect = (countryData: any) => {
    const {value} = countryData;

    getTheme({countryCode: value});

    onDismiss && onDismiss();
  };

  return (
    <FullScreen>
      <BaseLayout>
        <Spacer />
        <Text bold big>
          {t('selectCountry.title')}
        </Text>
        <Spacer />
        {getCountriesData(t).map(item => (
          <Selector {...item} onPress={() => handleCountrySelect(item)} />
        ))}
      </BaseLayout>
    </FullScreen>
  );
};

export default SelectCountry;
