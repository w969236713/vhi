import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from '@/router/routes'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
