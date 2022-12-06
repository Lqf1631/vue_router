// 导入有关路由配置的函数和类型
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
  // RouteRecordRaw 对象具有 path  component name 配置属性，用于指定路径和对应组件和名称
  name:'login',
  path: '/',
  // component 采用函数形式，返回值为 import 导入的组件
  component: () => import('../components/login.vue')
}, {
  name:'reg',
  path: '/reg',
  component: () => import('../components/reg.vue')
}]

// 调用 createRouter 方法，创建路由插件 router
// 配置参数为 history 和 routes
const router = createRouter({
  // history 参数为调用 createWebHistory 返回值
  history: createWebHistory(),
  // routes 参数为 Array<RouteRecordRaw> 类型的数组
  // RouteRecordRaw 指定路径和组件的对应关系
  routes
})
export default router