import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'default-passive-events';

import "echarts-liquidfill";

import './assets/font/font.css'
import './css/index.scss'

createApp(App).use(store).use(router).mount('#app')