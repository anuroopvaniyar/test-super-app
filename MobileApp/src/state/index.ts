import {applyMiddleware, createStore} from 'redux';
import appReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AppSaga from './saga';

const persistConfig = {
  key: 'appRoot',
  storage: AsyncStorage,
  whitelist: ['userData'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);

sagaMiddleware.run(AppSaga);
