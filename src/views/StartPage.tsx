import { defineComponent, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { OverlayIcon } from '../shared/Overlay'
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    onMounted(() => {
      if (!localStorage.getItem('username')) {
        localStorage.setItem('username', '未登录用户')
      }
    })
    return () => (
      <MainLayout>
        {{
          title: () => '凤果记账',
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Center class={s.pig_wrapper}>
                <Icon name="pig" class={s.pig} />
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始记账</Button>
                </RouterLink>
              </div>
              <RouterLink to="/items/create">
                <FloatButton iconName="add" />
              </RouterLink>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
