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
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/produto/:id(\\d+)',
      component: () => import('../views/ProdutoView.vue'),
    },
    {
      path: '/clientes',
      component: () => import('../views/ClientesView.vue'),
    },
    {
      path: '/clientes/:id/pedidos',
      component: () => import('../views/PedidosView.vue'),
    },
    {
      path: '/clientes/:clId/pedidos/:pdId',
      component: () => import('../views/PedidoDetalhesView.vue')
    },
    {
      path: '/produto',
      component: () => import('../views/ProdutosView.vue')
    },
  ],
})

export default router
