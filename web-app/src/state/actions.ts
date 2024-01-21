export const SET_VALUE = 'SET_VALUE';
export const RESET_ALL_DATA = 'RESET_ALL_DATA';

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
