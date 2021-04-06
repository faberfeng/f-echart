<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <CaretDownOutlined class="fs-20 fc-primary" v-show="true" />
        <CaretUpOutlined class="fs-20 fc-primary" v-show="false" />
      </a-row>
    </ChartTitle>
    <a-row type="flex" justify="space-around" class="my-py-10 fc-fff6 fs-12">
      <a-col v-for="(item, index) in oneData.decorateArr" :key="index">
        <DecorateBox :type="3" :data="item" />
      </a-col>
    </a-row>
    <ChartTitle :title="twoData.title" :type="4" />
    <div id="fireThirdBarChart4Id" class="height-20"></div>
    <ChartTitle :title="threeData.title" :type="4" />
    <DefTable :type="1" :thead="threeData.thead" :tbody="threeData.tbody" />
    <ChartTitle :title="fourData.title" :type="4" />
    <DefTable :type="1" :thead="fourData.thead" :tbody="fourData.tbody" />
  </div>
</template>
<script>
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons-vue";

import ChartTitle from "@/components/others/ChartTitle";
import DecorateBox from "@/components/others/DecorateBox";
import DefTable from "@/components/others/DefTable";

import { onMounted } from "vue";
import { init } from "echarts";
import { barChart4 } from "@/charts/barChart";

export default {
  components: {
    CaretDownOutlined,
    CaretUpOutlined,

    ChartTitle,
    DecorateBox,
    DefTable,
  },
  props: {
    oneData: Object,
    twoData: Object,
    threeData: Object,
    fourData: Object,
  },
  setup(props) {
    let { twoData } = props;
    let fireThirdBarChart4Id = null;
    function initData() {
      if (!fireThirdBarChart4Id)
        fireThirdBarChart4Id = init(
          document.getElementById("fireThirdBarChart4Id")
        );
      fireThirdBarChart4Id.setOption(barChart4(twoData.chartData), true);
      fireThirdBarChart4Id.resize();
    }

    onMounted(() => {
      initData();
    });
  },
};
</script>