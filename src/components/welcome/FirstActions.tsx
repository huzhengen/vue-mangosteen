import s from './Welcome.module.scss'
import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
export const FirstActions = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <RouterLink to="/welcome/2">Next</RouterLink>
    <SkipFeatures />
  </div>
)
FirstActions.displayName = 'FirstActions'
