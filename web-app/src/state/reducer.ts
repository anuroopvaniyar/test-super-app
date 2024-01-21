import { SET_VALUE, RESET_ALL_DATA } from "./actions";
import { COUNTRY, LANGUAGE_CODES, SettingsState } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  settings: SettingsState;
} = {
  settings: {
    country: COUNTRY.AE,
    language: LANGUAGE_CODES.ENGLISH,
  },
};

const appReducer = (
  state = initialState,
  action: PayloadAction<{
    fieldName: string;
    value: string;
  }>
) => {
  switch (action.type) {
    case SET_VALUE: {
      const { fieldName, value } = action.payload;
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
