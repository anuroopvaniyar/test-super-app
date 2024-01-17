import {createStore} from 'redux';
import AppReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'appRoot',
  storage: AsyncStorage,
  whitelist: ['settings'],
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
