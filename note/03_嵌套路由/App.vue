<template>
  <div>App</div>
  <!-- 该标签用于存放 footer 组件作为父路由 -->
  <router-view></router-view>
</template>
<script setup lang="ts">
// 嵌套路由
// 在 router 路由插件中设置 children 属性来添加嵌套路由
// App 组件中 <router-view> 存放父路由组件
// 在父路由组件中，<router-view> 存放子路由组件
// 注意：使用嵌套路由时，无论父路由还是子路由，其 path 属性设置均是根据 App 路径
// 故子路由的路径需设置上父路由的前缀

</script>
<style scoped lang="less">

</style>
