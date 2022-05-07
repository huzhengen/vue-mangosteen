import { defineComponent } from 'vue'
import s from './Button.module.scss'

interface Props {
  class?: string
  onClick?: (e: MouseEvent) => void
}

export const Button = defineComponent<Props>({
  // inheritAttrs: false,
  setup: (props, context) => {
    return () => <button class={s.button}>{context.slots.default?.()}</button>
  },
})
