<template>
  <div class="quiz-container">
    <h2 class="quiz-title">AI素養測試</h2>
    <div class="quiz-question">
      <!-- 显示题目图片（除了第三题） -->
      <h3 class="concept-title">{{ getConceptTitle() }}</h3>
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
import image1 from '../assets/img/q1.png'
import image2 from '../assets/img/q2.png'
import image3 from '../assets/img/q3.png'
import image4 from '../assets/img/q4.png'
import image5 from '../assets/img/q5.png'

export default {
  data() {
    return {
      questions: [
        // 概念1的题目
        {
          question: '如果你有一個“人工智能”助手，它可以幫助你做什麼？',
          options: ['為你開門', '顯示時間和天氣', '人臉識別', '簡單的數字計算'],
          correctAnswer: 'A',
          concept: 1,
          image: image1
        },
        {
          question: '哪項任務更像是「專家型」人工智能，而非「多面手」人工智能？',
          options: [
            '一個能解決不同類型問題的人工智能客服',
            '專門設計來辨識面孔的人工智能',
            '一個能夠寫詩和小說的人工智能',
            '一個既能駕駛汽車又能处理会议的人工智能'
          ],
          correctAnswer: 'B',
          concept: 1,
          image: image2
        },
        {
          question:
            '在安全監控系統中使用人臉識別技術時，為了提高識別準確率，以下哪一項技術做法最為有效？',
          options: [
            '增加訓練數據集中的人臉樣本多樣性，包括不同年齡、性別和種族的樣本',
            '提高攝像頭的分辨率，確保能夠捕捉到更清晰的影像',
            '將人臉識別算法與其他生物特徵識別（如指紋或虹膜）結合，以增強識別準確度',
            '以上皆是'
          ],
          correctAnswer: 'D',
          concept: 1,
          image: null // 无图片
        },
        // 概念2的题目
        {
          question: '以下問題中，哪個最適合出現在「？」橢圓處？',
          options: ['它是甜的嗎？', '它是長的嗎？', '它是綠色的嗎？', '它有果皮嗎？'],
          correctAnswer: 'A',
          concept: 2,
          image: image3
        },
        {
          question: '如果使用這個決策樹來分類荔枝，它應該屬於哪一個分支？',
          options: ['', '', '', ''],
          correctAnswer: 'A',
          concept: 2,
          image: image4
        },
        {
          question:
            '根捕現有决策樹，荔枝會被誤分為百香果。為了更準確地將荔枝分類，应该采用一下哪種方法？',
          options: [
            '增加一個判斷“是否有果核”的分支。',
            '將“百香果”分支改成“其他水果”。',
            '重新訓練決策樹，加入更多水果的樣本，尤其是荔枝的樣本。',
            '以上皆非'
          ],
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
    getConceptTitle() {
      const conceptTitles = [
        '概念一：什麼是人工智能',
        '概念一：什麼是人工智能',
        '概念一：什麼是人工智能',
        '概念二：什麼是機器學習算法',
        '概念二：什麼是機器學習算法',
        '概念二：什麼是機器學習算法'
      ]
      return conceptTitles[this.currentQuestionIndex]
    },
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
  transform: translateY(5%); /* 向上移动表单 */
}

.quiz-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #343a40;
  text-align: center;
}

.concept-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: #555;
  text-align: center;
}

.quiz-question {
  width: 100%;
  margin-bottom: 20px;
}

.quiz-question p {
  font-weight: bold; /* 加粗题干字体 */
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
