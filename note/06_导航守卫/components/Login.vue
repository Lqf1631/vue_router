<template>
  <div class="box">
    <div>
      账号：<input type="text" v-model="name" placeholder="please enter name" />
    </div>
    <div>
      密码：<input
        type="password"
        v-model="password"
        placeholder="please enter password"
      />
    </div>
    <div>
      <button @click="login()">login</button>
      <button @click="logout()">logout</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const name = ref<string>('')
const password = ref<string>('')
const login = () => {
  if (name.value === 'a' && password.value === 'a') {
    confirm('login sucess')
    router.push({
      path: '/inner',
    })
    localStorage.setItem('token', '1')
  } else {
    name.value = ''
    password.value = ''
    confirm('login fail')
  }
}
const logout = () => {
  confirm('logout sucess')
  localStorage.removeItem('token')
}
</script>
<style scoped lang="less">
.box {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
