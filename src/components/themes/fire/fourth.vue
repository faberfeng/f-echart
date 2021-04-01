<template>
  <div class="bg-0006">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <QualifiedIsNot :status="oneData.status" />
      </a-row>
    </ChartTitle>
    <div class="my-mt-10 my-pt-20 panel-bg">
      <div class="my-pt-10 my-pb-10 fc-primary text-center">
        {{ oneData.text }}
      </div>
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="10" class="height-25" id="fireGaugeChart4Id"></a-col>
        <a-col :span="8">
          <div class="my-pb-15">
            <DecorateBox
              :type="1"
              :data="{ name: '响应数', value: '14446', color: 'fc-second' }"
            />
          </div>
          <div class="my-pb-15">
            <DecorateBox
              :type="1"
              :data="{ name: '待处理数', value: '10', color: 'fc-error' }"
            />
          </div>
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