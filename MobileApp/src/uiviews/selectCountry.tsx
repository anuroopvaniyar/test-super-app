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
import {useChangeCountry, useAppSettings} from 'hooks';
import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';
import {PERSIST_FIELD_NAMES} from 'types/';

const SelectCountry = (props: {
  onDismiss: () => void;
  hideBackButton: boolean;
}) => {
  const {onDismiss, hideBackButton = false} = props;
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const {onCountryChange} = useChangeCountry();
  const {firstLaunch} = useAppSettings();

  const handleCountrySelect = (countryData: any) => {
    firstLaunch && dispatch(setValue(PERSIST_FIELD_NAMES.FIRSTLAUNCH, false));

    const {value} = countryData;
    onCountryChange(value, firstLaunch);

    onDismiss && onDismiss();
  };

  return (
    <FullScreen>
      <BaseLayout>
        {!hideBackButton && <BackButton goBack={onDismiss} />}
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
