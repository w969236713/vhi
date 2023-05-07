import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from '@/router/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes
})
console.log(basicRoutes)
export default router
