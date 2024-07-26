import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//头部导入
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //用来配置跨域
    // host: "0.0.0.0",
    proxy: {
      "/JGBStandardWeb": {
        target: "https://ciac.zjw.sh.gov.cn", //目标服务器地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/JGBStandardWeb/, ""),
      },
    },
    // hmr: true,
  },
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
