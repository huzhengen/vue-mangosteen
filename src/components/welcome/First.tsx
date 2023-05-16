import s from './Welcome.module.scss'
export const First = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#pig"></use>
    </svg>
    <h2>赚钱存进存钱罐</h2>
  </div>
)
First.displayName = 'First'
