import LineChart from "@/components/charts/LineChart.vue";
import CurveChart from "@/components/charts/CurveChart.vue";
import AreaChart from "@/components/charts/AreaChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import ColumnChart from "@/components/charts/ColumnChart.vue";
import PaleChart from "@/components/charts/PaleChart.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import GaugeChart from "@/components/charts/GaugeChart.vue";

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
