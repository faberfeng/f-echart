import LineChart from "@/components/packages/charts/LineChart.vue";
import CurveChart from "@/components/packages/charts/CurveChart.vue";
import AreaChart from "@/components/packages/charts/AreaChart.vue";
import BarChart from "@/components/packages/charts/BarChart.vue";
import ColumnChart from "@/components/packages/charts/ColumnChart.vue";
import PaleChart from "@/components/packages/charts/PaleChart.vue";
import RadarChart from "@/components/packages/charts/RadarChart.vue";
import GaugeChart from "@/components/packages/charts/GaugeChart.vue";

import Personnel from "@/components/themes/personnel/index.vue";
import Alarm from "@/components/themes/alarm/index.vue";
import Fire from "@/components/themes/fire/index.vue";
import Energy from "@/components/themes/energy/index.vue";
import Device from "@/components/themes/device/index.vue";
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
