import { ApiService, ApiServiceMultipart } from './apiService';

export const setAccessTokenToHeader = (token) => {
  if (token) {
    ApiService.defaults.headers.Authorization = `JWT ${token}`;
    ApiServiceMultipart.defaults.headers.Authorization = `JWT ${token}`;
  } else {
    delete ApiService.defaults.headers.Authorization;
    delete ApiServiceMultipart.defaults.headers.Authorization;
  }
};
