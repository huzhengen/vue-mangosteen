import s from './Welcome.module.scss'
import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
export const SecondActions = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <RouterLink to="/welcome/3">下一步</RouterLink>
    <SkipFeatures />
  </div>
)
SecondActions.displayName = 'SecondActions'
