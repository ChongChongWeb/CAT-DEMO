<template>
  <div class="form-container">
    <h2 class="form-title">AI素養測試系統demo</h2>
    <div class="form-group">
      <label for="name">姓名:</label>
      <input type="text" id="name" v-model="name" @input="validateName" required />
      <p v-if="nameError" class="error-message">{{ nameError }}</p>
      <!-- 错误提示 -->
    </div>

    <div class="form-group">
      <label for="age">年齡:</label>
      <input type="number" id="age" v-model="age" :min="6" required />
      <!-- 设置年龄的最小值为6 -->
    </div>

    <button class="submit-btn" @click="startQuiz">開始答題</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      nameError: '' // 用于显示姓名验证错误
    }
  },
  methods: {
    // 验证姓名：只能输入非数字的英文或中文
    validateName() {
      const nameRegex = /^[\u4e00-\u9fa5a-zA-Z]+$/ // 允许中文、英文，禁止数字
      if (!nameRegex.test(this.name)) {
        this.nameError = '姓名只能包含非數字的英文或中文'
      } else {
        this.nameError = '' // 如果验证通过，清除错误消息
      }
    },
    startQuiz() {
      // 校验是否所有字段都已通过验证
      this.validateName()

      if (this.name && this.age >= 6 && !this.nameError) {
        this.$router.push('/quiz') // 跳转到quiz页面
      } else {
        alert('請填寫完整且有效的資訊！')
      }
    }
  }
}
</script>

<style scoped>
/* 布局调整，表单下降到页面中间下方 */
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
  transform: translateY(25%); /* 使表单下降到页面中间下方 */
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

/* 表单样式 */
.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

/* 错误信息样式 */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

/* 按钮样式 */
.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
