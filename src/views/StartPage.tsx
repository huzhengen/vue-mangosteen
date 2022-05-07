import { defineComponent } from 'vue'
import { Button } from '../shared/Button'
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {}
    return () => (
      <div class={s.button_wrapper}>
        <Button class={s.button} onClick={onClick}>
          开始记账
        </Button>
      </div>
    )
  },
})
