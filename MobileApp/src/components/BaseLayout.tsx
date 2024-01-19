import React from 'react';
import {SafeAreaView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import * as Colors from 'appConstants/colors';

type Props = {
  children: React.ReactNode;
  style?: Object;
};

const BaseLayout = ({children, style}: Props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.WHITE}}>
    <KeyboardAvoidingView
      style={{...styles.container, ...style}}
      behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
  },
});

export default BaseLayout;
