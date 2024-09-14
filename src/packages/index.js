import LineChart from "@/packages/charts/LineChart.vue";
import CurveChart from "@/packages/charts/CurveChart.vue";
import AreaChart from "@/packages/charts/AreaChart.vue";
import BarChart from "@/packages/charts/BarChart.vue";
import ColumnChart from "@/packages/charts/ColumnChart.vue";
import PaleChart from "@/packages/charts/PaleChart.vue";
import RadarChart from "@/packages/charts/RadarChart.vue";
import GaugeChart from "@/packages/charts/GaugeChart.vue";

import Personnel from "@/packages/themes/personnel/index.vue";
import Alarm from "@/packages/themes/alarm/index.vue";
import Fire from "@/packages/themes/fire/index.vue";
import Energy from "@/packages/themes/energy/index.vue";
import Device from "@/packages/themes/device/index.vue";
const components = [
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
];
// 定义install方法，接收Vue作为参数。如果使用use注册插件，则所有的组件都将被注册
export const Fechart = {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
