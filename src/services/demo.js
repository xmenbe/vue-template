import http from '@/services/request'

export default {
  // 获取国家列表
  getCourseAreaList: async function (catid) {
    const result = await http.get(`/api-www-v2/company/guess-company/99999/mel1/sd`)
    return result;
  }
}
