import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/public',
    name: 'Public',
    component: () => import('../components/Public.vue')
  },
  {
    path: '/inner',
    name: 'Inner',
    component: () => import('../components/Inner.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router