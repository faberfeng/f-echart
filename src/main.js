import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'default-passive-events';

import "echarts-liquidfill";

const app = createApp(App)
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.config.productionTip = false;

import './assets/font/font.css'
import './css/index.scss'

app.use(store).use(router).use(Antd).mount('#app')