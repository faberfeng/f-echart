<template>
  <div class="container row justify-center align-middle">
    <div style="width: 1236px" class="row align-middle space-between">
      <img src="@/assets/imgs/logo.png" style="width: 53px" class="my-mr-10" />
      <h1 style="font-size: 24px; font-weight: bolder; color: #fff">
        上海市工程建设标准体系查询系统
      </h1>
      <!-- <el-button type="text" size="medium" style="color: #fff">
        退出
      </el-button> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  setup() {
    return {};
  },
});
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
