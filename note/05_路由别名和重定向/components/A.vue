<template>
  <h1>A</h1>
  {{ route.query.name }}
  {{ route.query.age }}
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<style scoped lang="less"></style>
