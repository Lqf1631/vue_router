<template>
  <div>查询字符串形式</div>
  <div>
    name:{{ route.query.name }} id:{{ route.query.id }} price:{{
      route.query.price
    }}
  </div>
  <div>params 形式（目前已经不支持）,需要和动态参数一起使用，在 path 路径中设置动态参数，在 params 中使用</div>
  <div>
    name:{{ route.params.name }} id:{{ route.params.id }} price:{{
      route.params.price
    }}
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped lang="less"></style>
