<!-- “”“
    帮忙写一个页面，有两个按钮，一个按钮叫普通用户，跳转到/home页面。一个叫管理员用户，跳转到//admin/standardMgt页面,采用vue3+ts+setup写法，保持mvc分层思想，尽量简洁，样式需要写。
”“”

// 1. 创建一个vue项目
// vue create vue3-ts
// 2. 安装element-plus
// npm install element-plus
// 3. 创建两个页面
// src/views/home/index.vue
// src/views/admin/standardMgt/index.vue
// 4. 创建两个按钮
// src/views/home/index.vue -->
<template>
  <div class="col justify-center align-middle bgwrapper">
    <div class="wrapper">
      <el-button
        size="large"
        type="primary"
        @click="toHome"
        style="width: 200px"
        >普通用户</el-button
      >
      <el-button
        size="large"
        style="margin-left: 0px !important; margin-top: 20px; width: 200px"
        type="primary"
        @click="toAdmin"
        >管理用户</el-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const toHome = () => {
  router.push("/home");
};
const toAdmin = () => {
  router.push("/admin/standardMgt");
};
</script>
<style lang="scss" scoped>
.bgwrapper {
  background: url("../../assets/imgs/login_2.jpg") no-repeat center center;
  background-size: cover;
  height: 100vh;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px !important;
    width: 400px !important;
    // height: auto !important;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
  }
}
</style>
