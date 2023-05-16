import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcome/First'
import { FirstActions } from '../components/welcome/FirstActions'
import { Fourth } from '../components/welcome/Fourth'
import { FourthActions } from '../components/welcome/FourthActions'
import { Second } from '../components/welcome/Second'
import { SecondActions } from '../components/welcome/SecondActions'
import { Third } from '../components/welcome/Third'
import { ThirdActions } from '../components/welcome/ThirdActions'
import { Welcome } from '../views/Welcome'
import { ItemPage } from '../views/ItemPage'
import { ItemList } from '../components/item/ItemList'
import { ItemCreate } from '../components/item/ItemCreate'
import { TagCreate } from '../components/tag/TagCreate'
import { TagEdit } from '../components/tag/TagEdit'
import { TagPage } from '../views/TagPage'
import { SignInPage } from '../views/SignInPage'
import { StatisticsPage } from '../views/StatisticsPage'
import { ComingSoon } from '../shared/ComingSoon'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
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
      { path: '3', name: 'Welcome3', components: { main: Third, footer: ThirdActions }, },
      { path: '4', name: 'Welcome4', components: { main: Fourth, footer: FourthActions }, },
    ],
  },
  {
    path: '/items',
    component: ItemPage,
    children: [
      { path: '', component: ItemList, },
      { path: 'create', component: ItemCreate, },
    ],
  },
  {
    path: '/tags',
    component: TagPage,
    children: [
      { path: 'create', component: TagCreate },
      { path: ':id/edit', component: TagEdit },
    ],
  },
  { path: '/sign_in', component: SignInPage },
  { path: '/statistics', component: StatisticsPage },
  { path: '/export', component: ComingSoon },
  { path: '/notify', component: ComingSoon }
]
