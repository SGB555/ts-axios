import { AxiosRequestConfig } from './types'
import { buildURL } from '../helps/url'
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
 * @description 处理请求参数
 * @param {AxiosRequestConfig} config 请求参数
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

/**
 * @description 入口参数
 * @param {AxiosRequestConfig} config 请求参数
 */
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
