import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import * as echarts from 'echarts';
import "echarts-liquidfill";

const app = createApp(App)
// app.config.globalProperties.$echarts = echarts;

import './assets/font/font.css'
import './css/index.scss'

app.use(store).use(router).mount('#app')