<template>
  <div :id="id" class="full-screen"></div>
</template>
<script setup>
import { init } from "echarts";
import { ref, onMounted, reactive, watch, defineProps } from "vue";
import { message } from "ant-design-vue";
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
  gaugeChart11,
  gaugeChart12,
} from "@/charts/gaugeChart";
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "gaugeChart1",
  },
  data: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  isMock: {
    type: Boolean,
    required: false,
    default: true,
  },
});
let chartsList = reactive({
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
  gaugeChart11Id: gaugeChart11,
  gaugeChart12Id: gaugeChart12,
});
let chartId = null;
let id = ref(props.id);
//获取图表
const getChart = (id) => {
  return init(document.getElementById(id));
};
const initChart = () => {
  chartId = getChart(props.id);
  console.log(props.isMock, props.id, chartId, "chartId");
  if (props.isMock) {
    setChart({});
  }
};
const setChart = (data) => {
  if (chartsList[`${props.id}Id`] === undefined) {
    console.log("chartsList[`${props.id}Id`] is undefined");
    message.error(`${props.id}类型暂不支持,优化扩充中...`);
    return;
  }
  chartId.setOption(chartsList[`${props.id}Id`](data), true);
};
watch(
  () => props.data,
  (newData) => {
    setChart(newData);
  },
  { deep: true }
);
onMounted(() => {
  initChart();
});
</script>
