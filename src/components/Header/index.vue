<template>
  <div class="container row justify-center align-middle">
    <div style="width: 1236px" class="row align-middle space-between">
      <img src="@/assets/imgs/logo.png" style="width: 50px" class="my-mr-10" />
      <h1 style="font-size: 24px; font-weight: bolder; color: #fff">
        上海市工程建设标准体系查询系统
      </h1>
    </div>
    <div style="color: #fff; cursor: pointer" @click="logout()">退出</div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const logout = () => {
  console.log("logout111");
  router.push("/nav");
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 60px;
  background-color: #0072c6;
  position: fixed;
  top: 0px;
  z-index: 9999;
}
</style>
