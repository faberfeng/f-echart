<template>
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <Fourth
      :oneData="fourthObj.oneData"
      :chartTwoData="fourthObj.chartTwoData"
    />
  </a-row>
</template>
<script>
import Fourth from "./Fourth";
export default {
  components: {
    Fourth,
  },
  setup() {
    let fourthObj = {
      oneData: {
        title: "报警发生趋势",
        btns: ["最近7天", "最近六个月"],
      },
      chartTwoData: {},
    };
    return {
      fourthObj,
    };
  },
};
</script>