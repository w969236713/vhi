import type { AppRouteRecordRaw } from '@/router/types'
import { EXCEPTION_COMPONENT, LAYOUT, PAGE_NOT_FOUND_NAME } from '@/router/constant'

// 404 页面
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true
      }
    }
  ]
}

// 错误日志页面
// export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
//   path: '/error-log',
//   name: 'ErrorLog',
//   component: LAYOUT,
//   redirect: '/error-log/list',
//   meta: {
//     title: 'ErrorLog',
//     hideBreadcrumb: true,
//     hideChildrenInMenu: true
//   },
//   children: [
//     {
//       path: 'list',
//       name: 'ErrorLogList',
//       component: () => import('@/views/sys/error-log/index.vue'),
//       meta: {
//         hideBreadcrumb: true,
//         currentActiveMenu: '/error-log'
//       }
//     }
//   ]
// }
