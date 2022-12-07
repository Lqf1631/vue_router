<template>
  <h1>Inner</h1>
  <button @click="back()">back</button>
  <router-link to="A" style="margin-right: 10px">A</router-link>
  <router-link to="B" style="margin-right: 10px">B</router-link>
  <router-link to="C">C</router-link>
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