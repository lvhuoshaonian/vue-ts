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
    meta: {
      title: '测试页面',
      icon: 'download'
    },
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  /* 商户管理*/
  {
    path: '/merchantDown',
    name: 'MerchantDown',
    component: Layout,
    redirect: '/merchantDown/index',
    meta: {
      hidden: false
    },
    children: [
      {
        path: 'index',
        name: 'MerchantDownIndex',
        component: () => import('@/views/MerchantDown/index.vue'),
        meta: {
          title: '商户管理',
          icon: 'list',
          activeMenu: ''
        }
      }
    ]
  },
  /* 日志管理 */
  {
    path: '/log',
    name: 'Log',
    component: Layout,
    redirect: '/log/login',
    meta: { title: '日志管理', icon: 'list1' },
    children: [
      {
        path: 'login',
        name: 'Loglogin',
        redirect: '/log/login/logTest',
        component: () => import('@/views/LogManagement/loginLog.vue'),
        meta: { title: '登录日志', icon: 'loginLog' },
        children: [
          {
            path: 'logTest',
            component: () => import('@/views/Test/index.vue'),
            meta: { title: '登录测试', icon: 'loginLog' }
          },
          {
            path: 'logOperation',
            component: () => import('@/views/LogManagement/operationLog.vue'),
            meta: { title: '操作管理', icon: 'opLog' }
          }
        ]
      },
      {
        path: 'operation',
        name: 'LogOperation',
        component: () => import('@/views/LogManagement/operationLog.vue'),
        meta: { title: '操作日志', icon: 'opLog' }
      }
    ]
  },
  /* 相关下载*/
  {
    path: '/download',
    name: 'Download',
    component: Layout,
    redirect: '/download/index',
    meta: {
      hidden: false
    },
    children: [
      {
        path: 'index',
        name: 'DownloadIndex',
        component: () => import('@/views/Download/index.vue'),
        meta: { title: '相关下载', icon: 'download' }
      }
    ]
  },
  /* 相关下载*/
  {
    path: '/icon',
    name: 'Icon',
    component: Layout,
    redirect: '/icon/index',
    meta: {
      hidden: false
    },
    children: [
      {
        path: 'index',
        name: 'IconIndex',
        component: () => import('@/views/Icons/index.vue'),
        meta: { title: 'Icon图标', icon: 'icon' }
      }
    ]
  }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
