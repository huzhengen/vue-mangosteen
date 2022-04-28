import s from './Welcome.module.scss'
import pig from '../../assets/icons/pig.svg'
export const First = () => (
  <div class={s.card}>
    <img src={pig} alt="pig" />
    <h2>
      会赚钱
      <br />
      还要会省钱
    </h2>
  </div>
)
First.displayName = 'First'
