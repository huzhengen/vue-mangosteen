import { Home } from '../views/Home'
import { About } from '../views/About'
import { Welcome } from '../views/Welcome'
import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/first'
import { Second } from '../components/second'
import { Third } from '../components/third'
import { Forth } from '../components/forth'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/welcome/',
    component: Welcome,
    redirect: '/welcome/1',
    children: [
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Forth },
    ],
  },
]
