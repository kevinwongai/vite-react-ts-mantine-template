import 'axios'

declare module 'axios' {
  /**
   * @description Modify the return type to the type of the value returned by the interceptor
   */
  export type AxiosCustomizeResponse<T> = Record<string, any> & T

  export type AxiosCustomPromise<T = any> = Promise<AxiosCustomizeResponse<T>>

  export type AxiosRequest<T = any> = (...args: any[]) => AxiosCustomPromise<T>

  export type AxiosResponseType<T> = T extends () => AxiosCustomPromise<infer K>
    ? K
    : T

  export interface AxiosRequestConfig {
    /**
     * @description Set to false for certain interfaces that need to exclude token verification, default is true
     */
    ignoreToken?: boolean
    /**
     * @description true -> return response.data | false -> response
     */
    returnData?: boolean
  }
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): AxiosCustomPromise<T>
    <T = any>(url: string, config?: AxiosRequestConfig): AxiosCustomPromise<T>
    defaults: AxiosRequestConfig
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>
      response: AxiosInterceptorManager<AxiosResponse>
    }
    getUri(config?: AxiosRequestConfig): string
    request<T = any, R = AxiosCustomizeResponse<T>>(
      config: AxiosRequestConfig
    ): Promise<R>
    get<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    delete<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    head<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    options<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    post<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>
    put<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>
    patch<T = any, R = AxiosCustomizeResponse<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>
  }
}
