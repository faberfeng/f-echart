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
  paleChart1,
  paleChart2,
  paleChart3,
  paleChart4,
  paleChart5,
  paleChart6,
  paleChart7,
  paleChart8,
  paleChart9,
  paleChart10,
  paleChart11,
  paleChart13,
} from "@/charts/paleChart";
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
      paleChart8Id: paleChart8,
      paleChart9Id: paleChart9,
      paleChart10Id: paleChart10,
      paleChart11Id: paleChart11,
      paleChart13Id: paleChart13,
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