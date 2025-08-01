import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeiturasView from '../views/LeiturasView.vue'
import DetalhessView from '../views/DetalhessView.vue'

const homeRota = {
  path: '/', name: 'home', component: HomeView
}

const leiturasRota = {
  path: '/leituras', name: 'leituras', component: LeiturasView
}

const detalhesRota = {
  path: '/detalhes/:id', name: 'detalhes', component: DetalhessView
}

const routes = [
  leiturasRota, homeRota, detalhesRota
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
