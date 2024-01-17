import React from 'react';
import {FullScreen, BaseLayout, Spacer, Text, Selector} from 'components';
import {useTranslation} from 'react-i18next';
import {getLanguagesData} from 'src/utils';
import {useChangeLanguage} from 'hooks';

const SelectLanguage = (props: {onDismiss: () => void}) => {
  const {onDismiss} = props;
  const {t} = useTranslation();
  const {onLanguageChange} = useChangeLanguage();

  const handleLanguageSelect = (languageData: any) => {
    const {value} = languageData;
    onLanguageChange(value);

    onDismiss && onDismiss();
  };

  return (
    <FullScreen>
      <BaseLayout style={{justifyContent: 'flex-start'}}>
        <Spacer />
        <Text bold big>
          {t('selectLanguage.title')}
        </Text>
        <Spacer />
        {getLanguagesData(t).map(item => (
          <Selector {...item} onPress={() => handleLanguageSelect(item)} />
        ))}
      </BaseLayout>
    </FullScreen>
  );
};

export default SelectLanguage;
