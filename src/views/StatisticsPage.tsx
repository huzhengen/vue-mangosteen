import { defineComponent } from 'vue'
import { TimeTabsLayout } from '../layouts/TimeTabsLayout'
import { Charts } from '../components/statistics/Charts'

export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout rerenderOnSwitchTab={true}
      hideThisYear={true} component={Charts} />
  },
})

export default StatisticsPage