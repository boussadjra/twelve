import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/pages/Home.vue'
import NotFound from '@/views/pages/NotFound.vue'
import componentsRoutes from './componentsRoutes'
import layoutCompRoutes from './layoutCompRoutes'
import styleRoutes from './styleRoutes'

export const routes: Array<any> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'default-layout' }
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('@/views/pages/About.vue'),
    meta: { layout: 'default-layout' }
  },
  componentsRoutes, layoutCompRoutes, styleRoutes,

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/pages/dashboard/Index.vue'),
    meta: { layout: 'dashboard-layout' }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: 'default-layout' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
