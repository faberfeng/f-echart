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
  columnChart1,
  columnChart2,
  columnChart3,
  columnChart4,
  columnChart5,
  columnChart6,
  columnChart7,
  columnChart8,
  columnChart9,
  columnChart10,
} from "@/charts/columnChart";
export default {
  setup() {
    let charts = reactive({
      columnChart1Id: columnChart1,
      columnChart2Id: columnChart2,
      columnChart3Id: columnChart3,
      columnChart4Id: columnChart4,
      columnChart5Id: columnChart5,
      columnChart6Id: columnChart6,
      columnChart7Id: columnChart7,
      columnChart8Id: columnChart8,
      columnChart9Id: columnChart9,
      columnChart10Id: columnChart10,
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