import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton, useTheme} from 'react-native-paper';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({mode, style, children, ...props}: Props) => {
  const theme = useTheme();

  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined',
        mode === 'outlined' && {backgroundColor: theme.colors.primary},
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      buttonColor={theme.colors.primary}
      textColor={'#FFFFFF'}
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
