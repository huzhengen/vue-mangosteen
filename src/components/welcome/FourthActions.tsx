import s from './Welcome.module.scss'
import { RouterLink } from 'vue-router'
export const FourthActions = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink to="/start">下一页</RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </div>
)
FourthActions.displayName = 'ThirdActions'
