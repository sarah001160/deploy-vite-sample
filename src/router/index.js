// router 路由管理
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // 寫法一

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // 寫法一
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') // 或寫法二
    }
  ]
})

export default router
