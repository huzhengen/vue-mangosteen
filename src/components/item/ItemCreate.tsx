import { defineComponent, PropType, reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { Time } from '../../shared/time'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'

interface Tag {
  sign: string
  name: string
  category: string
}

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
    const formData = reactive({
      sign: '',
      name: '',
      category: '',
      amount: '',
      time: '',
    })

    const changeFormData = (tag: Tag) => {
      Object.assign(
        formData,
        Object.assign(tag, { time: new Time().format('YYYY-MM-DD HH:mm') })
      )
    }
    const onSubmit = () => {
      console.log(formData)
      const itemsArray = JSON.parse(localStorage.getItem('items') || '[]')
      itemsArray.push(formData)
      localStorage.setItem('items', JSON.stringify(itemsArray))
      router.push(`/items/`)
    }
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
                    {refExpensesTags.value.map((tag: Tag) => (
                      <div
                        class={[
                          s.tag,
                          formData.name === tag.name ? s.selected : '',
                        ]}
                        onClick={() => changeFormData(tag)}
                      >
                        <div class={s.sign}>{tag.sign}</div>
                        <div class={s.name}>{tag.name}</div>
                      </div>
                    ))}
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
                    {refIncomeTags.value.map((tag: Tag) => (
                      <div
                        class={[
                          s.tag,
                          formData.name === tag.name ? s.selected : '',
                        ]}
                        onClick={() => changeFormData(tag)}
                      >
                        <div class={s.sign}>{tag.sign}</div>
                        <div class={s.name}>{tag.name}</div>
                      </div>
                    ))}
                  </Tab>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad v-model={formData.amount} onSubmit={onSubmit} />
                </div>
              </div>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
