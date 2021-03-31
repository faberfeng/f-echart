<template>
  <div class="row justify-around align-middle wrap">
    <div
      v-for="(item, index) in Object.keys(charts)"
      :key="index"
      :id="item"
      class="chart-item"
    ></div>
  </div>
</template>
<script>
import { init } from "echarts";
import { nextTick, onMounted, reactive } from "vue";
import {
  lineChart1,
  lineChart2,
  lineChart3,
  lineChart4,
  lineChart5,
  lineChart6,
} from "@/charts/lineChart";
export default {
  setup() {
    let charts = reactive({
      lineChart1Id: lineChart1,
      lineChart2Id: lineChart2,
      lineChart3Id: lineChart3,
      lineChart4Id: lineChart4,
      lineChart5Id: lineChart5,
      lineChart6Id: lineChart6,
    });

    function initChart() {
      for (let key in charts) {
        let chartId = init(document.getElementById(key));
        chartId.setOption(charts[key]({}), true);
        chartId.resize();
      }
    }

    onMounted(() => {
      nextTick(() => {
        initChart();
      });
    });

    return {
      charts,
    };
  },
};
</script>