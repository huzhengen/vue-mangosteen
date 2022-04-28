import s from './Welcome.module.scss'
import clock from '../../assets/icons/clock.svg'
export const Second = () => (
  <div class={s.card}>
    <img src={clock} alt="clock" />
    <h2>
      每日提醒
      <br />
      不遗漏每一笔账单
    </h2>
  </div>
)
Second.displayName = 'Second'
