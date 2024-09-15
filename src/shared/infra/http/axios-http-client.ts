import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance
} from 'axios'
import { HttpClient, HttpRequest, HttpResponse, HttpError } from './http-client'
import { HeaderNormalizer } from './header-normalizer'

import logger from '@/config/logger'

export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create()

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          logger.error('Unauthorized request')
          return false
        }

        return Promise.reject(error)
      }
    )
  }

  async request<T>(request: HttpRequest): Promise<HttpResponse<T>> {
    const axiosConfig: AxiosRequestConfig = {
      url: request.url,
      method: request.method,
      data: request.body,
      headers: request.headers,
      params: request.query
    }

    try {
      const axiosResponse: AxiosResponse<T> =
        await this.axiosInstance(axiosConfig)

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

  private async renewToken(): Promise<string | null> {
    return null
  }
}
