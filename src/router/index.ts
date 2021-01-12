import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

import Layout from '@/views/Layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/home/:name',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  /* 相关下载*/
  {
    path: '/download',
    component: Layout,
    redirect: '/download/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Download/index.vue'),
        meta: { title: '相关下载', icon: 'download' }
      }
    ]
  }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
