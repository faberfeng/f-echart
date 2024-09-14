<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <CaretDownOutlined class="fs-20 fc-primary" v-show="true" />
        <CaretUpOutlined class="fs-20 fc-primary" v-show="false" />
      </a-row>
    </ChartTitle>
    <a-row type="flex">
      <a-col
        :span="12"
        class="height-20"
        id="energyEighthOneGaugeChart3Id"
      ></a-col>
      <a-col
        :span="12"
        class="height-20"
        id="energyEighthTwoGaugeChart3Id"
      ></a-col>
    </a-row>
    <a-row type="flex" justify="space-around" class="my-pt-10 fc-fff8">
      <template v-for="(item, index) in oneData.decorateArr" :key="index">
        <a-col :span="10">
          <DecorateBox :type="1" :data="item" />
        </a-col>
      </template>
    </a-row>
    <div class="height-25" id="energyEighthPaleChart1Id"></div>
    <a-row class="my-mb-10 my-py-3 bg-fff2 bdr-2 text-center">
      <a-col :span="12">当月电费</a-col>
      <a-col :span="12" class="ff-pm">83,831.34元</a-col>
    </a-row>
    <a-row class="my-py-3 bg-fff2 bdr-2 text-center">
      <a-col :span="12">平均</a-col>
      <a-col :span="12" class="ff-pm">0.62元/kwh</a-col>
    </a-row>
  </div>
</template>
<script>
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons-vue";

import ChartTitle from "@/components/others/ChartTitle";
import DecorateBox from "@/components/others/DecorateBox";

import { paleChart1 } from "@/charts/paleChart";
import { gaugeChart3 } from "@/charts/gaugeChart";
import { onMounted } from "vue";
import { init } from "echarts";
export default {
  components: {
    CaretDownOutlined,
    CaretUpOutlined,

    ChartTitle,
    DecorateBox,
  },
  props: {
    oneData: Object,
  },
  setup(props) {
    let energyEighthPaleChart1Id = null;
    let energyEighthOneGaugeChart3Id = null;
    let energyEighthTwoGaugeChart3Id = null;
    function initData() {
      if (!energyEighthOneGaugeChart3Id) {
        energyEighthOneGaugeChart3Id = init(
          document.getElementById("energyEighthOneGaugeChart3Id")
        );
      }
      energyEighthOneGaugeChart3Id.setOption(
        gaugeChart3(props.oneData.chartData1),
        true
      );
      energyEighthOneGaugeChart3Id.resize();

      if (!energyEighthTwoGaugeChart3Id) {
        energyEighthTwoGaugeChart3Id = init(
          document.getElementById("energyEighthTwoGaugeChart3Id")
        );
      }
      energyEighthTwoGaugeChart3Id.setOption(
        gaugeChart3(props.oneData.chartData2),
        true
      );
      energyEighthTwoGaugeChart3Id.resize();

      if (!energyEighthPaleChart1Id) {
        energyEighthPaleChart1Id = init(
          document.getElementById("energyEighthPaleChart1Id")
        );
      }
      energyEighthPaleChart1Id.setOption(
        paleChart1(props.oneData.chartData3),
        true
      );
      energyEighthPaleChart1Id.resize();
    }

    onMounted(() => {
      initData();
    });
  },
};
</script>