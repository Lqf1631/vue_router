import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 命名视图 name 为 default 时为默认显示
    components: { default: () => import('../components/A.vue') },
    name: 'A'
  },
  {
    path: '/bc',
    name: 'BC',
    // 使用 components 属性声明命名视图，即一个路由路径下存在多个视图存放组件
    components: {
      // 命名视图的 name ：value
      b: () => import('../components/B.vue'),
      c: () => import('../components/C.vue')
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router