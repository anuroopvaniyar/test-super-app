import {renderHook} from '@testing-library/react-hooks';
import {useTranslation} from 'react-i18next';
import useAppSettings from '../useAppSettings';
import useAppInit from '../useAppInit';
import {useSelector} from 'react-redux';
import {COUNTRY, LANGUAGE_CODES} from 'types/index';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock('../useAppSettings');

const initialState = {
  settings: {
    country: COUNTRY.AE,
    language: LANGUAGE_CODES.ENGLISH,
    firstLaunch: true,
    username: '',
  },
};

describe('useAppInit', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback: any) => {
      return callback(initialState);
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set isLoadingComplete to true after initialization', () => {
    const changeLanguageMock = jest.fn();
    const setLoadingCompleteMock = jest.fn();
    useTranslation.mockReturnValue({
      i18n: {changeLanguage: changeLanguageMock},
    });
    useAppSettings.mockReturnValue({language: 'en'});

    const {result} = renderHook(useAppInit);

    expect(changeLanguageMock).toHaveBeenCalledWith('en');
    expect(result.current.isLoadingComplete).toEqual(true);
  });

  it('should handle missing language by showing default English language', () => {
    const changeLanguageMock = jest.fn();
    useTranslation.mockReturnValue({
      i18n: {changeLanguage: changeLanguageMock},
    });
    useAppSettings.mockReturnValue({});

    const {result} = renderHook(useAppInit);

    expect(changeLanguageMock).toHaveBeenCalledWith('en');
    expect(result.current.isLoadingComplete).toEqual(true);
  });

  it('should handle language change error gracefully', () => {
    const changeLanguageMock = jest.fn(() => {
      throw new Error('Failed to change language');
    });
    useTranslation.mockReturnValue({
      i18n: {changeLanguage: changeLanguageMock},
    });
    useAppSettings.mockReturnValue({language: 'ar'});

    const {result} = renderHook(useAppInit);

    expect(changeLanguageMock).toHaveBeenCalledWith('ar');
    expect(result.current.isLoadingComplete).toEqual(true);
  });
});
