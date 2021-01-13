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
