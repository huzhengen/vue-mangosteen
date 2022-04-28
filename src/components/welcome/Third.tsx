import s from './Welcome.module.scss'
import chart from '../../assets/icons/chart.svg'
export const Third = () => (
  <div class={s.card}>
    <img src={chart} alt="chart" />
    <h2>
      数据可视化
      <br />
      收支一目了然
    </h2>
  </div>
)
Third.displayName = 'Third'
