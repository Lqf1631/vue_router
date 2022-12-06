<template>
  <h1>App</h1>
  <!-- router-view 未命名时，显示的为 name 为 default 的视图组件 -->
  <router-view></router-view>
  <router-view name="b"></router-view>
  <router-view name="c"></router-view>
  <router-link :to="{name:'BC'}">/BC</router-link>
  <router-link :to="{name:'A'}" style="margin-left: 10px;">/A</router-link>
</template>
<script setup lang="ts">

// 命名视图
// router-view 设置视图，可以使用多个具有 name 属性的命名视图
// 每个视图中可以存放不同的组件，且组件对应不同的路径
// 当路由切换路径时，对应命名视图内按照对应路径切换对应的组件
// 在 router 路由插件中，使用 components 对象数组属性设置每个 router-view 视图中存放的组件以及对应路径
// 对象名为 router-view 视图名，对象值为 router-view 存放的组件

// 通过命名视图，可以将多个不同组件存放在不同命名视图中，且每个组件独立对应路径
// 当路径切换时，每个命名视图独立按照对应的路径切换到对应视图内部存放的组件

</script>
<style scoped lang="less">

</style>
