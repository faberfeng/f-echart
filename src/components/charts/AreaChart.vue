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
  areaChart1,
  areaChart2,
  areaChart3,
  areaChart4,
  areaChart5,
  areaChart6,
  areaChart7,
  areaChart8,
} from "@/charts/areaChart";
export default {
  name: "AreaChart",
  setup() {
    let charts = reactive({
      areaChart1Id: areaChart1,
      areaChart2Id: areaChart2,
      areaChart3Id: areaChart3,
      areaChart4Id: areaChart4,
      areaChart5Id: areaChart5,
      areaChart6Id: areaChart6,
      areaChart7Id: areaChart7,
      areaChart8Id: areaChart8,
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
