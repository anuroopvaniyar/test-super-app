import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton, useTheme} from 'react-native-paper';
import {WHITE, GREY} from 'appConstants/colors';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({mode, style, children, ...props}: Props) => {
  const theme = useTheme();

  const {
    buttonColor = theme.colors.primary,
    textColor = WHITE,
    disabled,
  } = props;

  const color = disabled ? GREY : buttonColor;

  return (
    <PaperButton
      style={{...styles.button, backgroundColor: color, ...style}}
      labelStyle={styles.text}
      mode={mode}
      buttonColor={color}
      textColor={textColor}
      {...props}>
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Button;
