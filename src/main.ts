import { createApp } from "vue";
import App from "./App.vue";
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/reset.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "@/assets/scss/index.scss";
import router from "@/router/index";
import { setupStore } from "@/stores/index";

const app = createApp(App);
setupStore(app);
// app.use(Antd);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
