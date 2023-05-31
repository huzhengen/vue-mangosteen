import { defineComponent, PropType } from 'vue'
import { RouteLocationRaw, RouterLink } from 'vue-router'
export const SkipFeatures = defineComponent({
  props: {
    to: {
      type: String as PropType<RouteLocationRaw>,
      required: false
    },
  },
  setup: (props, context) => {
    const onClick = () => {
      localStorage.setItem('skipFeatures', 'yes')
    }
    return () => <span onClick={onClick}><RouterLink to="/items">跳过</RouterLink></span>
  },
})