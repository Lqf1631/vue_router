import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 通过在父路由上设置 redirect 进行路由重定向，使其定向到其中某一个子路由上
    // redirect 为 string Object Function
    // 可以根据 path 或 name 进行重定向
    redirect: {
      path: '/A',
      // 对象形式可以重定向传参
      // 重定向实质为 router.push 的一次跳转
      // 可以设置 query 或 params 进行重定向传参
      query: { name: 'Tom', age: 20 },
    },
    component: () => import('../components/root.vue'),
    children: [{
      // alias 属性设置别名，alias 属性为字符串数组，根据 path 设置别名
      alias:['/a'],
      path: '/A',
      name: 'A',
      component: () => import('../components/A.vue')
    },
    {
      path: '/B',
      name: 'B',
      component: () => import('../components/B.vue')
    }]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router