import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'footer',
    component: () => import('../components/footer.vue'),
    // 通过 children 属性设置子路由， children:Array<RouteRecordRaw>
    children: [
      {
        path: '/user',
        name: 'login',
        component: () => import('../components/login.vue')
      },
      {
        path: '/user/reg',
        name: 'reg',
        component: () => import('../components/reg.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router