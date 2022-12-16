import { routes } from './config/routes'
import { createApp } from 'vue'
import { App } from './App'
import { createRouter } from 'vue-router'
import { history } from './shared/history'
import '@svgstore'
import { fetchMe, mePromise } from './shared/me'

const router = createRouter({ history, routes })

fetchMe()

router.beforeEach((to, from) => {
  if (['/', '/start'].includes(to.path) || to.path.startsWith('/welcome') || to.path.startsWith('/sign_in')) {
    return true
  } else {
    return mePromise?.then(() => true, () => `/sign_in?return_to=${to.path}`)
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
