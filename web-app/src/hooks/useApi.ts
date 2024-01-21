import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SignInType } from "../types";

const useApi = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Array<SignInType> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string, params?: AxiosRequestConfig) => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(url, params);
      setData(response?.data);
      setLoading(false);
    } catch (error) {
      setError(t("login.invalidCredentials"));
      setLoading(false);
    }
  };

  return { fetchData, data, loading, error };
};

export default useApi;
