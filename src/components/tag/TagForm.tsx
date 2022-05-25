import { defineComponent, PropType, reactive, ref } from 'vue'
import { Button } from '../../shared/Button'
import { Rules, validate } from '../../shared/validate'
import { Form, FormItem } from '../../shared/Form'
import s from './Tag.module.scss'
import { useRouter } from 'vue-router'
import { addUnit } from 'vant/lib/utils'

export const TagForm = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const router = useRouter()
    const formData = reactive({
      name: '',
      sign: '',
      category: 'expenses',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    const onSubmit = (e: Event) => {
      e.preventDefault()
      const rules: Rules<typeof formData> = [
        { key: 'name', type: 'required', message: '必填' },
        {
          key: 'name',
          type: 'pattern',
          regex: /^.{1,4}$/,
          message: '只能填 1 到 4 个字符',
        },
        { key: 'sign', type: 'required', message: '必填' },
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      })
      Object.assign(errors, validate(formData, rules))

      if (!errors['name']?.[0] && !errors['sign']?.[0]) {
        if (formData.category === 'expenses') {
          const expensesTagsString =
            localStorage.getItem('expensesTags') || '[]'
          let expensesTagsArray = JSON.parse(expensesTagsString)
          expensesTagsArray.push(formData)
          localStorage.setItem(
            'expensesTags',
            JSON.stringify(expensesTagsArray)
          )
        } else if (formData.category === 'income') {
          const incomeTagsString = localStorage.getItem('incomeTags') || '[]'
          let incomeTagsArray = JSON.parse(incomeTagsString)
          incomeTagsArray.push(formData)
          localStorage.setItem('incomeTags', JSON.stringify(incomeTagsArray))
        }
        router.push('/items/create')
      }
    }
    return () => (
      <Form onSubmit={onSubmit}>
        <FormItem
          label="标签名"
          type="text"
          v-model={formData.name}
          error={errors['name']?.[0]}
        />
        <FormItem
          label="类型"
          type="select"
          options={[
            { value: 'expenses', text: '支出' },
            { value: 'income', text: '收入' },
          ]}
          v-model={formData.category}
        />
        <FormItem
          label={'符号 ' + formData.sign}
          type="emojiSelect"
          v-model={formData.sign}
          error={errors['sign']?.[0]}
        />
        <FormItem>
          <p class={s.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button class={[s.button]}>确定</Button>
        </FormItem>
      </Form>
    )
  },
})
