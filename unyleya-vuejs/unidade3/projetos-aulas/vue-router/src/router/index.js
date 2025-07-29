import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardView,
    },
    {
      path: '/produto/:id',
      component: () => import('../views/ProdutoView.vue')
    },
  ],
})

export default router
