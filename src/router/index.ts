import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/home/:name',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/Layout/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
