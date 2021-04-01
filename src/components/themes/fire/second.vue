<template>
  <div class="bg-0006">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <CaretDownOutlined class="fs-20 fc-primary" v-show="true" />
        <CaretUpOutlined class="fs-20 fc-primary" v-show="false" />
      </a-row>
    </ChartTitle>
    <a-row type="flex" justify="space-around" class="my-py-10 fc-fff8">
      <a-col
        :span="10"
        v-for="(item, index) in oneData.decorateArr"
        :key="index"
      >
        <DecorateBox :type="1" :data="item" />
      </a-col>
    </a-row>
    <div id="fireBarChart4Id" class="height-20"></div>
  </div>
</template>
<script>
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons-vue";

import ChartTitle from "@/components/others/ChartTitle";
import DecorateBox from "@/components/others/DecorateBox";
import QualifiedIsNot from "@/components/others/QualifiedIsNot";

import { onMounted } from "vue";
import { init } from "echarts";
import { barChart4 } from "@/charts/barChart";

export default {
  components: {
    CaretDownOutlined,
    CaretUpOutlined,

    ChartTitle,
    DecorateBox,
    QualifiedIsNot,
  },
  props: {
    oneData: Object,
    chartTwoData: Object,
  },
  setup(props) {
    let { chartTwoData } = props;
    let fireBarChart4Id = null;
    function initData() {
      if (!fireBarChart4Id)
        fireBarChart4Id = init(document.getElementById("fireBarChart4Id"));
      fireBarChart4Id.setOption(barChart4(chartTwoData), true);
      fireBarChart4Id.resize();
    }

    onMounted(() => {
      initData();
    });
  },
};
</script>