/**
 * 页面入口路径
 * @returns {string} 页面入口路径
 */
export const entryPath = (): string => {
  return '/'
}

/**
 * 获取地址栏的参数
 *
 * @param {string} name 参数名
 * @returns {string|undefined} 返回 null 或 获取的参数
 */
export function getQueryString(name: string) {
  let params = location.href.split('?')[1]
  if (!params) return
  // 这一步将router模式的 #/ 去掉
  params = params.split('#/')[0]
  const reg = new RegExp(`${name}=([^&]*)`)
  const search = params.match(reg)
  if (search) return search[1]
}
