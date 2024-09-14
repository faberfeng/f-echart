<template>
  <div class="bg-0006 my-pa-10">
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
    </ChartTitle>
    <div id="alarmCurveChart7Id" class="height-30"></div>
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import { curveChart7 } from "@/charts/curveChart";
import { onMounted, ref } from "vue";
import { init } from "echarts";
export default {
  components: {
    ChartTitle,
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
    let alarmCurveChart7Id = null;
    function initData() {
      if (!alarmCurveChart7Id)
        alarmCurveChart7Id = init(
          document.getElementById("alarmCurveChart7Id")
        );
      alarmCurveChart7Id.setOption(curveChart7({ chartTwoData }), true);
      alarmCurveChart7Id.resize();
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
