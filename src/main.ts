import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './router'
import store from './stores'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(router)
  return {
    app,
  }
}
