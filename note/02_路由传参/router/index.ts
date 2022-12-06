import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw> = [{
  name:'detail',
  // 采用动态参数的形式，需要在 path 路径中设置动态参数
  path:'/detail/:id/:name/:price',
  component: ()=>import('../components/detail.vue')
}] 
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router