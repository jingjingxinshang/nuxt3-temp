import { showNotify } from 'vant'
import { showMessage } from './status'

export const fetchConfig = {
  baseURL: process.env.BaseURL,
}
export interface HttpResponse<T = unknown> {
  code: number
  message: string
  data: T
}
// 请求体封装
function useGetFetchOptions(options: any = {}) {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL
  options.headers = {
    'Content-Type': 'application/json',
  }
  return options
}

// http请求封装
export async function useHttp<T>(url: string, options: any = {}): Promise<HttpResponse<T>> {
  options = useGetFetchOptions(options)
  delete options.params
  return await useFetch<HttpResponse<T>>(url, options).then((res) => {
    const { error, data } = res
    if (!error.value && data.value && data.value.code === 200) {
      return data.value
    }
    else {
      // 整理错误参数
      const e = {
        code: error.value?.statusCode || data.value?.code,
        message: `${error.value?.name}${error.value?.statusMessage}` || data.value?.message,
        data: '',
      }
      showNotify(showMessage(e.code))
      return Promise.reject(e)
    }
  })
}
// GET请求
export function useHttpGet<T>(url: string, options: any = {}) {
  options.method = 'GET'
  options.query = options.params
  return useHttp<T>(url, options)
}

// POST请求
export function useHttpPost<T>(url: string, options: any = {}) {
  options.method = 'POST'
  options.body = options.params
  return useHttp<T>(url, options)
}
