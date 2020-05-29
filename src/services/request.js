import axios from 'axios'
import qs from 'qs'
import local from './local-storage'
import { AppConfig } from '../config';

const request = axios.create({
  baseURL: AppConfig.production ? AppConfig.serviceUri : AppConfig.devServiceUri,
  timeout: AppConfig.httpTimeout,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 请求拦截器
request.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)
  const token = local.get(`auth_token`);
  if (token) {
    config.headers[`Authorization`] = token;
  }
  console.log('config', config)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  if (response.status === 200) {        
    return Promise.resolve(response);        
  } else {        
    return Promise.reject(response);        
  }  
}, error => {
  // 错误处理
  console.log('status',  error.response.status)
  return Promise.reject(error);
})

export default request