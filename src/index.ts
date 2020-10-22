import { AxiosRequestConfig } from './types'
import { buildURL } from '../helpers/url'
import { transformRequest } from '../helpers/data'
import xhr from './xhr'

/**
 * @description 处理URL参数
 * @param {AxiosRequestConfig} config 请求参数
 */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

/**
 * @description 处理请求 body
 * @param {AxiosRequestConfig} config 请求参数
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

/**
 * @description 处理请求参数
 * @param {AxiosRequestConfig} config 请求参数
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

/**
 * @description 入口函数
 * @param {AxiosRequestConfig} config 请求参数
 */
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
