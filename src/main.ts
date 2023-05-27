import { routes } from './config/routes'
import { createApp } from 'vue'
import { App } from './App'
import { createRouter } from 'vue-router'
import { history } from './shared/history'
import '@svgstore'
import { createPinia } from 'pinia'
import { useMeStore } from './stors/useMeStore'
import { Dialog } from 'vant'

const router = createRouter({ history, routes })
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

const meStore = useMeStore()

meStore.fetchMe()

const whiteList: Record<string, 'exact' | 'startsWith'> = {
  '/': 'exact',
  '/items': 'exact',
  '/welcome': 'startsWith',
  '/sign_in': 'startsWith',
}

router.beforeEach((to, from) => {
  for (const key in whiteList) {
    const value = whiteList[key]
    if (value === 'exact' && to.path === key) {
      return true
    }
    if (value === 'startsWith' && to.path.startsWith(key)) {
      return true
    }
  }
  return meStore.mePromise!.then(
    () => true,
    () => '/sign_in?return_to=' + from.path
  )
})

if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  const hasAlerted = localStorage.getItem('hasAlerted')
  if (hasAlerted !== 'yes') {
    Dialog.alert({
      message: '建议使用手机浏览该应用',
    }).then(() => {
      localStorage.setItem('hasAlerted', 'yes')
    })
  }
}