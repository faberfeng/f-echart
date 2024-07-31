import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const mode = process.env.NODE_ENV;

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
  //测试和正式环境的打包publicPath不一样,所以需要配置
  base: mode === "production" ? "./" : "/", //打包路径
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
