import type { AppRouteModule, AppRouteRecordRaw } from '@/router/types'
import { PAGE_NOT_FOUND_ROUTE } from '@/router/routes/basic'
// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root'
  }
}

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'LoginView',
  component: () => import('@/views/sys/login/loginView.vue'),
  meta: {}
}

// 使用vite glob匹配模式导入路由
const modules = import.meta.glob('./modules/**/*.ts', { eager: true })
const basicRoutes: AppRouteModule[] = [RootRoute, LoginRoute, PAGE_NOT_FOUND_ROUTE]
Object.keys(modules).forEach(k => {
  // @ts-ignore
  basicRoutes.push(modules[k].default)
})

// 未经许可的基本路由
export { basicRoutes }
