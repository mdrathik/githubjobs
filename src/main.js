import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { createWebHistory, createRouter } from 'vue-router'
import Jobs from './components/jobs/jobs.vue'
import jobDescription from './components/jobs/jobdescriptions.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Jobs,
    },
    {
      path: '/job/:id',
      component: jobDescription,
    },
  ],
})

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
