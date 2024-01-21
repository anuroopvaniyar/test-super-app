import {SuperAppUserData} from 'types/index';

export const SET_VALUE = 'SET_VALUE';
export const RESET_ALL_DATA = 'RESET_ALL_DATA';

export const FETCH_ALL_SUPERAPP_USERS_REQUEST =
  'FETCH_ALL_SUPERAPP_USERS_REQUEST';
export const FETCH_ALL_SUPERAPP_USERS_SUCCESS =
  'FETCH_ALL_SUPERAPP_USERS_SUCCESS';
export const FETCH_ALL_SUPERAPP_USERS_ERROR = 'FETCH_ALL_SUPERAPP_USERS_ERROR';
export const CLEAR_FETCH_ALL_SUPERAPP_USERS = 'CLEAR_FETCH_ALL_SUPERAPP_USERS';

export const CREATE_SUPERAPP_USER_REQUEST = 'CREATE_SUPERAPP_USER_REQUEST';
export const CREATE_SUPERAPP_USER_SUCCESS = 'CREATE_SUPERAPP_USER_SUCCESS';
export const CREATE_SUPERAPP_USER_ERROR = 'CREATE_SUPERAPP_USER_ERROR';
export const CLEAR_CREATE_SUPERAPP_USER = 'CLEAR_CREATE_SUPERAPP_USER';

export const setValue = (fieldName: string, value: any) => ({
  type: SET_VALUE,
  payload: {
    fieldName,
    value,
  },
});

export const resetAllData = () => ({
  type: RESET_ALL_DATA,
});

export const fetchAllSuperAppUsers = () => ({
  type: FETCH_ALL_SUPERAPP_USERS_REQUEST,
});

export const fetchAllSuperAppUsersSuccess = (
  payload: Array<SuperAppUserData>,
) => ({
  type: FETCH_ALL_SUPERAPP_USERS_SUCCESS,
  payload,
});

export const fetchAllSuperAppUsersError = (error: any) => ({
  type: FETCH_ALL_SUPERAPP_USERS_ERROR,
  payload: error,
});

export const clearFetchAllSuperAppUsers = () => ({
  type: CLEAR_FETCH_ALL_SUPERAPP_USERS,
});

export const createSuperAppUser = (payload: SuperAppUserData) => ({
  type: CREATE_SUPERAPP_USER_REQUEST,
  payload,
});

export const createSuperAppUserSuccess = (payload: any) => ({
  type: CREATE_SUPERAPP_USER_SUCCESS,
  payload,
});

export const createSuperAppUserError = (error: any) => ({
  type: CREATE_SUPERAPP_USER_ERROR,
  payload: error,
});

export const clearCreateSuperAppUser = () => ({
  type: CLEAR_CREATE_SUPERAPP_USER,
});
