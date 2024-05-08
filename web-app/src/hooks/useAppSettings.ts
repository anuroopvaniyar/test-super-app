import { useSelector } from "react-redux";
import { AppRootState } from "../types";

const useAppSettings = () => {
  const settings = useSelector((state: AppRootState) => state.settings);
  return settings;
};

export default useAppSettings;
