<template>
  <div class="result-container">
    <h2>測試系統後台模擬Demo</h2>
    <div class="image-container">
      <!-- 第一个图片 -->
      <div class="image-box">
        <img :src="image1" alt="Image 1" class="result-image" />
        <p class="image-caption">學生能力測試進度</p>
      </div>
      <!-- 第二个图片 -->
      <div class="image-box">
        <img :src="image2" alt="Image 2" class="result-image" />
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/img/001.png'
import image2 from '../assets/img/002.png'

export default {
  name: 'Result',
  data() {
    return {
      image1, // 引用的图片1
      image2 // 引用的图片2
    }
  }
}
</script>

<style scoped>
.result-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  text-align: center;
}

/* 标题部分字体颜色改为白色 */
.result-container h2 {
  font-size: 60px;
  margin-bottom: 20px;
  color: white; /* 标题字体颜色改为白色 */
}

.result-container p {
  font-size: 46px;
  margin-bottom: 20px;
  color: white; /* 说明文字颜色改为白色 */
}

/* 修改图片容器为上下排列 */
.image-container {
  display: flex;
  flex-direction: column; /* 改为上下排列 */
  justify-content: center;
  align-items: center;
  gap: 40px; /* 图片之间的间距调整为40px */
}

/* 为图片和说明的容器设置样式 */
.image-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-image {
  width: 800px; /* 调整图片宽度，使图片变大 */
  height: auto;
  border-radius: 10px;
}

/* 图片说明文字颜色改为白色 */
.image-caption {
  margin-top: 10px;
  font-size: 36px;
  color: white; /* 图片说明文字颜色改为白色 */
}
</style>
