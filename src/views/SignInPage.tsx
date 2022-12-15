import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBool } from '../hooks/useBool'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Form, FormItem } from '../shared/Form'
import { history } from '../shared/history'
import { http } from '../shared/Http'
import { Icon } from '../shared/Icon'
import { hasError, validate } from '../shared/validate'
import s from './SignInPage.module.scss'
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    const formData = reactive({
      email: '',
      code: '',
    })
    const errors = reactive({
      email: [],
      code: [],
    })
    const refValidationCode = ref()
    const { ref: refDisabled, on: disabled, off: enable } = useBool(false)
    const onSubmit = async (e: Event) => {
      e.preventDefault()

      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
      if (!hasError(errors)) {
        const response = await http.post<{ jwt: string }>('/session', formData)
        localStorage.setItem('jwt', response.data.jwt)
        history.push('/')
      }
    }
    const onError = (error: any) => {
      if ([422, 400].includes(error.response.status)) {
        Object.assign(errors, error.response.data.errors)
      }
      throw error
    }
    const onClickSendValidationCode = async () => {
      disabled()
      const response = await http.post('/api/v1/validation_codes', { email: formData.email })
        .catch(onError).finally(enable)
      refValidationCode.value.startCount()
    }
    return () => (
      <MainLayout>
        {{
          title: () => 'Sign In',
          icon: () => <Icon name="left" onClick={() => router.go(-1)} />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <Icon class={s.icon} name="mangosteen" />
                <h1 class={s.appName}>凤果记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem label="Email" type="text"
                  placeholder='请输入邮箱，然后点击发送验证码'
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem label="验证码" type="validationCode"
                  ref={refValidationCode}
                  placeholder='请输入六位数字'
                  countFrom={5}
                  disabled={refDisabled.value}
                  onClick={onClickSendValidationCode}
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem style={{ paddingTop: '96px' }}>
                  <Button type="submit">Sign In</Button>
                </FormItem>
              </Form>
            </div>
          ),
        }}
      </MainLayout>
    )
  },
})
