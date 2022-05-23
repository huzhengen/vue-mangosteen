import { defineComponent, PropType, reactive, ref } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { Time } from '../../shared/time'
import s from './ItemList.module.scss'
import { ItemSummary } from './ItemSummary'

export const ItemList = defineComponent({
  setup: (props, context) => {
    const refKind = ref('本月')
    const time = new Time()
    const customeTime = reactive([
      { start: new Time().format(), end: new Time().format() },
    ])
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ]
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => '我的记账',
          icon: () => <Icon name="menu" />,
          default: () => (
            <>
              <Tabs v-model:selected={refKind.value} classPrefix={'customTabs'}>
                <Tab name="本月">
                  <ItemSummary
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].end.format()}
                  />
                </Tab>
                <Tab name="上个月">
                  <ItemSummary
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].end.format()}
                  />
                </Tab>
                <Tab name="今年">
                  <ItemSummary
                    startDate={timeList[2].start.format()}
                    endDate={timeList[2].end.format()}
                  />
                </Tab>
                <Tab name="自定义时间">
                  <ItemSummary
                    startDate={customeTime[0].start}
                    endDate={customeTime[0].end}
                  />
                </Tab>
              </Tabs>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})
