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
import { radarChart1, radarChart2 } from "../charts/radarChart";
export default {
  setup() {
    let charts = reactive({
      radarChart1Id: radarChart1,
      radarChart2Id: radarChart2,
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