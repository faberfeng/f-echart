<template>
  <div
    class="my-pt-15 my-pb-5"
    :class="{
      'decorate1-bg': type == 1,
      'my-px-5 decorate2-bg': type == 2,
    }"
    v-if="type == 1 || type == 2"
  >
    <div class="text-center">
      {{ data.name }}
    </div>
    <div class="text-center">
      <span class="ff-pm fs-16" :style="{ color: data.color }">
        {{ data.value }}
      </span>
      <span class="my-pl-2" v-show="data.unit">{{ data.unit }} </span>
    </div>
  </div>
  <a-row type="flex" justify="center" align="middle" v-if="type == 3">
    <div
      class="point-box bdr-all"
      :style="`box-shadow: 0rem 0rem 0.14rem 0rem ${data.color};`"
    >
      <div
        class="full-screen bdr-all"
        :style="`background: ${data.color}`"
      ></div>
    </div>
    <div class="my-pl-10 text-center">
      <div class="ff-pm fs-18" :style="`color: ${data.color}`">
        {{ data.value }}{{ data.unit }}
      </div>
      <div>{{ data.name }}</div>
    </div>
  </a-row>
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
.point-box {
  width: 1.13rem;
  height: 1.13rem;
  padding: 0.13rem;
  background: rgba(255, 255, 255, 0.1);
}
</style>