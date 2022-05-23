import { defineComponent } from 'vue'
import { TimeTabsLayout } from '../layouts/TimeTabsLayout'
export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout />
  },
})
