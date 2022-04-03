import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export const App = defineComponent({
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    const onClick = () => {
      increment()
    }
    return () => (
      <>
        <header>
          <h1>Hello APP {count.value}</h1>
          <button onClick={onClick}>点击加1</button>
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/about">About</RouterLink>
            </li>
          </ul>
        </header>
        <RouterView />
      </>
    )
  },
})
