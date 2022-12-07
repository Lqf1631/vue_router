// 将 index.vue 组件注册为全局插件

// 导入 index.vue 组件
import loadingBar from './index.vue'
// 导入创建 VNode 函数
import { createVNode,render } from 'vue'

// 将 index.vue 组件创建为 VNode
const VNode = createVNode(loadingBar)
// 将 VNode 渲染到 document.body
render(VNode,document.body)

export const startLoading = VNode.component?.exposed?.startLoading
export const endLoading = VNode.component?.exposed?.endLoading