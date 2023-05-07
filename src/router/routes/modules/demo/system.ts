import type { AppRouteModule } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline'
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        ignoreKeepAlive: false
      },
      component: () => import('@/views/demo/system/account/index.vue')
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account'
      },
      component: () => import('@/views/demo/system/account/AccountDetail.vue')
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        ignoreKeepAlive: true
      },
      component: () => import('@/views/demo/system/role/index.vue')
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        ignoreKeepAlive: true
      },
      component: () => import('@/views/demo/system/menu/index.vue')
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        ignoreKeepAlive: true
      },
      component: () => import('@/views/demo/system/dept/index.vue')
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        ignoreKeepAlive: true
      },
      component: () => import('@/views/demo/system/password/index.vue')
    }
  ]
}

export default system
