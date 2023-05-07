import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css'
import App from './App.vue'
import { setupRouter } from '@/router'

function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())

  //设置路由
  setupRouter(app)
  app.mount('#app')
}

bootstrap()
