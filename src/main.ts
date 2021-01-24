import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/icons'
import './permission.ts'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component

// register globally
createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .component('SvgIcon', SvgIcon)
  .mount('#app')
