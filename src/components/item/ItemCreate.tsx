import { AxiosError } from 'axios';
import { Dialog } from 'vant';
import { defineComponent, PropType, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { MainLayout } from '../../layouts/MainLayout';
import { http } from '../../shared/Http';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
import { Tags } from './Tags';
import { OverlayIcon } from '../../shared/Overlay';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive<Partial<Item>>({
      kind: 'income',
      tag_ids: [],
      amount: 0,
      happen_at: new Date().toISOString(),
    })
    const router = useRouter()
    const onError = (error: AxiosError<ResourceError>) => {
      if (error.response?.status === 422) {
        Dialog.alert({
          title: '出错',
          message: Object.values(error.response.data.errors).join('\n')
        })
      }
      throw error
    }
    const onSubmit = async () => {
      await http.post<Resource<Item>>('/items', formData, {
        _autoLoading: true, _mock: 'itemCreate'
      }).catch(onError)
      router.push(`/items`)
    }
    return () => (
      <MainLayout class={s.layout}>{{
        title: () => '开始记账',
        icon: () => <OverlayIcon />,
        default: () => <>
          <div class={s.wrapper}>
            <Tabs v-model:selected={formData.kind} class={s.tabs}>
              <Tab value="income" name="收入">
                <Tags kind='income' v-model:selected={formData.tag_ids![0]} />
              </Tab>
              <Tab value="expenses" name="支出">
                <Tags kind='expenses' v-model:selected={formData.tag_ids![0]} />
              </Tab>
            </Tabs>
            <div class={s.inputPad_wrapper}>
              <InputPad v-model:happenAt={formData.happen_at}
                v-model:amount={formData.amount}
                onSubmit={onSubmit} />
            </div>
          </div>
        </>
      }}</MainLayout>
    )
  }
})