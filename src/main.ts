import { createApp } from 'vue'
import App from './App.vue'
// 导入路由 router 实质为插件
import router from './router'
// 挂载 router 插件
createApp(App).use(router).mount('#app')
