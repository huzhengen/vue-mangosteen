import { defineComponent, onMounted, PropType, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { Icon } from './Icon';
import s from './Overlay.module.scss';
import { Dialog } from 'vant';
import { useMeStore } from '../stors/useMeStore';
export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>
    }
  },
  setup: (props, context) => {
    const meStore = useMeStore()

    const close = () => {
      props.onClose?.()
    }
    const route = useRoute()
    const router = useRouter()
    const me = ref<User>()
    onMounted(async () => {
      const response = await meStore.mePromise
      me.value = response?.data.resource
    })

    const onSignOut = async () => {
      await Dialog.confirm({
        title: '确认',
        message: '你真的要退出登录吗？',
      })
      localStorage.removeItem('jwt')
      router.push(`/sign_in?return_to=${route.fullPath}`)
    }

    return () => <>
      <div class={s.mask} onClick={close}></div>
      <div class={s.overlay}>
        <section class={s.currentUser}>
          {me
            ? <div>
              <h2 class={s.email}>{me.value?.email}</h2>
              <p onClick={onSignOut}>点击这里退出登录</p>
            </div>
            : <RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
              <h2>未登录用户</h2>
              <p>点击这里登录</p>
            </RouterLink>}
        </section>
        <nav>
          <ul class={s.action_list}>
            <li>
              <RouterLink to="/items/create" class={s.action}>
                <Icon name="add" class={s.icon} />
                <span>开始记账</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/items" class={s.action}>
                <Icon name="pig" class={s.icon} />
                <span>我的存钱罐</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/statistics" class={s.action}>
                <Icon name="charts" class={s.icon} />
                <span>统计图表</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  }
})

export const OverlayIcon = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    return () => <>
      <Icon name="menu" class={s.icon} onClick={onClickMenu} />
      {refOverlayVisible.value &&
        <Overlay onClose={() => refOverlayVisible.value = false} />
      }
    </>
  }
})
