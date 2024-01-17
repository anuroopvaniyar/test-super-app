import {SET_VALUE, RESET_ALL_DATA} from './actions';
import {COUNTRY, LANGUAGE_CODES} from 'types';

const initialState = {
  settings: {
    country: COUNTRY.AE,
    language: LANGUAGE_CODES.ENGLISH,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE: {
      console.log('efrd action.payload ', action.payload);
      const {fieldName, value} = action.payload;
      return {
        ...state,
        settings: {
          ...state.settings,
          [fieldName]: value,
        },
      };
    }

    case RESET_ALL_DATA:
      return initialState;

    default:
      return state;
  }
};

export default appReducer;
