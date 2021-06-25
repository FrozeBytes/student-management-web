import axios from 'axios';

const defaultConfig = {
  headers: { 'Content-Type': 'application/json' }
}

const successHandler = (resp) => {
  if (resp.status === 'success') {
    return resp.data.data;
  }

  return resp;
}

const errorHandler = (error) => {
  if (axios.isCancel(error)) {
    return Promise.reject(error);
  }
  console.dir(error);
  if (error.response && error.response.data) {
    if (
      error.response.request &&
      error.response.request.responseType === 'arrayBuffer' &&
      error.response.data instanceof ArrayBuffer
    ) {
      return Promise.reject(JSON.parse(Buffer.from(error.response.data).toString('utf8')));
    }

    return Promise.reject(error.response.data);
  }

  return Promise.reject(error.response ?? error);
}

const createAxiosInstance = (config) => {
  const axiosInstance = axios.create({
    ...defaultConfig,
    ...config
  });

  axiosInstance.interceptors.response.use(successHandler, errorHandler);

  axiosInstance.CancelToken = axios.CancelToken;

  return axiosInstance;
}

export default createAxiosInstance;
