import {useSelector} from 'react-redux';

const useAppSettings = () => {
  const settings = useSelector(state => state.userData.settings) ?? {};

  return settings;
};

export default useAppSettings;
