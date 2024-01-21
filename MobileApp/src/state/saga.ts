import {takeLatest, put, call} from 'redux-saga/effects';
import * as Actions from './actions';
import {makeApiRequest} from 'src/network';
import {
  CREATE_SUPER_APP_USER_ENDPOINT,
  FETCH_ALL_SUPER_APP_USERS_ENDPOINT,
} from 'appConstants/endpoints';
import {get} from 'lodash';

export default function* watchSuperApp() {
  yield takeLatest(Actions.FETCH_ALL_SUPERAPP_USERS_REQUEST, getAllUsersList);
  yield takeLatest(Actions.CREATE_SUPERAPP_USER_REQUEST, createNewUser);
}

export const getUsersList = () => {
  const config = {
    method: 'GET',
    url: FETCH_ALL_SUPER_APP_USERS_ENDPOINT,
  };

  return makeApiRequest(config);
};

export function* getAllUsersList() {
  try {
    const response = yield call(getUsersList);
    const responseData = get(response, ['data']);
    yield put(Actions.fetchAllSuperAppUsersSuccess(responseData));
  } catch (error) {
    yield put(Actions.fetchAllSuperAppUsersError(error));
  }
}

export function createUser(payload: any) {
  const config = {
    method: 'POST',
    url: CREATE_SUPER_APP_USER_ENDPOINT,
    data: {...payload},
  };
  return makeApiRequest(config);
}

export function* createNewUser(action: any) {
  try {
    const response = yield call(createUser, action.payload);
    const responseData = get(response, ['data']);
    yield put(Actions.createSuperAppUserSuccess(responseData));
  } catch (error) {
    yield put(Actions.createSuperAppUserError(error));
  }
}
