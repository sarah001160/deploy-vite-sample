import './assets/main.css'
// 官方的
import { createApp } from 'vue'
import { createPinia } from 'pinia' // 共享狀態

import App from './App.vue'
import router from './router' // 路由

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
