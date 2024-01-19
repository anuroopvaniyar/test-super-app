import React, {useState} from 'react';
import {BaseLayout, Text, Spacer, BackButton, Selector} from 'components';
import {useTranslation} from 'react-i18next';
import SelectCountry from 'src/uiviews/selectCountry';
import SelectLanguage from 'src/uiviews/selectLanguage';
import {TEXT_SIZE} from 'types/';

const Settings = (props: {navigation: Object}) => {
  const {navigation} = props;
  const [showCountryList, setShowCountryList] = useState(false);
  const [showLanguageList, setShowLanguageList] = useState(false);

  const {t} = useTranslation();

  const goBack = () => navigation.goBack();

  return (
    <BaseLayout>
      <BackButton goBack={goBack} />
      <Spacer />
      <Text bold size={TEXT_SIZE.MEDIUM}>
        {t('settings.title')}
      </Text>
      <Spacer size={40} />
      <Selector
        onPress={() => setShowCountryList(true)}
        label={'Select Country'}
      />
      <Selector
        onPress={() => setShowLanguageList(true)}
        label={'Select Language'}
      />
      {showCountryList && (
        <SelectCountry onDismiss={() => setShowCountryList(false)} />
      )}
      {showLanguageList && (
        <SelectLanguage onDismiss={() => setShowLanguageList(false)} />
      )}
    </BaseLayout>
  );
};

export default Settings;
