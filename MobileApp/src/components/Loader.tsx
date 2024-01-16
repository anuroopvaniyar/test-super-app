import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {BLACK} from 'appConstants/colors';
import {useTheme} from 'react-native-paper';

const Loader = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
