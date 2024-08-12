export interface HttpClient {
  request<T>(request: HttpRequest): Promise<HttpResponse<T>>
}
export type Query = Record<string, string | number | Array<string | number>>

export interface HttpResponse<T = any> {
  status: number
  data: T
  headers?: Record<string, string | string[]>
}
export interface HttpError {
  status: number
  message: string
  code?: string
  details?: any
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export interface HttpRequest<T = any> {
  url: string
  method: HttpMethod
  body?: T
  headers?: Record<string, string>
  query?: Query
}
