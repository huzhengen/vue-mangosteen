import s from './Welcome.module.scss'
export const First = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#pig"></use>
    </svg>
    <h2>
      会赚钱
      <br />
      还要会省钱
    </h2>
  </div>
)
First.displayName = 'First'
