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
  paleChart1,
  paleChart2,
  paleChart3,
  paleChart4,
  paleChart5,
  paleChart6,
  paleChart7,
} from "../charts/paleChart";
export default {
  setup() {
    let charts = reactive({
      paleChart1Id: paleChart1,
      paleChart2Id: paleChart2,
      paleChart3Id: paleChart3,
      paleChart4Id: paleChart4,
      paleChart5Id: paleChart5,
      paleChart6Id: paleChart6,
      paleChart7Id: paleChart7,
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