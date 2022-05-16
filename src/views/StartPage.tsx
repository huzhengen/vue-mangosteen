import { defineComponent } from 'vue'
import { Button } from '../shared/Button'
import { FloatButton } from '../shared/FloatButton'
import s from './StartPage.module.scss'
import { Center } from '../shared/Center'
import { Icon } from '../shared/Icon'
import { Navbar } from '../shared/Navbar'
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {}
    return () => (
      <div>
        <Navbar>
          {{
            title: () => '凤果记账',
            icon: () => <Icon name="menu" />,
          }}
        </Navbar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton iconName="add" />
      </div>
    )
  },
})
