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
    <div class="height-25" id="energyFirstPaleChart1Id"></div>
    <a-row class="my-py-3 bg-fff2 bdr-2 text-center">
      <a-col :span="12">当月电费</a-col>
      <a-col :span="12" class="ff-pm">83,831.34元</a-col>
    </a-row>

    <ChartTitle :type="4" :title="twoData.title" />
    <div class="height-20" id="energyFirstColumnChart7Id"></div>

    <a-row type="flex" align="middle" class="text-center">
      <template v-for="(item, index) in threeData.tabs" :key="index">
        <a-col
          :flex="1"
          class="my-py-2 bd-bottom cursor"
          :class="{ 'bdc-primary fc-primary': currTab == index }"
          @click="changeCurrTab(index)"
        >
          {{ item }}
        </a-col>
      </template>
    </a-row>
    <div v-show="currTab == 0">
      <a-row type="flex" justify="end" class="my-px-10 my-pt-10 fs-12">
        <template v-for="(item, index) in threeData.subTabs" :key="index">
          <div
            class="my-mr-10 my-px-5 bd-all bdr-2 cursor"
            :class="
              currSubTab == index ? 'bg-primary bdc-primary' : 'bg-fff2 fc-fff4'
            "
            @click="currSubTab = index"
          >
            {{ item }}
          </div>
        </template>
      </a-row>
      <div class="height-25" id="energyOneAreaChart2Id"></div>
    </div>
    <div
      v-show="currTab == 1"
      class="height-25"
      id="energyTwoAreaChart2Id"
    ></div>
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
import { nextTick, onMounted, ref } from "vue";
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
    function changeCurrTab(val) {
      if (currTab.value == val) return;
      currTab.value = val;
      nextTick(() => {
        energyOneAreaChart2Id.resize();
        energyTwoAreaChart2Id.resize();
      });
    }

    let energyFirstPaleChart1Id = null;
    let energyFirstColumnChart7Id = null;
    let energyOneAreaChart2Id = null;
    let energyTwoAreaChart2Id = null;
    function initData() {
      if (!energyFirstPaleChart1Id) {
        energyFirstPaleChart1Id = init(
          document.getElementById("energyFirstPaleChart1Id")
        );
      }
      energyFirstPaleChart1Id.setOption(paleChart1(props.oneData.chartData), true);
      energyFirstPaleChart1Id.resize();

      if (!energyFirstColumnChart7Id) {
        energyFirstColumnChart7Id = init(
          document.getElementById("energyFirstColumnChart7Id")
        );
      }
      energyFirstColumnChart7Id.setOption(
        columnChart7(props.twoData.chartData),
        true
      );
      energyFirstColumnChart7Id.resize();

      if (!energyOneAreaChart2Id) {
        energyOneAreaChart2Id = init(
          document.getElementById("energyOneAreaChart2Id")
        );
      }
      energyOneAreaChart2Id.setOption(
        areaChart2(props.threeData.chartData),
        true
      );
      energyOneAreaChart2Id.resize();

      if (!energyTwoAreaChart2Id) {
        energyTwoAreaChart2Id = init(
          document.getElementById("energyTwoAreaChart2Id")
        );
      }
      energyTwoAreaChart2Id.setOption(
        areaChart2(props.threeData.chartData),
        true
      );
      energyTwoAreaChart2Id.resize();
    }

    onMounted(() => {
      initData();
    });

    return {
      currTab,
      changeCurrTab,
      currSubTab,
    };
  },
};
</script>