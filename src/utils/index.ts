/**
 * 本地永久存储
 * @param name
 * @param value
 * @param isBasicType 是否为基本类型
 */
export const localSave = (name: string, value: any, isBasicType?: boolean) => {
  if (!isBasicType) {
    localStorage.setItem(name, JSON.stringify(value))
  } else {
    localStorage.setItem(name, value)
  }
}

/**
 * 获取对应本地存储
 * @param name
 * @param isBasicType 是否为基本类型
 */
export const localGet = (name: string, isBasicType?: boolean) => {
  const item = localStorage.getItem(name)
  if (isBasicType) {
    return item ? JSON.parse(item) : null
  } else {
    return item
  }
}

/**
 * 防抖函数
 * @param func
 * @param wait
 * @param ctx
 * @param immediate
 */
export const debounce = (func: () => void, wait: number, ctx?: any, immediate?: boolean) => {
  let timeout: number
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate && !timeout) {
      func.apply(ctx, args as [])
    }
    timeout = setTimeout(() => {
      func.apply(ctx, args as [])
    }, wait)
  }
}
