import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


//头部导入
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 添加以下配置
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       javascriptEnabled: true,
  //       additionalData: '@import "@/assets/scss/index.scss";',
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
