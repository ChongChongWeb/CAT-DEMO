<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 设置 body 背景样式 */
body {
  background-image: url('@/assets/img/829.jpg'); /* 使用 require 或 import 来引入图片 */
  background-size: cover; /* 背景图像将覆盖整个页面 */
  background-position: center; /* 背景图像居中 */
  background-attachment: fixed; /* 背景图像固定，不随页面滚动 */
  margin: 0;
  padding: 0;
  height: 100vh; /* 确保背景覆盖整个视口 */
  font-family: 'Arial', sans-serif;
}
</style>
