<template>
  <h1>App</h1>
  <router-view></router-view>
</template>
<script setup lang="ts">

// 路由重定向
// 路由重定向仅能设置在父路由上，通常进行父路由向子路由的重定向
// 重定向实质为跳转行为，实质为调用 router.push，故该过程可以通过 query params 进行传参
// 重定向可以根据 name 和 path 进行
// redirect: string Object Function

// 路由别名
// 路由根据 path 设置额外的别名，为字符串数组，可以通过不同的别名切换到该路由视图
// alias:Array<string>

</script>
<style scoped lang="less">

</style>