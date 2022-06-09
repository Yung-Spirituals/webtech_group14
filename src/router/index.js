import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/FrontView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign up',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('../views/ShoppingCartView.vue')
    },
    {
      path: '/about-us',
      name: 'about us',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/construction',
      name: 'construction',
      component: () => import('../views/ConstructionView.vue')
    },
  /*  {
      path: '/user',
      name: 'User',
      component: () => import('../views/AdminPageView.vue')
    },*/
    /*{
      path: '/a-products',
      name: 'a-products',
      component: () => import('../views/AdminProductView.vue')
    },*/
    /*{
      path: '/products',
      name: 'products',
      component: () => import('../views/AdminProductsView.vue')
    },*/
  ]
})

export default router