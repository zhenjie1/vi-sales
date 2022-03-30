
type UseTelegramAuthConfigCallback = {
  mode: 'callback'
}

type UseTelegramAuthConfigRedirect = {
  mode: 'redirect'
  redirectUrl: string
}

type UseTelegramAuthConfig = (UseTelegramAuthConfigCallback | UseTelegramAuthConfigRedirect) & {
  telegramLogin: string
  requestAccess?: 'read' | 'write'
  size?: 'small' | 'medium' | 'large'
  userpic?: boolean
  radius?: string
  callback: (data: any) => void

  [key: string]: any
}

/**
 * telegram 登录授权
 */
export function useTelegramAuth(config: UseTelegramAuthConfig) {
  if (config.mode === 'redirect' && !config.redirectUrl)
    throw new Error('callback: redirect 时，redirectUrl 为必传参数')

  const { requestAccess = 'read', size = 'medium', userpic = true, radius = '', callback } = config
  // 赋默认值
  config.requestAccess = requestAccess
  config.size = size
  config.userpic = userpic
  config.radius = radius

  const conf = config as Required<UseTelegramAuthConfig>

  document.body.append(loadAuthScript(conf, callback))
}

/**
 * 加载授权的 script
 *
 * @param {Required<UseTelegramAuthConfig>} props 参数
 * @param {UseTelegramAuthConfig['callback']} callback 回调
 * @returns {HTMLScriptElement} 返回脚本
 */
function loadAuthScript(props: Required<UseTelegramAuthConfig>, callback: UseTelegramAuthConfig['callback']): HTMLScriptElement {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://telegram.org/js/telegram-widget.js?3'

  script.setAttribute('data-size', props.size)
  script.setAttribute('data-userpic', props.userpic as any)
  script.setAttribute('data-telegram-login', props.telegramLogin)
  script.setAttribute('data-request-access', props.requestAccess)

  if (props.radius) script.setAttribute('data-radius', props.radius)
  if (props.mode === 'callback') {
    window.onTelegramAuth = callback
    script.setAttribute('data-onauth', 'window.onTelegramAuth(user)')
  }
  else {
    script.setAttribute('data-auth-url', props.redirectUrl)
  }

  return script
}
