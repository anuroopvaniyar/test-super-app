import React from 'react';
import {
  FullScreen,
  BaseLayout,
  Spacer,
  Text,
  Selector,
  BackButton,
} from 'components';
import {useTranslation} from 'react-i18next';
import {getCountriesData} from 'src/utils';
import {TEXT_SIZE} from 'types';
import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';
import {PERSIST_FIELD_NAMES} from 'types';

const SelectCountry = (props: {onDismiss: () => void}) => {
  const {onDismiss} = props;
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const handleCountrySelect = (countryData: any) => {
    const {value} = countryData;
    dispatch(setValue(PERSIST_FIELD_NAMES.COUNTRY, value));

    onDismiss && onDismiss();
  };

  return (
    <FullScreen>
      <BaseLayout>
        <BackButton goBack={onDismiss} />
        <Spacer />
        <Text bold size={TEXT_SIZE.MEDIUM}>
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
