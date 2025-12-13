import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from 'axios';
import { normalizeAxiosError } from './httpError';

const BASE_URL: string = 'https://restcountries.com/v3.1/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 請求超時時間 (10 秒)
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(normalizeAxiosError(error));
  },
);

export default axiosInstance;
