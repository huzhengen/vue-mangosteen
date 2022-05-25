import { defineComponent, PropType, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { FloatButton } from '../../shared/FloatButton'
import s from './ItemSummary.module.scss'
export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    const data = reactive(JSON.parse(localStorage.getItem('items') || '[]'))
    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li>
            <span>收入</span>
            <span>128</span>
          </li>
          <li>
            <span>支出</span>
            <span>99</span>
          </li>
          <li>
            <span>净收入</span>
            <span>39</span>
          </li>
        </ul>
        <ol class={s.list}>
          {data.map(
            (item: {
              sign: string
              name: string
              amount: string
              category: string
              time: string
            }) => {
              return (
                <li>
                  <div class={s.sign}>
                    <span>{item.sign}</span>
                  </div>
                  <div class={s.text}>
                    <div class={s.tagAndAmount}>
                      <span class={s.tag}>{item.name}</span>
                      <span class={s.amount}>￥{item.amount}</span>
                    </div>
                    <div class={s.time}>{item.time}</div>
                  </div>
                </li>
              )
            }
          )}
        </ol>
        {/* <div class={s.more}>向下滑动加载更多</div> */}
        <RouterLink to="/items/create">
          <FloatButton iconName="add" />
        </RouterLink>
      </div>
    )
  },
})
