import {
  defineComponent,
  onMounted,
  ref,
  Transition,
  VNode,
  watchEffect,
} from 'vue'
import {
  RouteLocationNormalizedLoaded,
  RouterView,
  useRouter,
  useRoute,
} from 'vue-router'
import { useSwipe } from '../hooks/useSwipe'
import s from './Welcome.module.scss'
import { throttle } from '../shared/throttle'
import { Dialog } from 'vant'

const pushMap: Record<string, string> = {
  Welcome1: '/welcome/2',
  Welcome2: '/welcome/3',
  Welcome3: '/welcome/4',
  Welcome4: '/start',
}

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>()
    const { direction, swiping } = useSwipe(main, {
      beforeStart: (e) => e.preventDefault(),
    })
    const route = useRoute()
    const router = useRouter()
    const replace = throttle(() => {
      const name = (route.name || 'Welcome1').toString()
      router.replace(pushMap[name])
    }, 500)
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        replace()
      }
    })

    onMounted(() => {
      if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        Dialog.alert({
          message: '建议使用手机打开该应用。',
        }).then(() => {
          // on close
        })
      }
    })

    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#mangosteen"></use>
          </svg>
          <h1>凤果记账</h1>
        </header>
        <main class={s.main} ref={main}>
          <RouterView name="main">
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode
              route: RouteLocationNormalizedLoaded
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    )
  },
})
