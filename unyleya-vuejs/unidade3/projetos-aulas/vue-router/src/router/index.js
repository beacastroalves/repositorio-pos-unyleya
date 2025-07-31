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
      props: true,
      children: [
        {
          path: "",
          name: "detalhes",
          component: () => import("../components/Detalhes.vue"),
          props: true
        },
        {
          path: "avaliacoes",
          name: "avaliacoes",
          component: () => import("../components/Avaliacoes.vue"),
          props: true,
        },
        {
          path: "questoes",
          name: "questoes",
          component: () => import("../components/Questoes.vue"),
          props: true
        },
      ],
    },
    {
      path: '/clientes',
      component: () => import('../views/ClientesView.vue'),
    },
    {
      path: '/clientes/:id/pedidos',
      component: () => import('../views/PedidosView.vue'),
      props: true,
    },
    {
      path: '/clientes/:clId/pedidos/:pdId',
      component: () => import('../views/PedidoDetalhesView.vue'),
      props: true,
    },
    {
      path: '/produto',
      component: () => import('../views/ProdutosView.vue')
    },
  ],
})

export default router
