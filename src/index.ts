import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildUrl } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): void {
  // 发送请求之前处理get请求中的数据
  processConfig(config)

  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config
  return transformRequest(data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios