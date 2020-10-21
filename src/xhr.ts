import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, methods = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(methods.toUpperCase(), url)

  request.send(data)
}
