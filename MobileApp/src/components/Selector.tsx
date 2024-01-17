import React from 'react';
import Button from './Button';
import * as Colors from 'appConstants/colors';
import {StyleSheet} from 'react-native';

type Props = {
  label: string;
  id: number;
  onPress: Function;
};

const Selector = (props: Props) => {
  const {label, id, onPress} = props;

  return (
    <Button
      key={id}
      mode={'contained'}
      buttonColor={Colors.WHITE}
      textColor={Colors.BLACK}
      onPress={onPress}
      style={styles.button}
      contentStyle={styles.content}>
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.BORDER,
    borderWidth: 1,
    borderRadius: 4,
  },
  content: {
    justifyContent: 'flex-start',
  },
});
export default Selector;
