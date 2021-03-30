<template>
  <div class="row justify-around align-middle wrap">
    <div
      class="chart-item"
      :id="item"
      v-for="(item, index) in Object.keys(charts)"
      :key="index"
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
} from "../charts/areaChart";
export default {
  setup() {
    let charts = reactive({
      areaChart1Id: areaChart1,
      areaChart2Id: areaChart2,
      areaChart3Id: areaChart3,
      areaChart4Id: areaChart4,
      areaChart5Id: areaChart5,
      areaChart6Id: areaChart6,
      areaChart7Id: areaChart7,
    });

    function initChart() {
      for (let key in charts) {
        let chartId = init(document.getElementById(key));
        chartId.setOption(charts[key]({}), true);
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