import {useSelector} from 'react-redux';

const useAppSettings = () => {
  const settings = useSelector(state => state.settings);

  return settings;
};

export default useAppSettings;
