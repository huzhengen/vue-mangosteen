import s from './Welcome.module.scss'
import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
export const ThirdActions = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <RouterLink to="/welcome/4">Next</RouterLink>
    <SkipFeatures />
  </div>
)
ThirdActions.displayName = 'ThirdActions'
