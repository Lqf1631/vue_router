<template>
  <h1>public</h1>
  <button @click="back()">back</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const back = () => {
  router.push('/')
}
</script>
<style scoped lang="less">

</style>