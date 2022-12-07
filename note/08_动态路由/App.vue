<template>
  <router-view></router-view>
  <hr />
  <button @click="getAB()">getAB</button>
  <button @click="getABC()">getABC</button>
</template>
<script setup lang="ts">
// 路由元信息
// 在 route 对象中可以设置 meta 属性，类型为对象
// meta 对象中包含自定的属性和值，携带了包含路由的元信息
// 在可以访问到 route 对象的位置，可以访问到其上的元信息，根据元信息实现对应操作
// 如在路由守卫中的 to from 访问元信息
// 在 router-view 插槽中解构访问到路由元信息 <router-view #default="{route,Component}">

// 滚动行为
// 从当前页面跳转到任意页面，再次跳转回当前页面时，可以通过 scrollBehavior 定义滚动行为
// 在 router 对象中设置 scrollBehavior 方法
// 该方法的返回值为具有 top 属性的对象 { top:value }
// 当页面具有滚动条时，会具有 savedPosition 对象，自动保存该页面跳转前的滚动条位置
// scrollBehavior:(to,from,savedPosition:Object)=>{return {top:value}}

// 动态路由：
// 路由 routes 对象数组可以通过登录后从后端获取
// 将获取到的 routes 对象逐一调用 router.addRoute() 添加到路由配置中
// 以上实现动态路由操作，即登录验证后才获取路由相关信息，得到访问权限
// 此外也可以通过 router.removeRoute() 等方法对 routes 对象数组进行操作，实现动态变化

import { useRouter } from 'vue-router'

const router = useRouter()
const routes1 = [
  {
    name: 'A',
    path: '/A',
    component: () => import('./components/A.vue'),
  },
  {
    name: 'B',
    path: '/B',
    component: () => import('./components/B.vue'),
  },
]

const routes2 = [
  {
    name: 'A',
    path: '/A',
    component: () => import('./components/A.vue'),
  },
  {
    name: 'B',
    path: '/B',
    component: () => import('./components/B.vue'),
  },
  {
    name: 'C',
    path: '/C',
    component: () => import('./components/C.vue'),
  },
]
const getAB = () => {
  routes1.forEach((v) => {
    router.addRoute(v)
  })
  console.log(router.getRoutes())
}
const getABC = () => {
  routes2.forEach((v) => {
    router.addRoute(v)
  })
  console.log(router.getRoutes())
}
</script>
<style scoped lang="less"></style>
