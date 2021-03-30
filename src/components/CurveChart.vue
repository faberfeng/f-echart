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
  curveChart1,
  curveChart2,
  curveChart3,
  curveChart4,
  curveChart5,
  curveChart6,
} from "../charts/curveChart";
export default {
  setup() {
    let charts = reactive({
      curveChart1Id: curveChart1,
      curveChart2Id: curveChart2,
      curveChart3Id: curveChart3,
      curveChart4Id: curveChart4,
      curveChart5Id: curveChart5,
      curveChart6Id: curveChart6,
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