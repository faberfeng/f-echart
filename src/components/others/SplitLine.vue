<template>
  <!-- 分割线 -->
  <template v-if="type == 1">
    <a-row type="flex" align="middle" class="my-py-5">
      <div class="bg-fff bdr-all circle-box"></div>
      <div class="flex-other bg-fff6 line-box"></div>
      <div class="bg-fff bdr-all circle-box"></div>
    </a-row>
  </template>
</template>
<script>
export default {
  props: {
    type: Number,
  },
};
</script>
<style lang="scss" scoped>
.circle-box {
  width: 0.5rem;
  height: 0.5rem;
}
.line-box {
  height: 0.1rem;
}
</style>