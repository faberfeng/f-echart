<template>
  <div :id="id" class="full-screen"></div>
</template>
<script setup>
import { init } from "echarts";
import { ref, onMounted, reactive, watch, defineProps, nextTick } from "vue";
import { message } from "ant-design-vue";
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
  paleChart12,
  paleChart13,
  paleChart14,
  paleChart15,
  paleChart16,
  paleChart17,
  paleChart18,
  paleChart19,
  paleChart20,
  paleChart21,
} from "@/charts/paleChart";
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "paleChart1",
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
  paleChart12Id: paleChart12,
  paleChart13Id: paleChart13,
  paleChart14Id: paleChart14,
  paleChart15Id: paleChart15,
  paleChart16Id: paleChart16,
  paleChart17Id: paleChart17,
  paleChart18Id: paleChart18,
  paleChart19Id: paleChart19,
  paleChart20Id: paleChart20,
  paleChart21Id: paleChart21,
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
  nextTick(() => {
    initChart();
  });
});
</script>
