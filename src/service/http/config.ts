import { Axios, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

function requestInterceptors(
  config: AxiosRequestConfig<any>
): AxiosRequestConfig<any> {
  console.log('requese interceptors')
  // do something...
  return config
}

function responseInterceptors(
  response: AxiosResponse<any>
): AxiosResponse<any> {
  console.log('response interceptors')
  // do something...
  return response
}

export function initDefaults(axios: Axios) {
  axios.defaults.baseURL = ''
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
}

export function initInterceptors(axios: Axios) {
  axios.interceptors.request.use(
    requestInterceptors,
    (err: AxiosError): AxiosError => err
  )
  axios.interceptors.response.use(
    responseInterceptors,
    (err: AxiosError): AxiosError => err
  )
}
