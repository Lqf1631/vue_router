<template>
  <!-- router-view 可以使用插槽 -->
  <!-- 并且可以通过插槽解构出 route 和 Component 相关信息 -->
  <router-view #default="{ route, Component }">
  </router-view>
</template>
<script setup lang="ts">
// 导航前置守卫
// 实质为中间件，在路由跳转时都会优先流经中间件
// to from 记录了路由跳转的目标路由和源路由的相关信息
// next() 直接调用为允许同行，next(flase) 仅中断同行，next(path:string) 中断通行并跳转到 path 路径
// router.beforeEach(to:Route,from:Route,next:Function){}

// 登录登出页设置
// localStorage.setItem('token',value)
// localStorage.removeItem('token')

// 判明是否通行条件：
// 一般设置额外的公开白名单，可以直接访问以及需要权限网页，不能直接访问，需要进行登录验证获取权限
// 优先检查 to.path 是否在公开白名单内，是则直接 next() 放行
// 再检查是否具有权限访问，一般采用 localStorage.getItem('token') 来获取是否具有权限
// 如果既无权限又不在白名单中，则跳转到登录界面 next('/login')
// 注意：'/login' 登录页面为白名单
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body,
html,
#app {
  width: 100%;
  overflow: hidden;
}
</style>
