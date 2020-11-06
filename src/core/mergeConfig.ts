import { AxiosRequestConfig } from '../types'

const strats = Object.create(null)

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }

  const config = Object.create(null)

  // 默认合并策略
  function defaultStrat(val1: any, val2: any): any {
    return typeof val2 !== 'undefined' ? val2 : val1
  }
  /**
   * 只接受自定义配置合并策略
   * 对于一些属性如 url、params、data，合并策略如下：
   */
  function formVal2Strat(val1: any, val2: any): any {
    if (typeof val2 !== 'undefined') {
      return val2
    }

    const stratKeysFromVal2 = ['url', 'params', 'data']

    stratKeysFromVal2.forEach(key => {
      strats[key] = formVal2Strat
    })
  }

  for (let key in config2) {
    mergeField(key)
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStrat
    config[key] = strat(config1[key], config2![key])
  }

  return config
}
