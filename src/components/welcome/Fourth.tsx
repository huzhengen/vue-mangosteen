import s from './WelcomeLayout.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayout } from './WelcomeLayout'
export const Fourth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={cloud} alt="cloud" />,
      title: () => (
        <h2>
          云备份
          <br />
          再也不怕数据丢失
        </h2>
      ),
      actions: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/start">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
)
Fourth.displayName = 'Fourth'
