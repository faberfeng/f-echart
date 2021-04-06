<template>
  <!-- 标题 -->
  <a-row
    type="flex"
    align="middle"
    :class="{
      'my-pa-5 chart-title1': type == 1,
      'my-mt-10 chart-title2': type == 2,
      'my-py-5 my-px-10': type == 4,
      'my-py-2 my-px-5 bg-fff2': type == 5,
    }"
  >
    <template v-if="type == 1">
      <span class="ff-fg my-pl-10">{{ title }}</span>
      <slot></slot>
    </template>
    <template v-if="type == 2">
      <div
        class="relative full-width text-center fc-fff6"
        style="bottom: 0.5rem"
      >
        {{ title }}
      </div>
    </template>
    <template v-if="type == 3">
      <a-col :span="6">
        <a-image :preview="false" :src="subtitleLeft"></a-image>
      </a-col>
      <a-col :span="12" class="text-center fc-primary fs-14">
        {{ title }}
      </a-col>
      <a-col :span="6">
        <a-image :preview="false" :src="subtitleRight"></a-image>
      </a-col>
    </template>
    <template v-if="type == 4">
      <a-col :flex="1" class="my-pt-5">
        <a-divider />
      </a-col>
      <div class="my-px-30 fc-primary fs-12">{{ title }}</div>
      <a-col :flex="1" class="my-pt-5">
        <a-divider />
      </a-col>
    </template>
    <template v-if="type == 5">
      <span class="flex-other">{{ title }}</span>
      <QualifiedIsNot :status="status" />
    </template>
  </a-row>
</template>
<script>
import QualifiedIsNot from "@/components/others/QualifiedIsNot";

export default {
  components: {
    QualifiedIsNot,
  },
  props: {
    title: String,
    type: Number,
    status,
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
.chart-title1 {
  background: url("~@/assets/imgs/chart/title1_bg.png") center no-repeat;
  background-size: 100% 100%;
  font-size: 1rem;
}

.chart-title2 {
  background: url("~@/assets/imgs/chart/title2_bg.png") center no-repeat;
  background-size: 100% 100%;
  font-size: 1rem;
}
</style>