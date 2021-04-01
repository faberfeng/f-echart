<template>
  <div
    class="my-pt-15 my-pb-5"
    :class="{
      'decorate1-bg': type == 1,
      'my-px-5 decorate2-bg': type == 2,
    }"
  >
    <div class="text-center">
      {{ data.name }}
    </div>
    <div class="text-center">
      <span class="fs-14" :class="data.color || ''">{{ data.value }}</span>
      <span class="my-pl-2" v-show="data.unit">{{ data.unit }} </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: Number,
    data: Object,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.decorate1-bg {
  background: url("~@/assets/imgs/chart/decorate1_bg.png") center no-repeat;
  background-size: 100% 100%;
}
.decorate2-bg {
  background: url("~@/assets/imgs/chart/decorate2_bg.png") center no-repeat;
  background-size: 100% 100%;
}
</style>