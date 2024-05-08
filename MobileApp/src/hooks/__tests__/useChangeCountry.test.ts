import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';
import useChangeCountry from '../useChangeCountry';
import {COUNTRY, PERSIST_FIELD_NAMES} from 'types/index';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-native-restart', () => ({
  restart: jest.fn(),
}));

jest.mock('src/state/actions', () => ({
  setValue: jest.fn(),
}));

describe('useChangeCountry', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch setValue action when firstLaunch is true', async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const {onCountryChange} = useChangeCountry();
    await onCountryChange(COUNTRY.IN, true);

    expect(dispatchMock).toHaveBeenCalledWith(
      setValue(PERSIST_FIELD_NAMES.COUNTRY, COUNTRY.IN),
    );
  });
});
