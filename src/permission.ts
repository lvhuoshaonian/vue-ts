import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/user'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' })
      NProgress.done()
    }
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
