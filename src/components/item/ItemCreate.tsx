import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { http } from '../../shared/Http';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refPage = ref(0)
    const refHasMore = ref(false)
    // expenses
    onMounted(async () => {
      const response = await http.get<Resources<Tag>>('/tags', { kind: 'expenses', _mock: 'tagsIndex' })
      const { resources, pager } = response.data
      refExpensesTags.value = resources
      refPage.value = pager.page
      refHasMore.value = (pager.page - 1) * pager.per_page + resources.length < pager.count
    })

    // income
    onMounted(async () => {
      const response = await http.get<{ resources: Tag[] }>('/tags', { kind: 'income', _mock: 'tagsIndex' })
      refIncomeTags.value = response.data.resources
    })
    const refExpensesTags = ref<Tag[]>([])
    const refIncomeTags = ref<Tag[]>([])


    return () => (
      <MainLayout class={s.layout}>{{
        title: () => '记一笔',
        icon: () => <Icon name="left" class={s.navIcon} />,
        default: () => <>
          <div class={s.wrapper}>
            <Tabs v-model:selected={refKind.value} class={s.tabs}>
              <Tab name="支出">
                <div class={s.tags_wrapper}>
                  <div class={s.tag}>
                    <div class={s.sign}>
                      <Icon name="add" class={s.createTag} />
                    </div>
                    <div class={s.name}>
                      新增
                    </div>
                  </div>
                  {refExpensesTags.value.map(tag =>
                    <div class={[s.tag, s.selected]}>
                      <div class={s.sign}>
                        {tag.sign}
                      </div>
                      <div class={s.name}>
                        {tag.name}
                      </div>
                    </div>
                  )}
                </div>
                <div class={s.more}>
                  {refHasMore
                    ? <Button>加载更多标签</Button>
                    : <span>没有更多标签了</span>}
                </div>
              </Tab>
              <Tab name="收入" class={s.tags_wrapper}>
                <div class={s.tag}>
                  <div class={s.sign}>
                    <Icon name="add" class={s.createTag} />
                  </div>
                  <div class={s.name}>
                    新增
                  </div>
                </div>
                {refIncomeTags.value.map(tag =>
                  <div class={[s.tag, s.selected]}>
                    <div class={s.sign}>
                      {tag.sign}
                    </div>
                    <div class={s.name}>
                      {tag.name}
                    </div>
                  </div>
                )}
              </Tab>
            </Tabs>
            <div class={s.inputPad_wrapper}>
              <InputPad />
            </div>
          </div>
        </>
      }}</MainLayout>
    )
  }
})