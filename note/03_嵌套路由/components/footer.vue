<template>
  <div>Footer</div>
  <!-- 该标签用于存放 login 和 reg 作为 footer 的子路由 -->
  <router-view></router-view>
  <!-- 注意：当子路由采用 to path 形式时，需要加上父路由的前缀才能实现跳转 -->
  <router-link :to="{name:'login'}">login</router-link>
  <router-link :to="{name:'reg'}" style="margin-left: 10px">reg</router-link>
</template>
<script setup lang="ts">

</script>
<style scoped lang="less">

</style>