import { defineComponent, PropType, ref } from 'vue'
import s from './Charts.module.scss'

export const Charts = defineComponent({
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
    const category = ref('expenses')
    return () => <div class={s.wrapper}></div>
  },
})
