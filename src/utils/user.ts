import Cookie from 'js-cookie'
import router from '@/router'

/**
 * 设置cookie值
 * @param token
 * path: '/' 表示在整个网站内可以访问该cookie值
 * domain: 在有效的域名内可以访问
 */
export function setToken(token: string) {
  const date = new Date()
  // 两小时过期
  date.setTime(date.getTime() + 2 * 60 * 60 * 1000)
  // 获取有效域名
  const domain = document.domain
  const firstDomain = domain.substring(domain.indexOf('.') + 1, domain.length)
  Cookie.set('token', token, { expires: date, path: '/', domain: firstDomain })
}

/**
 * 获取cookie值
 */
export function getToken() {
  return Cookie.get('token')
}

/**
 * 清空cookie值
 */
export function clearToken() {
  // 获取有效域名
  const domain = document.domain
  const firstDomain = domain.substring(domain.indexOf('.') + 1, domain.length)
  Cookie.set('token', '', { path: '/', domain: firstDomain})
}

/**
 * 退出登陆
 */
export function outLogin() {
  clearToken()
  router.push('/login')
}
