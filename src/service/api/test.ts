import http from '@/service/http'

export const testApi = (params: { keyword: string }): Promise<any> => http.post('/test', params)
