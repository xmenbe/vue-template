import axios from 'axios'
import qs from 'qs'
import local from './local-storage'
import { AppConfig } from '../config';

const http = axios.create({
  baseURL: AppConfig.production ? AppConfig.serviceUri : AppConfig.devServiceUri,
  timeout: AppConfig.httpTimeout,
})

// 请求拦截器
http.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)
  config.headers = {
    // 'Content-Type': 'application/json'
    'Content-Type': ' application/x-www-form-urlencoded'
  }
  const token = local.get(`auth_token`);
  if (token) {
    config.headers[`Authorization`] = token;
  }
  return config
}, error => {
  console.log('err', error)
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(response => {
  console.log('response', response)
  if (response.status === 200) {        
    return Promise.resolve(response);        
  } else {        
    return Promise.reject(response);        
  }  
}, error => {
  console.log('status',  error.response.status)
  return Promise.reject(error);
})

export default {
  get(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      http.get(url, options).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)        
      })
    })
  },

  post(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      http.post(url, {}, options).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)        
      })
    })
  },

  put(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      http.put(url, {}, options).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)        
      })
    })
  },

  delete(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      http.delete(url, options).then(res => {
        resolve(res);
      }).catch(err =>{
        reject(err)        
      })
    })
  }
}