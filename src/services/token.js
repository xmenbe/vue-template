// 设置储存token
const setTokenStorage = (token) => {
  localStorage.setItem('auth_token', token)
}

// 获取token
const getTokenStorage = () => {
  let token = ''
  try {
    token = localStorage.getItem('auth_token')
  } catch (e) {
  }
  return token
}

// 重新整理一下config
const configHandle = (config) => {
  config.header = {
    ...config.header,
    token: getTokenStorage() // token 特殊处理，主要是header有可能使用的是局部配置
  }
  return config
}

export {
  setTokenStorage,
  getTokenStorage,
  configHandle
}
