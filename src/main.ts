import { createApp } from 'vue'
import App from './App.vue'
// 导入路由 router 实质为插件
import router from './router'
// 导入全局插件 loadingBar 的 endLoading startLoading 方法
import { endLoading, startLoading } from './components/loadingBar/index'

// 挂载 router 插件
createApp(App).use(router).mount('#app')

// 设置公开路由
const publicRoute = ['/public', '/']
// 设置前置路由卫士，拦截非公开的路由
router.beforeEach((to, from, next) => {
  // 获取跳转目标页面的元信息的 title 值，将其赋值给 document.title 文档标题
  document.title = to.meta.title
  // 如果 to 的路径在公开路由的路径中，或者进行过登录操作具备 token 权限，则放行
  if (publicRoute.includes(to.path) || localStorage.getItem('token')) {
    // 开始跳转时，调用全局插件 loadingBar 的 startLoading ，加载条开始移动
    startLoading()
    next()
  }
  // 反之则跳转到 login 界面
  else {
    next('/')
  }
})
// 设置后置路由守卫，当路由跳转完成时会触发
router.afterEach((to,from)=>{
  // 跳转完成时，调用全局插件 loadingBar 的 startLoading ，完成加载条
  endLoading()
})