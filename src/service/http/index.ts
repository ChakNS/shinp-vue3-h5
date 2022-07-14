import axios from 'axios'
import { AxiosHttp } from './types'
import { initDefaults, initInterceptors } from './config'

initDefaults(axios) // 全局配置
initInterceptors(axios) // 拦截

// 请求函数组
const http: AxiosHttp = {
  get(url, params) {
    return axios.get(url, { params }).then((res) => res.data)
  },
  post(url, params) {
    return axios.post(url, { params }).then((res) => res.data)
  },
}

export default http
