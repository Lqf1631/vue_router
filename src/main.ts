import { createApp } from 'vue'
import App from './App.vue'
// 导入路由 router 实质为插件
import router from './router'
// 挂载 router 插件
createApp(App).use(router).mount('#app')

// 设置公开路由
const publicRoute = ['/public','/']
// 设置路由卫士，拦截非公开的路由
router.beforeEach((to,from,next)=>{
  // 如果 to 的路径在公开路由的路径中，或者进行过登录操作具备 token 权限，则放行
  if(publicRoute.includes(to.path) || localStorage.getItem('token')){
    next()
  }
  // 反之则跳转到 login 界面
  else{
    next('/')
  }
})