import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { HttpClient, HttpRequest, HttpResponse, HttpError } from './http-client'
import { HeaderNormalizer } from './header-normalizer'

export class AxiosHttpClient implements HttpClient {
  async request<T>(request: HttpRequest): Promise<HttpResponse<T>> {
    const axiosConfig: AxiosRequestConfig = {
      url: request.url,
      method: request.method,
      data: request.body,
      headers: request.headers,
      params: request.query
    }

    try {
      const axiosResponse: AxiosResponse<T> = await axios(axiosConfig)

      return {
        status: axiosResponse.status,
        data: axiosResponse.data,
        headers: HeaderNormalizer.normalize(axiosResponse.headers)
      }
    } catch (error) {
      const axiosError = error as AxiosError

      const httpError: HttpError = {
        status: axiosError.response?.status || 500,
        message: axiosError.message,
        code: axiosError.code,
        details: axiosError.response?.data
      }

      throw httpError
    }
  }
}
