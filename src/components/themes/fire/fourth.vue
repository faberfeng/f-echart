<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <QualifiedIsNot :status="oneData.status" />
      </a-row>
    </ChartTitle>
    <div class="my-mt-10 panel-bg">
      <div class="my-pt-15 my-pb-10 fc-primary text-center">
        {{ oneData.text }}
      </div>
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="10">
          <div class="height-17" id="fireGaugeChart4Id"></div>
          <div class="text-center my-pb-15">生成数</div>
        </a-col>
        <a-col :span="8">
          <template v-for="(item, index) in oneData.decorateArr" :key="index">
            <div class="my-pb-15">
              <DecorateBox :type="1" :data="item" />
            </div>
          </template>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import QualifiedIsNot from "@/components/others/QualifiedIsNot";
import DecorateBox from "@/components/others/DecorateBox";

import { gaugeChart4 } from "@/charts/gaugeChart";
import { onMounted } from "vue";
import { init } from "echarts";

export default {
  components: {
    ChartTitle,
    QualifiedIsNot,
    DecorateBox,
  },
  props: {
    oneData: Object,
  },
  setup(props) {
    let { chartData } = props.oneData;
    let fireGaugeChart4Id = null;
    function initData() {
      if (!fireGaugeChart4Id)
        fireGaugeChart4Id = init(document.getElementById("fireGaugeChart4Id"));
      fireGaugeChart4Id.setOption(gaugeChart4(chartData), true);
      fireGaugeChart4Id.resize();
    }

    onMounted(() => {
      initData();
    });
  },
};
</script>