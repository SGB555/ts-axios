export interface AxiosRequestConfig {
  url: string
  methods?: Method
  data?: any
  params?: any
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'option'
  | 'OPTION'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
