
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Listas.vue') },
      { path: '/ajuda', component: () => import('pages/Ajuda.vue') },
      { path: '/dados', component: () => import('pages/Dados.vue') },
      { path: '/map', component: () => import('pages/Map.vue') },
      { path: '/map2', component: () => import('pages/Map2.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
