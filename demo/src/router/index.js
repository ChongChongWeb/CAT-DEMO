import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Quiz from '../components/Quiz.vue'
import Result from '../components/Result.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
