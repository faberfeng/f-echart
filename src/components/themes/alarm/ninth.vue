<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <QualifiedIsNot :status="oneData.status" />
      </a-row>
    </ChartTitle>
    <div class="my-mt-20 my-py-10 panel-bg">
      <div class="my-pt-10 text-center fs-12 fc-primary">
        {{ oneData.text }}
      </div>
      <div id="alarmPaleChart13Id" class="height-20"></div>
    </div>
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import QualifiedIsNot from "@/components/others/QualifiedIsNot";
import { paleChart13 } from "@/charts/paleChart";
import { onMounted } from "vue";
import { init } from "echarts";
export default {
  components: {
    ChartTitle,
    QualifiedIsNot,
  },
  props: {
    oneData: Object,
    chartTwoData: Object,
  },
  setup(props) {
    let { chartTwoData } = props;
    let alarmPaleChart13Id = null;
    function initData() {
      if (!alarmPaleChart13Id)
        alarmPaleChart13Id = init(
          document.getElementById("alarmPaleChart13Id")
        );
      alarmPaleChart13Id.setOption(paleChart13(chartTwoData), true);
      alarmPaleChart13Id.resize();
    }

    onMounted(() => {
      initData();
    });
  },
};
</script>