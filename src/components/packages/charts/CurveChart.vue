<template>
  <div :id="id" class="full-screen"></div>
</template>
<script setup>
import { init } from "echarts";
import { ref, onMounted, reactive, watch, defineProps } from "vue";
import { message } from "ant-design-vue";
import {
  curveChart1,
  curveChart2,
  curveChart3,
  curveChart4,
  curveChart5,
  curveChart6,
} from "@/charts/curveChart";
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "curveChart1",
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
  curveChart1Id: curveChart1,
  curveChart2Id: curveChart2,
  curveChart3Id: curveChart3,
  curveChart4Id: curveChart4,
  curveChart5Id: curveChart5,
  curveChart6Id: curveChart6,
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
