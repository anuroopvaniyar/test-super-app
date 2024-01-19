import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input, useTheme} from 'react-native-paper';
import {WHITE} from 'appConstants/colors';

type Props = React.ComponentProps<typeof Input> & {errorText?: string};

const TextInput = ({errorText, ...props}: Props) => {
  const theme = useTheme();
  const {container, input, error} = styles(theme);

  return (
    <View style={container}>
      <Input
        style={input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {!!errorText && <Text style={error}>{errorText}</Text>}
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
      height: 60,
      backgroundColor: WHITE,
    },
    error: {
      fontSize: 14,
      color: theme.colors.error,
      paddingHorizontal: 4,
      paddingTop: 4,
    },
  });

export default TextInput;
