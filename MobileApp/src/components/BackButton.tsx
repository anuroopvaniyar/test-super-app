import React from 'react';
import {StyleSheet, I18nManager} from 'react-native';
import {BLACK} from 'appConstants/colors';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  goBack: () => void;
};

const BackButton = ({goBack}: Props) => (
  <Icon
    name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
    size={24}
    color={BLACK}
    onPress={goBack}
    style={styles.container}
  />
);

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 24,
  },
});
