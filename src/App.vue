<template>
  <div>router</div>
  <router-link to="/">login</router-link>
  <router-link class="routerLink" to="/reg">reg</router-link>
  <router-view></router-view>
</template>
<script setup lang="ts">
// 路由：通过同一页面的 hash 地址的切换来控制组件的对应显示，实现单页面程序切换多个 hash 网页效果

// 路由配置：
// 安装 npm install vue-router -S
// 配置 ./router/index.ts 创建路由 router 插件
// 挂载 ./main.ts app.use(router) 挂载路由 router 插件

// router 插件创建
// 调用 createRouter 函数，传入配置参数 history history
// const router = createRouter({ history, history })
// 调用 createWebHistory 函数，创建 hisory
// const hisory = createWebHistory()
// routes 为 RouterRcordRaw 对象组成的数组
// RouterRcordRaw 对象为路径 path 和组件 component 的对应关系
// 对于组件 component 采用函数形式，返回值为 import 导入组件 
// const routes :Array<RouterRcordRaw> = [{path:string,component:()=>import(componentPath:string)}]

// 路由使用
// 在组件中使用 <router-view> 标签作为路由组件存放的容器
// 使用 <router-link to="path"> 标签作为路由组件切换的控件，实质为 a 标签进行 hash 地址切换

</script>
<style scoped lang="less">
.routerLink {
  margin-left: 10px;
}
</style>
