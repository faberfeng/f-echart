import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // 跨域时是否发送cookie
  timeout: 15000,
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.error(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code == 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    console.log('err' + error);
    return Promise.reject(error);
  }
);

export default service;