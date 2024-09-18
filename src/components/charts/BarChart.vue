<template>
  <div class="row justify-around align-middle wrap">
    <div
      v-for="(item, index) in Object.keys(charts)"
      :id="item"
      :key="index"
      class="chart-item"
    ></div>
  </div>
</template>
<script>
import { init } from "echarts";
import { nextTick, onMounted, reactive } from "vue";
import {
  barChart1,
  barChart2,
  barChart3,
  barChart4,
  barChart5,
} from "@/charts/barChart";
export default {
  name: "BarChart",
  setup() {
    let charts = reactive({
      barChart1Id: barChart1,
      barChart2Id: barChart2,
      barChart3Id: barChart3,
      barChart4Id: barChart4,
      barChart5Id: barChart5,
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
