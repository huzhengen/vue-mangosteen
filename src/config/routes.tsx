import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcome/First'
import { FirstActions } from '../components/welcome/FirstActions'
import { Fourth } from '../components/welcome/Fourth'
import { FourthActions } from '../components/welcome/FourthActions'
import { Second } from '../components/welcome/Second'
import { SecondActions } from '../components/welcome/SecondActions'
import { Third } from '../components/welcome/Third'
import { ThirdActions } from '../components/welcome/ThirdActions'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: () => import('../views/Welcome'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('skipFeatures') === "yes") {
        next('/items')
      } else {
        next()
      }
    },
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', name: 'Welcome1', components: { main: First, footer: FirstActions }, },
      { path: '2', name: 'Welcome2', components: { main: Second, footer: SecondActions }, },
      { path: '3', name: 'Welcome3', components: { main: Third, footer: ThirdActions }, },
      { path: '4', name: 'Welcome4', components: { main: Fourth, footer: FourthActions }, },
    ],
  },
  {
    path: '/items',
    component: () => import('../views/ItemPage'),
    children: [
      { path: '', component: () => import('../components/item/ItemList') },
      { path: 'create', component: () => import('../components/item/ItemCreate'), },
    ],
  },
  {
    path: '/tags',
    component: () => import('../views/TagPage'),
    children: [
      { path: 'create', component: () => import('../components/tag/TagCreate') },
      { path: ':id/edit', component: () => import('../components/tag/TagEdit') },
    ],
  },
  { path: '/sign_in', component: () => import('../views/SignInPage') },
  { path: '/statistics', component: () => import('../views/StatisticsPage') },
  { path: '/export', component: () => import('../shared/ComingSoon') },
  { path: '/notify', component: () => import('../shared/ComingSoon') },
]
