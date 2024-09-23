<template>
  <a-tabs
    v-model="currTheme"
    tab-position="left"
    class="my-py-20 my-pr-20 fc-fff"
  >
    <a-tab-pane :key="1" tab="图表">
      <a-row type="flex" align="middle" class="my-pt-20 fs-16">
        <span
          v-for="(item, index) in chartBtns"
          :key="index"
          class="my-mr-10 my-px-5 my-py-3 bd-all bdr-2 cursor"
          :class="{ 'bdc-primary fc-primary': currBtn == index }"
          @click="currBtn = index"
        >
          {{ item }}
        </span>
      </a-row>
      <LineChart v-show="currBtn == 0" />
      <CurveChart v-show="currBtn == 1" />
      <AreaChart v-show="currBtn == 2" />
      <BarChart v-show="currBtn == 3" />
      <ColumnChart v-show="currBtn == 4" />
      <PaleChart v-show="currBtn == 5" />
      <RadarChart v-show="currBtn == 6" />
      <GaugeChart v-show="currBtn == 7" />
    </a-tab-pane>
    <a-tab-pane :key="2" tab="主题">
      <a-row type="flex" align="middle" class="my-pt-20 fs-16">
        <span
          v-for="(item, index) in themesBtns"
          :key="index"
          class="my-mr-10 my-px-5 my-py-3 bd-all bdr-2 cursor"
          :class="{ 'bdc-primary fc-primary': currTheme == index }"
          @click="currTheme = index"
        >
          {{ item }}
        </span>
      </a-row>
      <Personnel v-if="currTheme == 0" />
      <Alarm v-else-if="currTheme == 2" />
      <Fire v-else-if="currTheme == 3" />
      <Energy v-else-if="currTheme == 5" />
      <Device v-else-if="currTheme == 6" />
      <Html2canvas v-else-if="currTheme == 12" />
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue";
import CurveChart from "@/components/charts/CurveChart.vue";
import AreaChart from "@/components/charts/AreaChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import ColumnChart from "@/components/charts/ColumnChart.vue";
import PaleChart from "@/components/charts/PaleChart.vue";
// import PaleChart from "@/components/packages/charts/PaleChart.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import GaugeChart from "@/components/charts/GaugeChart.vue";

import Personnel from "@/components/themes/personnel/index.vue";
import Alarm from "@/components/themes/alarm/index.vue";
import Fire from "@/components/themes/fire/index.vue";
import Energy from "@/components/themes/energy/index.vue";
import Device from "@/components/themes/device/index.vue";

import Html2canvas from "@/components/themes/html2canvas/index.vue";

import { reactive, ref } from "vue";
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

    Personnel,
    Alarm,
    Fire,
    Energy,
    Device,
    Html2canvas,
  },
  setup() {
    let currBtn = ref(5);
    let chartBtns = reactive([
      "折线图",
      "曲线图",
      "面积图",
      "条状图",
      "柱状图",
      "环状图",
      "雷达图",
      "仪表盘",
    ]);

    let currTheme = ref(0);
    let themesBtns = reactive([
      "人员态势",
      "安防态势",
      "报警管理",
      "消防态势",
      "环境态势",
      "能耗态势",
      "设备态势",
      "楼宇/园区",
      "资产态势",
      "车辆态势",
      "办公态势",
      "监控态势",
      "html2canvas",
    ]);
    return {
      currBtn,
      chartBtns,

      currTheme,
      themesBtns,
    };
  },
};
</script>
