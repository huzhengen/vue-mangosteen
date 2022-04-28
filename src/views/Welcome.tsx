import { defineComponent, VNode, Transition } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router'
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#mangosteen"></use>
          </svg>
          <h1>凤果记账</h1>
        </header>
        <main class={s.main}>
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
