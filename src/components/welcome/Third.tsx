import s from './Welcome.module.scss'
export const Third = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#chart"></use>
    </svg>
    <h2>
      收支数据可视化
    </h2>
  </div>
)
Third.displayName = 'Third'
