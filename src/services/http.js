import request from './request'

export default {
  get(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      request.get(url, options).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)        
      })
    })
  },

  post(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      request.post(url, {}, options).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)        
      })
    })
  },

  put(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      request.put(url, {}, options).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)        
      })
    })
  },

  delete(url, options = {}) {
    return new Promise((resolve, reject) =>{        
      request.delete(url, options).then(res => {
        resolve(res);
      }).catch(err =>{
        reject(err)        
      })
    })
  }
}