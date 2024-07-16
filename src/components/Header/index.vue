<template>
  <div class="container row justify-center align-middle">
    <div style="width: 1136px" class="row align-middle">
      <img src="@/assets/imgs/logo.png" style="width: 53px" class="my-mr-10" />
      <h1 style="font-size: 24px; font-weight: bolder; color: #fff">上海市建设市场信息服务平台</h1>
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
  height: 90px;
  background-color: #0273d4;
  position: fixed;
  top: 0px;
  z-index: 9999;
}
</style>
