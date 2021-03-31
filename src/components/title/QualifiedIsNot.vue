<template>
  <a-row type="flex" align="middle" class="my-px-5 error-bg" v-if="value == 0">
    <i class="iconfont icon_buhege fc-error fs-14 my-pr-5"></i>
    <span class="fs-12 my-pr-10">不合格</span>
  </a-row>
  <a-row type="flex" align="middle" v-else>
    <i class="iconfont icon_hege fc-success fs-14 my-pr-5"></i>
    <span class="my-px-2 fc-success">合格</span>
  </a-row>
</template>
<script>
export default {
  props: {
    value: Number,
  },
};
</script>
<style lang="scss" scoped>
.error-bg {
  background: url("~@/assets/imgs/chart/error_bg.png") center no-repeat;
  background-size: 100% 100%;
}
</style>