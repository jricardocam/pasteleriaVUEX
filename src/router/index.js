import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pedido from '../views/Pedido.vue'
import Pastelero from '../views/Pastelero.vue'
import Pasteles from '../views/Pasteles.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: Pedido
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: Pastelero
  },
  {
    path: '/pasteles',
    name: 'pasteles',
    component: Pasteles
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
