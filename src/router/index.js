import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CallHistory from '../views/CallHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contactlist',
      name: 'contactlist',
      component: () => import('../views/contactlist.vue')
    },
    {
      path: '/historic',
      name: 'historic',
      component: CallHistory
    },
  ]
})

export default router
