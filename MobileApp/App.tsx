/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import './src/localization/i18n';
import {Loader} from 'components';
import {Provider} from 'react-redux';
import {store, persistor} from './src/state';
import {PersistGate} from 'redux-persist/integration/react';
import SuperApp from './src';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <SuperApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
