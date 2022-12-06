<template>
  <router-view></router-view>
  <table>
    <thead>
      <th>name</th>
      <th>id</th>
      <th>price</th>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.price }}</td>
        <td><button @click="to(item)">详情</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
// 路由传参：在路由跳转时，将该页面的数据传递到跳转页面，在 router.push 调用时传递参数
// 传参形式：动态参数和查询字符串
// 查询字符串：path + query path 指定跳转页面，query 指定传递参数
// router.push({path:string,query:object})
// route.query 接受传递来的参数
// 动态参数：在 router 插件配置文件中，设置 path：/:param 动态参数
// 使用 name + params name 指定跳转页面，params 指定动态参数
// router.push({name:string,params:{param:value}})
// route.params 接受传递来的参数

// 导出 json 文件中的 data 数据
import { data } from './assets/goods.json'
import { useRouter } from 'vue-router'
const router = useRouter()
const to = (item: { name: string; id: number; price: number }) => {
  router.push({
    // 采用查询字符串的形式传参，使用 path 和 query
    // path: '/detail',
    // query 属性接受对象形式
    // query: item,
    // 采用 params 和 name 形式传参，参数保存在内存中，刷新时会丢失，目前已经不支持
    // name:'detail',
    // params:item
    // 采用动态参数的形式，即在 params 对象中设置对应的动态参数进行传递
    // 同样采用 params 和 name 形式传参
    name: 'detail',
    params: {
      // 动态参数名
      id: item.id,
      name: item.name,
      price: item.price,
    },
  })
}
</script>
<style scoped lang="less"></style>
