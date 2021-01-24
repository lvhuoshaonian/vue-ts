/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'path' {
  import path from 'path'
  export default path
}

declare module 'echarts' {
  import echarts from 'echarts'
  export default echarts
}