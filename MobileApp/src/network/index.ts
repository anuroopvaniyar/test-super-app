import axios, {AxiosRequestConfig} from 'axios';
import {API_BASE_URL} from 'appConstants/endpoints';
import {API_TIMEOUT} from 'appConstants';

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

export const makeApiRequest = (requestConfig: AxiosRequestConfig) => {
  console.log('efrd requestConfig ', requestConfig);
  return AxiosInstance.request(requestConfig);
};
