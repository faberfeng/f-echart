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
import "echarts-liquidfill";
import { nextTick, onMounted, reactive } from "vue";
import {
  gaugeChart1,
  gaugeChart2,
  gaugeChart3,
  gaugeChart4,
  gaugeChart5,
  gaugeChart6,
  gaugeChart7,
  gaugeChart8,
  gaugeChart9,
  gaugeChart10,
} from "../charts/gaugeChart";
export default {
  setup() {
    let charts = reactive({
      gaugeChart1Id: gaugeChart1,
      gaugeChart2Id: gaugeChart2,
      gaugeChart3Id: gaugeChart3,
      gaugeChart4Id: gaugeChart4,
      gaugeChart5Id: gaugeChart5,
      gaugeChart6Id: gaugeChart6,
      gaugeChart7Id: gaugeChart7,
      gaugeChart8Id: gaugeChart8,
      gaugeChart9Id: gaugeChart9,
      gaugeChart10Id: gaugeChart10,
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