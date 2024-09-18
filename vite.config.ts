import { defineConfig } from "vite";
import requireTransform from "vite-plugin-require-transform";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
const mode = process.env.NODE_ENV;

//头部导入
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //用来配置跨域
    // host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "", //目标服务器地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/JGBStandardWeb/, ""),
      },
    },
    // hmr: true,
  },
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /\.(vue|js|ts|jsx|tsx)$/,
    }),
  ],
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
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    outDir: "Fechart",
    target: "es2015",
    minify: "esbuild",
    cssTarget: "chrome80",
    chunkSizeWarningLimit: 2000,
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.js"),
      name: "Fechart",
      fileName: "Fechart",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
});
