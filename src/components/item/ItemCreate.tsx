import { defineComponent, PropType, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const router = useRouter()
    const refKind = ref('支出')
    const refExpensesTags = ref(
      JSON.parse(localStorage.getItem('expensesTags') || '{}')
    )
    const refIncomeTags = ref(
      JSON.parse(localStorage.getItem('incomeTags') || '{}')
    )
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => '记一笔账',
          icon: () => (
            <Icon name="left" class={s.navIcon} onClick={() => router.go(-1)} />
          ),
          default: () => (
            <>
              <div class={s.wrapper}>
                <Tabs v-model:selected={refKind.value} class={s.tabs}>
                  <Tab name="支出" class={s.tags_wrapper}>
                    <RouterLink to={'/tags/create'}>
                      <div class={s.tag}>
                        <div class={s.sign}>
                          <Icon name="add" class={s.createTag} />
                        </div>
                        <div class={s.name}>新增</div>
                      </div>
                    </RouterLink>
                    {refExpensesTags.value.map(
                      (tag: { sign: string; name: string; type: string }) => (
                        <div class={[s.tag, s.selected]}>
                          <div class={s.sign}>{tag.sign}</div>
                          <div class={s.name}>{tag.name}</div>
                        </div>
                      )
                    )}
                  </Tab>
                  <Tab name="收入" class={s.tags_wrapper}>
                    <RouterLink to={'/tags/create'}>
                      <div class={s.tag}>
                        <div class={s.sign}>
                          <Icon name="add" class={s.createTag} />
                        </div>
                        <div class={s.name}>新增</div>
                      </div>
                    </RouterLink>
                    {refIncomeTags.value.map(
                      (tag: { sign: string; name: string; type: string }) => (
                        <div class={[s.tag, s.selected]}>
                          <div class={s.sign}>{tag.sign}</div>
                          <div class={s.name}>{tag.name}</div>
                        </div>
                      )
                    )}
                  </Tab>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad />
                </div>
              </div>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
