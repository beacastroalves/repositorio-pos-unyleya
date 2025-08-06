import LoginView from '@/views/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false },
    },
    {
      path: '/dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: false },
      // beforeEnter: (to, from) => {
      //   const usuario = sessionStorage.getItem('usuario');
      //   if (!usuario)
      //     return '/'
      // }
    },
    {
      path: '/produto/:id(\\d+)',
      component: () => import('../views/ProdutoView.vue'),
      props: true,
      meta: { requiresAuth: true },
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
      meta: { requiresAuth: true },
    },
    {
      path: '/clientes/:id/pedidos',
      component: () => import('../views/PedidosView.vue'),
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/clientes/:clId/pedidos/:pdId',
      component: () => import('../views/PedidoDetalhesView.vue'),
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/produto',
      component: () => import('../views/ProdutosView.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from) => {
  // Lógica de Negócio
  const usuario = sessionStorage.getItem('usuario');
  if (!usuario && to.meta.requiresAuth) {
    return '/'
  }
});

export default router
