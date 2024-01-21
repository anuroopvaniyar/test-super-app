import {getReducerForApi} from 'src/utils';
import * as Actions from './actions';
import {COUNTRY, LANGUAGE_CODES} from 'types';
import {combineReducers} from 'redux';

const initialState = {
  settings: {
    country: COUNTRY.AE,
    language: LANGUAGE_CODES.ENGLISH,
    firstLaunch: true,
    username: '',
  },
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_VALUE: {
      const {fieldName, value} = action.payload;
      return {
        ...state,
        settings: {
          ...state.settings,
          [fieldName]: value,
        },
      };
    }

    case Actions.RESET_ALL_DATA:
      return initialState;

    default:
      return state;
  }
};

const appReducer = combineReducers({
  userData: settings,
  createUser: getReducerForApi({
    request: Actions.CREATE_SUPERAPP_USER_REQUEST,
    success: Actions.CREATE_SUPERAPP_USER_SUCCESS,
    failure: Actions.CREATE_SUPERAPP_USER_ERROR,
    clear: Actions.CLEAR_CREATE_SUPERAPP_USER,
  }),
  getUsers: getReducerForApi({
    request: Actions.FETCH_ALL_SUPERAPP_USERS_REQUEST,
    success: Actions.FETCH_ALL_SUPERAPP_USERS_SUCCESS,
    failure: Actions.FETCH_ALL_SUPERAPP_USERS_ERROR,
    clear: Actions.CLEAR_FETCH_ALL_SUPERAPP_USERS,
  }),
});

export default appReducer;
