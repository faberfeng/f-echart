<template>
  <div class="bg-0006">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" align="middle" class="flex-other">
        <span
          v-for="(item, index) in oneData.btns"
          :key="index"
          class="my-mr-10 my-px-5 bd-all bdr-2 cursor"
          :class="currBtn == index ? 'bdc-primary bg-primary' : 'bg-fff2'"
          @click="changeBtn(index)"
        >
          {{ item }}
        </span>
      </a-row>
      <QualifiedIsNot :status="oneData.status" />
    </ChartTitle>
    <div class="my-mt-20 my-py-10 panel-bg">
      <div class="my-pt-10 text-center fs-12 fc-primary">
        {{ oneData.text }}
      </div>
      <div id="alarmColumnChart10Id" class="height-20"></div>
    </div>
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import QualifiedIsNot from "@/components/others/QualifiedIsNot";
import { columnChart10 } from "@/charts/columnChart";
import { onMounted, ref } from "vue";
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
    let currBtn = ref(0);
    function changeBtn(val) {
      if (currBtn.value == val) return;
      currBtn.value = val;
    }

    let { chartTwoData } = props;
    let alarmColumnChart10Id = null;
    function initData() {
      if (!alarmColumnChart10Id)
        alarmColumnChart10Id = init(
          document.getElementById("alarmColumnChart10Id")
        );
      alarmColumnChart10Id.setOption(columnChart10(chartTwoData), true);
      alarmColumnChart10Id.resize();
    }

    onMounted(() => {
      initData();
    });

    return {
      currBtn,
      changeBtn,
    };
  },
};
</script>