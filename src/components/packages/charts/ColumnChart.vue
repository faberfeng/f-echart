<template>
  <div :id="id" class="full-screen"></div>
</template>
<script setup>
import { init } from "echarts";
import { ref, onMounted, reactive, watch, defineProps } from "vue";
import { message } from "ant-design-vue";
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
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "columnChart1",
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
