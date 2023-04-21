import s from './Welcome.module.scss'
import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
export const FourthActions = () => {
  const onClick = () => {
    localStorage.setItem('skipFeatures', 'yes')
  }
  return <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <span onClick={onClick}><RouterLink to="/items">Start</RouterLink></span>
    <SkipFeatures class={s.fake} />
  </div>
}
FourthActions.displayName = 'FourthActions'
