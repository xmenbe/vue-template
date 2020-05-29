import http from '@/services/http'

export default {
  // 获取国家列表
  getCourseAreaList: async function (catid) {
    const result = await http.post(`/cese`, {
      data:  {
        key1: 1,
        key2: 2
      },
      headers: {
        token1: 'sdfsdfd'
      }
    })
    return result;
  }
}
