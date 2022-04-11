import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import App from './App.vue'
import 'virtual:windi.css'

const router = createRouter({
  history: createWebHistory(),
  // ...
  routes,
})
createApp(App).use(router).mount('#app')
