<template>
  <div class="bg-0006 radius-4 my-pa-5" style="min-width: 360px">
    <div :style="`height: ${firstChartHeight}px`" id="barChart5ThemeId"></div>
    <div style="height: 200px" id="paleChart11ThemeId"></div>
    <a-row
      type="flex"
      align="middle"
      v-for="(item, index) in threeArr"
      :key="index"
    >
      <span class="my-pr-5">{{ item.name }}</span>
      <i
        v-for="iItem in Math.round(20 * item.percent)"
        :key="iItem"
        :title="item.value"
        class="iconfont fs-14 cursor"
        :class="item.icon"
        :style="{ color: item.color }"
      ></i>
      <i
        v-for="iItem in Math.round(20 * (1 - item.percent))"
        :key="iItem"
        class="iconfont fs-14"
        :class="item.icon"
        :style="{ color: item.thinColor }"
      ></i>
      <span class="my-pl-5 ff-pm">
        {{ (item.percent * 100).toFixed(2) }}%
      </span>
    </a-row>
  </div>
</template>
<script>
import { init } from "echarts";
import { cloneDeep } from "lodash";
import { computed, onMounted } from "vue";

import { hexToRgba } from "@/charts/common";

import { barChart5 } from "@/charts/barChart";
import { paleChart11 } from "@/charts/paleChart";
export default {
  props: {
    chartOneData: Object,
    chartTwoData: Object,
    threeData: Object,
  },
  setup(props) {
    let { chartOneData, chartTwoData, threeData } = props;
    let threeArr = threeData.data.map((item) => {
      item.thinColor = hexToRgba(item.color, 0.3);
      return item;
    });

    let firstChartHeight = computed(() => chartOneData.xData.length * 25);
    let barChart5ThemeId = null;
    let paleChart11ThemeId = null;

    function initData() {
      if (!barChart5ThemeId)
        barChart5ThemeId = init(document.getElementById("barChart5ThemeId"));
      barChart5ThemeId.setOption(barChart5(cloneDeep(chartOneData)), true);
      barChart5ThemeId.resize();

      if (!paleChart11ThemeId)
        paleChart11ThemeId = init(
          document.getElementById("paleChart11ThemeId")
        );
      paleChart11ThemeId.setOption(paleChart11(cloneDeep(chartTwoData)), true);
      paleChart11ThemeId.resize();
    }

    onMounted(() => {
      initData();
    });

    return {
      hexToRgba,
      firstChartHeight,
      threeArr,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>