<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <CaretDownOutlined class="fs-20 fc-primary" v-show="true" />
        <CaretUpOutlined class="fs-20 fc-primary" v-show="false" />
      </a-row>
    </ChartTitle>
    <a-row type="flex" justify="space-around" class="my-pt-10 fc-fff8">
      <template v-for="(item, index) in oneData.decorateArr" :key="index">
        <a-col :span="10">
          <DecorateBox :type="1" :data="item" />
        </a-col>
      </template>
    </a-row>
    <div class="height-25" id="energyPaleChart1Id"></div>
    <a-row class="my-py-3 bg-fff2 bdr-2 text-center">
      <a-col :span="12">当月电费</a-col>
      <a-col :span="12" class="ff-pm">83,831.34元</a-col>
    </a-row>
    <ChartTitle :type="3" :title="twoData.title" />
    <div class="height-20" id="energyColumnChart7Id"></div>
    <a-row type="flex" align="middle" class="text-center">
      <template v-for="(item, index) in threeData.tabs" :key="index">
        <a-col
          :flex="1"
          class="my-py-2 bd-bottom cursor"
          :class="{ 'bdc-primary fc-primary': currTab == index }"
          @click="currTab = index"
        >
          {{ item }}
        </a-col>
      </template>
    </a-row>
    <div class="height-25" id="energyAreaChart2Id"></div>
  </div>
</template>
<script>
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons-vue";

import ChartTitle from "@/components/others/ChartTitle";
import DecorateBox from "@/components/others/DecorateBox";

import { paleChart1 } from "@/charts/paleChart";
import { columnChart7 } from "@/charts/columnChart";
import { areaChart2 } from "@/charts/areaChart";

import { init } from "echarts";
import { onMounted, ref } from "vue";
export default {
  components: {
    CaretDownOutlined,
    CaretUpOutlined,

    ChartTitle,
    DecorateBox,
  },
  props: {
    oneData: Object,
    twoData: Object,
    threeData: Object,
  },
  setup(props) {
    let currTab = ref(0);
    let currSubTab = ref(0);

    let energyPaleChart1Id = null;
    let energyColumnChart7Id = null;
    let energyAreaChart2Id = null;
    function initData() {
      if (!energyPaleChart1Id) {
        energyPaleChart1Id = init(
          document.getElementById("energyPaleChart1Id")
        );
      }
      energyPaleChart1Id.setOption(paleChart1(props.oneData.chartData), true);
      energyPaleChart1Id.resize();

      if (!energyColumnChart7Id) {
        energyColumnChart7Id = init(
          document.getElementById("energyColumnChart7Id")
        );
      }
      energyColumnChart7Id.setOption(
        columnChart7(props.twoData.chartData),
        true
      );
      energyColumnChart7Id.resize();

      if (!energyAreaChart2Id) {
        energyAreaChart2Id = init(
          document.getElementById("energyAreaChart2Id")
        );
      }
      energyAreaChart2Id.setOption(areaChart2(props.threeData.chartData), true);
      energyAreaChart2Id.resize();
    }

    onMounted(() => {
      initData();
    });

    return {
      currTab,
      currSubTab,
    };
  },
};
</script>