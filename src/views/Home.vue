<template>
  <div id="Home" class="my-pa-10 fc-fff">
    <div class="my-py-10 ff-fz fs-18">图表展示：</div>
    <div class="row align-middle fs-16">
      <span
        v-for="(item, index) in btns"
        :key="index"
        class="my-mr-10 my-px-5 my-py-3 bd-all bdr-2 cursor"
        :class="{ 'bdc-primary fc-primary': currBtn == index }"
        @click="currBtn = index"
      >
        {{ item }}
      </span>
    </div>
    <LineChart v-show="currBtn == 0" />
    <CurveChart v-show="currBtn == 1" />
    <AreaChart v-show="currBtn == 2" />
    <BarChart v-show="currBtn == 3" />
    <ColumnChart v-show="currBtn == 4" />
    <PaleChart v-show="currBtn == 5" />
    <RadarChart v-show="currBtn == 6" />
    <GaugeChart v-show="currBtn == 7" />
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";
import CurveChart from "@/components/CurveChart";
import AreaChart from "@/components/AreaChart";
import BarChart from "@/components/BarChart";
import ColumnChart from "@/components/ColumnChart";
import PaleChart from "@/components/PaleChart";
import RadarChart from "@/components/RadarChart";
import GaugeChart from "@/components/GaugeChart";

import { ref } from "vue";
export default {
  name: "Home",
  components: {
    LineChart,
    CurveChart,
    AreaChart,
    BarChart,
    ColumnChart,
    PaleChart,
    RadarChart,
    GaugeChart,
  },
  setup() {
    let currBtn = ref(0);
    let btns = ref([
      "折线图",
      "曲线图",
      "面积图",
      "条状图",
      "柱状图",
      "环状图",
      "雷达图",
      "仪表盘",
    ]);
    return {
      currBtn,
      btns,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-box {
  width: 40%;
  max-height: 200px;
}
</style>
