<template>
  <!-- div 为定位元素，将加载条定位在页面顶端 -->
  <div class="box">
    <!-- 加载条元素，起始样式为空 -->
    <div class="box-bar" ref="bar"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// ref 获取 DOM 元素
const bar = ref<HTMLElement>()
// 控制加载条宽度变化的变量
const width = ref<number>(0)
// 开始加载的函数
const startLoading = () => {
  // 断言 bar.value 类型为 HTMLElement
  const dom = bar.value as HTMLElement
  // 调用该方法，当页面开始重新渲染时，会触发对应的参数函数
  // 即将该参数函数注册到页面开始重新渲染的钩子函数上
  // 该函数返回值为一 id 值，可以利用该值来取消注册
  let id = window.requestAnimationFrame(function fn() {
    // 当加载条宽度小于 90% 时，会将加载条宽度 +1
    if (width.value < 90) {
      width.value += 1
      // 以加载条宽度变量值来设置加载条的宽度
      dom.style.width = width.value + '%'
      // window.requestAnimationFrame 注册的参数函数仅会执行一次，故需进行递归
      // 再将该函数进行注册，递归调用，循环效果
      window.requestAnimationFrame(fn)
    } else {
      // 当加载条宽度大于 90% 时，会停止当前加载条变化，并取消掉该函数的注册并初始化等待下一次路由跳转
      // 初始化
      width.value = 0
      // 取消函数注册
      window.cancelAnimationFrame(id)
    }
  })
}
// 结束加载的函数
const endLoading = () => {
  // 断言 dom 存在且为 HTMLElement 类型
  const dom = bar.value as HTMLElement
  setTimeout(() => {
    // 此处不需要进行递归，故可以使用箭头函数为参数
    window.requestAnimationFrame(() => {
      width.value = 100
      dom.style.width = width.value + '%' 
    })
  }, 1000)
}
// 对外暴露函数，将该组件注册为全局插件，当调用暴露的函数时，会实现该组件的功能
// 功能：路由跳转时，加载时会出现加载条，加载结束后，加载条会清空
defineExpose({
  startLoading,
  endLoading,
})
</script>
<style scoped lang="less">
.box {
  position: fixed;
  top: 0;
  height: 5px;
  width: 100%;
  &-bar {
    height: inherit;
    background-color: blue;
    width: 0;
  }
}
</style>
