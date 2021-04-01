<template>
  <!-- 合格标签 -->
  <a-row type="flex" align="middle" v-if="status">
    <i class="iconfont icon_hege fc-success fs-14"></i>
    <span class="fc-success my-px-5 fs-12">合格</span>
  </a-row>
  <a-row type="flex" align="middle" class="my-px-5 error-bg" v-else>
    <i class="iconfont icon_buhege fc-error fs-14"></i>
    <span class="my-px-5 fs-12">不合格</span>
  </a-row>
</template>
<script>
export default {
  props: {
    status: Number,
  },
};
</script>
<style lang="scss" scoped>
.error-bg {
  background: url("~@/assets/imgs/chart/error_bg.png") center no-repeat;
  background-size: 100% 100%;
}
</style>