<template>
  <!-- 标题 -->
  <a-row
    type="flex"
    align="middle"
    :class="{
      'my-pa-5 chart-title': type == 1,
      'my-py-5 my-px-10': type == 3,
      'my-py-2 my-px-5 bg-fff2': type == 4,
    }"
  >
    <template v-if="type == 1">
      <span class="ff-fg my-pl-10">{{ title }}</span>
      <slot></slot>
    </template>
    <template v-if="type == 2">
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
    <template v-if="type == 3">
      <a-col :flex="1" class="my-pt-5">
        <a-divider />
      </a-col>
      <div class="my-px-30 fc-primary fs-12">{{ title }}</div>
      <a-col :flex="1" class="my-pt-5">
        <a-divider />
      </a-col>
    </template>
    <template v-if="type == 4">
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
.chart-title {
  background: url("~@/assets/imgs/chart/chart_title_bg.png") center no-repeat;
  background-size: 100% 100%;
  font-size: 1rem;
}
</style>