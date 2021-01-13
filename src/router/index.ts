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
    meta: {
      hidden: true
    },
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/home/:name',
    name: 'Home',
    meta: { title: '测试页面', icon: 'download' },
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  /* 商户管理*/
  {
    path: '/merchantDown',
    component: Layout,
    redirect: '/merchantDown/index',
    meta: {
      hidden: false
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/MerchantDown/index.vue'),
        meta: { title: '商户管理', icon: 'list' }
      }
    ]
  },
  /* 日志管理 */
  {
    path: '/log',
    component: Layout,
    redirect: '/log/login',
    meta: { title: '日志管理', icon: 'list1' },
    children: [
      {
        path: 'login',
        component: () => import('@/views/LogManagement/loginLog.vue'),
        meta: { title: '登录日志', icon: 'loginLog' }
      },
      {
        path: 'operation',
        component: () => import('@/views/LogManagement/operationLog.vue'),
        meta: { title: '操作日志', icon: 'opLog' }
      }
    ]
  },
  /* 相关下载*/
  {
    path: '/download',
    component: Layout,
    redirect: '/download/index',
    meta: {
      hidden: false
    },
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
