import { AxiosRequestConfig } from '../types'

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }
  const config = Object.create(null)

  for(let key in config2){}

  function mergeField(key:string):void{}
}
