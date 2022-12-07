import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 设置元信息时，需额外定义元信息的声明模块
// 在 vue-router 插件文件中额外声明 RouteMeta 类型
declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    transition:string,
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    // route 的 meta 属性可以设置该路由页面的元信息
    // 值为对象，其属性为自定
    meta: {
      title: '登录页面',
      transition:'login'
    },
    component: () => import('../components/Login.vue')
  },
  {
    path: '/public',
    name: 'Public',
    meta: {
      title: '公开页面',
      transition:'public'
    },
    component: () => import('../components/Public.vue')
  },
  {
    path: '/inner',
    name: 'Inner',
    meta: {
      title: '权限页面',
      transition:'inner',
    },
    component: () => import('../components/Inner.vue')
  },
]
const router = createRouter({
  // 该属性定义路由跳转的滚动行为
  // 即每到一个页面时会记录滚动条位置，再次跳转到该页面时，可自动滚动到目标位置，可为记录位置，也可自定
  // 在该函数中可以获取 to from 的 Route 信息，也可以访问到记录的滚动条位置
  // 在路由跳转到该页面时，会触发该函数
  scrollBehavior: (to, from, savedPosition) => {
    // savedPosition 可能存在也可能为 null 即没有滚动条时，故需要优先判断
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        // 根据函数返回值滚动，返回值为对象，具有 top 属性
        top: 10
      }
    }
  },
  history: createWebHistory(),
  routes
})
export default router