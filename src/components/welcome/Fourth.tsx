import s from './Welcome.module.scss'
export const Fourth = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#cloud"></use>
    </svg>
    <h2>
      数据同步不怕丢
    </h2>
  </div>
)
Fourth.displayName = 'Fourth'
