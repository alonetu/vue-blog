import axios from "axios";

// 设置axios默认请求地址
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "/api" : "";

// 请求超时时长
axios.defaults.timeout = 3000;

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err;
  }
);

/**
 * @param {string} method 请求方式
 * @param {string} url url
 * @param {*} data 默认post参数
 * @param {*} headers
 */
const serve = {
  get(url = "", headers = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({ method: "get", url, headers })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  post(
    url = "",
    data = null,
    headers = { "Content-Type": "application/json" }
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({ method: "post", url, headers, data })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};

export default serve;
