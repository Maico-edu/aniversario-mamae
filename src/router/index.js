import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { titulo: 'Início' },
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/GaleriaView.vue'),
    meta: { titulo: 'Galeria' },
  },
  {
    path: '/carta',
    name: 'carta',
    component: () => import('../views/CartaView.vue'),
    meta: { titulo: 'Carta' },
  },
  {
    path: '/motivos',
    name: 'motivos',
    component: () => import('../views/MotivosView.vue'),
    meta: { titulo: 'Motivos' },
  },
  {
    path: '/mensagens',
    name: 'mensagens',
    component: () => import('../views/MensagensView.vue'),
    meta: { titulo: 'Mensagens' },
  },
  {
    path: '/versiculos',
    name: 'versiculos',
    component: () => import('../views/VersiculosView.vue'),
    meta: { titulo: 'Versículos' },
  },
  {
    path: '/memorias',
    name: 'memorias',
    component: () => import('../views/MemoriasView.vue'),
    meta: { titulo: 'Memórias' },
  },
  {
    path: '/musica',
    name: 'musica',
    component: () => import('../views/MusicaView.vue'),
    meta: { titulo: 'Música' },
  },
  {
    path: '/surpresa',
    name: 'surpresa',
    component: () => import('../views/SurpresaView.vue'),
    meta: { titulo: 'Surpresa' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
    scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = to.meta?.titulo
    ? `${to.meta.titulo} • Feliz Aniversário, Mamae ❤️`
    : 'Feliz Aniversário, Mamae ❤️'
})

export default router
