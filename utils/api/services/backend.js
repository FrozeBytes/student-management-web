import createAxiosInstance from "../axios";

const config = {
  baseURL: process.env.api_url_prefix,
};

const backend = createAxiosInstance(config);

export default backend;