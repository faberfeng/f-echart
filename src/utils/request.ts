import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 3000,
  headers: {
    "X-Custom-Header": "XMLHttprequest",
    // 'Authorization': `Token ${sessionStorage.getItem('token')}` || ""
  },
});

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    let token = sessionStorage.getItem("token");
    if (token && token !== "" && config.headers) {
      config.headers["Authorization"] = `Token ${token}`; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    // return Promise.reject(error);
    return error.response;
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data;
    if (response.status == 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // return Promise.reject(error);
    if (error.response) {
      return error.response;
    } else {
      return { response: "响应超时" };
    }
  }
);

export default request;

// // 请求携带cookie
// axios.defaults.withCredentials = true
// // 异步请求  不阻塞      headers请求头
// axios.defaults.headers["X-Requested-With"] = "XMLHttprequest"
// // 获取本地token   没有则为空字符串
// axios.defaults.headers['token'] = localStorage.getItem("token")||""
// // 内容类型
// axios.defaults.headers.post["Content-Type"] = "application/json"
