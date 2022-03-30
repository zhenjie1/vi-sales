import { get } from 'idb-keyval'
import { Message } from '@arco-design/web-vue'
import { UseAxiosReturn } from '@vueuse/integrations/useAxios'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { Ref, ShallowRef } from 'vue'
import { UrlCacheData } from '.'

// 存储在 idb-keyval 中的前缀标识
export const FETCHURLKEY = 'API'

/**
 * - api 接口返回的**数据**结构
 */
export type FetchResult<T = Data> = {
  code: number
  data: T
  msg?: string
}

type SuccessFn<T> = (cb: T) => void
type FailFn<T> = (data: AxiosError<T>) => void

// 自定义配置
export type Config = {
  file?: boolean // 是否是上传文件
  dataPath?: string // 读取数据的路径
  exclude?: any[] // 要排除的值
  isCode?: boolean
  store?: number | boolean
  codeErrorMessage?: boolean
}

// APIFetch 参数
export type Params = { url: string } & Config & AxiosRequestConfig

/**
 * - api 函数最终返回的结构
 */
export type APIFetchReturn<P, T> = UseAxiosReturn<T> & {
  start: (args: P) => APIFetchReturn<T, P>
  loading: UseAxiosReturn<T>['isLoading']
  finished: UseAxiosReturn<T>['isFinished']
  data: Ref<T | undefined>
  sourceData: ShallowRef<FetchResult<T> | undefined>
  success: (cb: SuccessFn<T>) => void
  fail: (error: FailFn<T>) => void
  promise: Promise<T>

  [key: string]: any
}

/**
 * 读取缓存
 * @param result
 */
export async function readCache<P, T>(config: Params, result: APIFetchReturn<P, T>) {
  const idbData = await get<UrlCacheData>(FETCHURLKEY + config.url)

  if (idbData && !result.finished.value)
    result.sourceData.value = idbData.data as any
}

/**
 * - 当 status !== 200 时的错误处理
 */
export function errorDealWith(data: APIFetchReturn<any, any>, errorSpace: Ref<AxiosError<any>>) {
  if (errorSpace.value.response?.status === 200) return

  // 有消息就显示消息
  const msg = errorSpace.value.response?.data.msg
  if (msg) Message.error(msg)
}
