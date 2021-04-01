<template>
  <!-- 标题 -->
  <a-row
    type="flex"
    align="middle"
    class="my-pa-5 chart-title"
    v-if="type == 1"
  >
    <span class="ff-fg my-pl-10">{{ title }}</span>
    <slot></slot>
  </a-row>
  <a-row type="flex" align="middle" v-if="type == 2">
    <a-col :span="6">
      <a-image :preview="false" :src="subtitleLeft"></a-image>
    </a-col>
    <a-col :span="12" class="text-center fc-primary fs-14">
      {{ title }}
    </a-col>
    <a-col :span="6">
      <a-image :preview="false" :src="subtitleRight"></a-image>
    </a-col>
  </a-row>
  <a-row type="flex" align="middle" class="my-my-5 my-mx-10" v-if="type == 3">
    <a-col :flex="1" class="my-pt-5">
      <a-divider />
    </a-col>
    <div class="my-px-30 fc-primary fs-12">{{ title }}</div>
    <a-col :flex="1" class="my-pt-5">
      <a-divider />
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: {
    title: String,
    type: Number,
  },
  setup() {
    const subtitleLeft = require("@/assets/imgs/chart/subtitle_left.png");
    const subtitleRight = require("@/assets/imgs/chart/subtitle_right.png");

    return {
      subtitleLeft,
      subtitleRight,
    };
  },
};
</script>
<style lang="scss" scoped>
.chart-title {
  background: url("~@/assets/imgs/chart/chart_title_bg.png") center no-repeat;
  background-size: 100% 100%;
  font-size: 1rem;
}
</style>