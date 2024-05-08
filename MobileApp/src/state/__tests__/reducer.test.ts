import {getInitialState} from 'src/utils';
import * as Actions from '../actions';
import {COUNTRY, LANGUAGE_CODES} from 'types/index';
import appReducer from '../reducer';

const initialCombinedState = {
  userData: {
    settings: {
      country: COUNTRY.AE,
      language: LANGUAGE_CODES.ENGLISH,
      firstLaunch: true,
      username: '',
    },
  },
  createUser: getInitialState(),
  getUsers: getInitialState(),
};

describe('App  reducer tests', () => {
  const initialState = getInitialState();

  it('should return the initial state when state is undefined', () => {
    const action = {
      payload: {},
    };
    expect(appReducer(undefined, action)).toEqual(initialCombinedState);
  });

  it('should return new state when create user request action is called', () => {
    expect(
      appReducer(
        initialState,
        Actions.createSuperAppUser({
          country: COUNTRY.AE,
          username: 'SQSQSQS',
          password: 'sasasasqsqs',
        }),
      ),
    ).toEqual({
      ...initialCombinedState,
      createUser: {
        ...initialState,
        loading: true,
      },
    });
  });

  it('should return new state when create user success action is called', () => {
    expect(
      appReducer(initialState, Actions.createSuperAppUserSuccess({})),
    ).toEqual({
      ...initialCombinedState,
      createUser: {
        ...initialState,
        response: {},
      },
    });
  });

  it('should return new state when create user error action is called', () => {
    expect(
      appReducer(initialState, Actions.createSuperAppUserError({})),
    ).toEqual({
      ...initialCombinedState,
      createUser: {
        ...initialState,
        error: {},
      },
    });
  });

  it('should return new state when create user clear action is called', () => {
    expect(appReducer(initialState, Actions.clearCreateSuperAppUser())).toEqual(
      {
        ...initialCombinedState,
        createUser: {
          ...initialState,
        },
      },
    );
  });

  it('should return new state when get users request action is called', () => {
    expect(appReducer(initialState, Actions.fetchAllSuperAppUsers())).toEqual({
      ...initialCombinedState,
      getUsers: {
        ...initialState,
        loading: true,
      },
    });
  });

  it('should return new state when get users success action is called', () => {
    expect(
      appReducer(initialState, Actions.fetchAllSuperAppUsersSuccess({})),
    ).toEqual({
      ...initialCombinedState,
      getUsers: {
        ...initialState,
        response: {},
      },
    });
  });

  it('should return new state when get users error action is called', () => {
    expect(
      appReducer(initialState, Actions.fetchAllSuperAppUsersError({})),
    ).toEqual({
      ...initialCombinedState,
      getUsers: {
        ...initialState,
        error: {},
      },
    });
  });

  it('should return new state when get users clear action is called', () => {
    expect(
      appReducer(initialState, Actions.clearFetchAllSuperAppUsers()),
    ).toEqual({
      ...initialCombinedState,
      getUsers: {
        ...initialState,
      },
    });
  });
});
