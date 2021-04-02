<template>
  <div class="bg-0006 radius-4 my-pa-10">
    <div
      :style="`height: ${firstChartHeight}px`"
      id="personnelBarChart5Id"
    ></div>
    <div class="height-20" id="personnelPaleChart11Id"></div>
    <a-row
      type="flex"
      justify="center"
      align="middle"
      v-for="(item, index) in threeArr"
      :key="index"
    >
      <span class="my-pr-5">{{ item.name }}</span>
      <i
        v-for="iItem in Math.round(20 * item.percent)"
        :key="iItem"
        :title="item.value"
        class="iconfont fs-12 cursor"
        :class="item.icon"
        :style="{ color: item.color }"
      ></i>
      <i
        v-for="iItem in Math.round(20 * (1 - item.percent))"
        :key="iItem"
        class="iconfont fs-12"
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

    let firstChartHeight = computed(() => {
      if (chartOneData.xData) return chartOneData.xData.length * 25;
      else return 50;
    });
    let personnelBarChart5Id = null;
    let personnelPaleChart11Id = null;

    function initData() {
      if (!personnelBarChart5Id)
        personnelBarChart5Id = init(
          document.getElementById("personnelBarChart5Id")
        );
      personnelBarChart5Id.setOption(barChart5(chartOneData), true);
      personnelBarChart5Id.resize();

      if (!personnelPaleChart11Id)
        personnelPaleChart11Id = init(
          document.getElementById("personnelPaleChart11Id")
        );
      personnelPaleChart11Id.setOption(
        paleChart11(cloneDeep(chartTwoData)),
        true
      );
      personnelPaleChart11Id.resize();
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