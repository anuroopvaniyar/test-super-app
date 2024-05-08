import {renderHook} from '@testing-library/react-hooks';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setValue} from 'src/state/actions';
import {isRTLRequired} from 'src/utils';
import useChangeLanguage from '../useChangeLanguage';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-native-restart', () => ({
  restart: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('src/utils', () => ({
  isRTLRequired: jest.fn(),
}));

jest.mock('src/state/actions', () => ({
  setValue: jest.fn(),
}));

describe('useChangeLanguage', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // <- use fake timer
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('should change language', async () => {
    const changeLanguageMock = jest.fn();
    const dispatchMock = jest.fn();
    useTranslation.mockReturnValue({
      i18n: {changeLanguage: changeLanguageMock},
    });
    useDispatch.mockReturnValue(dispatchMock);
    isRTLRequired.mockReturnValue(true);

    const {result} = renderHook(() => useChangeLanguage());
    await result.current.onLanguageChange('ar');

    expect(dispatchMock).toHaveBeenCalledWith(setValue('LANGUAGE', 'ar'));
    expect(changeLanguageMock).toHaveBeenCalledWith('ar');
  });

  it('should handle error ', async () => {
    const changeLanguageMock = jest.fn(() => {
      throw new Error('Failed to change language');
    });
    useTranslation.mockReturnValue({
      i18n: {changeLanguage: changeLanguageMock},
    });
    useDispatch.mockReturnValue(jest.fn());
    isRTLRequired.mockReturnValue(true);

    const {result} = renderHook(() => useChangeLanguage());
    await expect(result.current.onLanguageChange('ar')).rejects.toThrowError(
      'Failed to change language',
    );
  });
});
