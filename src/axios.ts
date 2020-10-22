import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

/**
 * @description 处理URL参数
 * @param {AxiosRequestConfig} config 请求配置
 */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

/**
 * @description 处理请求 body
 * @param {AxiosRequestConfig} config 请求配置
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

/**
 * @description 处理请求 header
 * @param {AxiosRequestConfig} config 请求配置
 */
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

/**
 * @description 处理请求参数
 * @param {AxiosRequestConfig} config 请求配置
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  // 因为我们处理 header 的时候依赖了 data，所以要在处理请求 body 数据之前处理请求 header。
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * @description 处理请求响应数据
 * @param {AxiosResponse} res 请求响应结果
 */
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

/**
 * @description 入口函数
 * @param {AxiosRequestConfig} config 请求配置
 */
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

export default axios
