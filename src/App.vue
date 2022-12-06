<template>
  <div>router</div>
  <!-- router-link 可以通过 to 属性指定 path 进行跳转 -->
  <router-link to="/">login</router-link>
  <router-link class="routerLink" to="/reg">reg</router-link>
  <router-view></router-view>
  <!-- router-link 可以通过 to 属性进行属性绑定，绑定包含 name 的对象进行跳转 -->
  <router-link :to="{ name: 'login' }">login</router-link>
  <router-link class="routerLink" :to="{ name: 'reg' }">reg</router-link>
  <!-- <button @click="to('/')">login</button>
  <button @click="to('/reg')">reg</button> -->
  <button @click="to('login')">login</button>
  <button @click="to('reg')">reg</button>
</template>
<script setup lang="ts">
// 路由模式: 由 history 进行配置，分为 Web 和 Hash 模式，分别基于 hash 地址和 h5 的 history 实现
// hash 模式: 地址为 #/ 基于 loaction.hash 赋值进行跳转，基于 hashChange 事件进行监听切换组件显示
// 采用 history: createHashHistory() 进行配置
// Web 模式: 地址没有 # 基于 history.pushSate 进行跳转，基于 popSatate 事件进行监听切换组件显示
// 采用 history：createWebhistory() 进行配置
// 以上两种方式均实现改变路径而页面不刷新，实现单页面的路由

// 路由配置：
// 安装 npm install vue-router -S
// 配置 ./router/index.ts 创建路由 router 插件
// 挂载 ./main.ts app.use(router) 挂载路由 router 插件

// router 插件创建
// 调用 createRouter 函数，传入配置参数 history routes
// const router = createRouter({ history, routes })
// 调用 createWebHistory 函数，创建 hisory
// const hisory = createWebHistory() / createHashHistory()
// routes 为 RouterRcordRaw 对象组成的数组
// RouterRcordRaw 对象为路径 path 和组件 component 的对应关系，且可以通过 name 属性进行命名
// 对于组件 component 采用函数形式，返回值为 import 导入组件
// const routes :Array<RouterRcordRaw> = [{name:string, path:string, component:()=>import(componentPath:string)}]

// 路由使用
// 在组件中使用 <router-view> 标签作为路由组件存放的容器
// 使用路径形式 <router-link to="path"> 标签作为路由组件切换的控件
// 使用名称形式 <router-link :to="{name}"> 标签作为路由组件切换的控件

// 编程式路由跳转
// 导入 useRouter 的 hook 函数
// 调用 useRouter 函数创建 router 路由对象实例
// 对 router 调用各种方法实现路由功能
// 通过 name 或 path 指定组件进行跳转
// router.push(path:string || {name:string})

// 导入 userRouter hook 函数
import { useRouter } from 'vue-router';
// 调用 userRouter hook 函数，创建 router 对象进行路由操作
const router = useRouter()
// 定义点击事件的处理函数 to
// const to = (url:string) => {
//   // 调用 router.push 进行跳转
//   // 接受 path 路径进行跳转
//   router.push(url)
// }
const to = (name:string) => {
  // 接受 name 进行跳转
  router.push({name})
} 
</script>
<style scoped lang="less">
.routerLink {
  margin-left: 10px;
}
</style>
