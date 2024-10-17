<template>
  <div class="quiz-container">
    <h2 class="quiz-title">AI素养测试题</h2>
    <div class="quiz-question">
      <!-- 显示题目图片（除了第三题） -->
      <img
        v-if="currentQuestion.image"
        :src="currentQuestion.image"
        alt="Question Image"
        class="question-image"
      />
      <p>{{ currentQuestion.question }}</p>
      <ul class="quiz-options">
        <li v-for="(option, index) in currentQuestion.options" :key="index">
          <label>
            <input type="radio" :value="getOptionPrefix(index)" v-model="selectedOption" />
            {{ getOptionPrefix(index) }} {{ option }}
          </label>
        </li>
      </ul>
      <button @click="submitAnswer" :disabled="!selectedOption">提交</button>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/img/26173.jpg'
import image2 from '../assets/img/26173.jpg'
import image3 from '../assets/img/26173.jpg'
import image4 from '../assets/img/26173.jpg'
import image5 from '../assets/img/26173.jpg'

export default {
  data() {
    return {
      questions: [
        // 概念1的题目
        {
          question: '1. 请看图片，选择正确的描述。',
          options: ['描述A', '描述B', '描述C', '描述D'],
          correctAnswer: 'D',
          concept: 1,
          image: image1
        },
        {
          question: '2. 请看图片，选择正确的操作。',
          options: ['操作A', '操作B', '操作C', '操作D'],
          correctAnswer: 'B',
          concept: 1,
          image: image2
        },
        {
          question: '3. 这道题不显示图片，请选择正确选项。',
          options: ['选项A', '选项B', '选项C', '选项D'],
          correctAnswer: 'D',
          concept: 1,
          image: null // 无图片
        },
        // 概念2的题目
        {
          question: '4. 请看图片，选择正确答案。',
          options: ['答案A', '答案B', '答案C', '答案D'],
          correctAnswer: 'C',
          concept: 2,
          image: image3
        },
        {
          question: '5. 请看图片，选择正确描述。',
          options: ['答案A', '答案B', '答案C', '答案D'],
          correctAnswer: 'A',
          concept: 2,
          image: image4
        },
        {
          question: '6. 最后一题，请看图片选择正确选项。',
          options: ['选项A', '选项B', '选项C', '选项D'],
          correctAnswer: 'C',
          concept: 2,
          image: image5
        }
      ],
      currentQuestionIndex: 0, // 从第一题开始
      selectedOption: null // 用于记录当前选择的选项
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    }
  },
  methods: {
    submitAnswer() {
      const correctAnswer = this.currentQuestion.correctAnswer

      if (this.selectedOption === correctAnswer) {
        // 正确回答，进行预定的顺序跳转
        this.moveToNextQuestion()
      }
      // 重置选择
      this.selectedOption = null
    },
    moveToNextQuestion() {
      // 按顺序跳转到下一题
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1
      } else {
        // 如果已经是最后一题，跳转到结果页面
        this.$router.push('/result')
      }
    },
    getOptionPrefix(index) {
      const optionPrefixes = ['A', 'B', 'C', 'D']
      return optionPrefixes[index]
    }
  },
  watch: {
    // 监听 currentQuestionIndex，当题目变化时，重置 selectedOption
    currentQuestionIndex() {
      this.selectedOption = null
    }
  }
}
</script>

<style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  transform: translateY(15%);
}

.quiz-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #343a40;
  text-align: center;
}

.quiz-question {
  width: 100%;
  margin-bottom: 20px;
}

.question-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.quiz-options {
  list-style: none;
  padding: 0;
}

.quiz-options li {
  margin-bottom: 10px;
}

.quiz-options label {
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
}

.quiz-options input[type='radio'] {
  margin-right: 10px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
}
</style>
