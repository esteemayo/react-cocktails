import axios from 'axios';
import { toast } from 'react-toastify';

import logger from './logService';

const authFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

authFetch.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error(error.message);
    // toast.error('An unexpected error occurred!');
  }

  return Promise.reject(error);
});

const http = {
  get: authFetch.get,
  post: authFetch.post,
  put: authFetch.put,
  delete: authFetch.delete,
};

export default http;
