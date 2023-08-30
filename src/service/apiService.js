import axios from 'axios';
import { rootConfig } from './endPoint';
import { setAccessTokenToHeader } from './helper';

export const ApiService = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const ApiServiceMultipart = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

ApiService.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err?.response?.status === 401 || err?.response?.status === 403) {
      // setAccessTokenToHeader();
    }
    return err;
  }
);

ApiServiceMultipart.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err?.response?.status === 401 || err?.response?.status === 403) {
      // setAccessTokenToHeader();
    }
    return err;
  }
);