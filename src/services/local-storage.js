export default {
  get(key) {
    let token = ''
    try {
      token = localStorage.getItem(key)
    } catch (e) {
      console.error(e)
    }
    return token
  },

  // 设置储存信息
  set(key, value) {
    if (!value && value === undefined) { return; }
    const arr = value;
    localStorage.setItem(key, arr);
  },

  // 删除储存信息
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e)
    }
  },

  // 删除所有储存信息
  removeAll() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error(e)
    }
  }
};