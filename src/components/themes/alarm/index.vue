<template>
  <!-- 报警管理 -->
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <a-col :span="6">
      <Fourth
        :oneData="fourthObj.oneData"
        :chartTwoData="fourthObj.chartTwoData"
      />
    </a-col>
    <a-col :span="6">
      <Fifth
        :oneData="fifthObj.oneData"
        :chartTwoData="fifthObj.chartTwoData"
      />
    </a-col>
    <a-col :span="6">
      <Ninth
        :oneData="ninthObj.oneData"
        :chartTwoData="ninthObj.chartTwoData"
      />
    </a-col>
  </a-row>
</template>
<script>
import Fourth from "./fourth";
import Fifth from "./fifth";
import Ninth from "./ninth";
export default {
  name: "Alarm",
  components: {
    Fourth,
    Fifth,
    Ninth,
  },
  setup() {
    let fourthObj = {
      oneData: {
        title: "报警发生趋势",
        btns: ["最近7天", "最近六个月"],
      },
      chartTwoData: {},
    };
    let fifthObj = {
      oneData: {
        title: "报警分布",
        btns: ["待处理报警", "累计报警"],
        status: 1,
        text: "设备离线率：要求不超过5%，实际6%",
      },
      chartTwoData: {},
    };
    let ninthObj = {
      oneData: {
        title: "报警分布",
        status: 0,
        text: "电子督查单响应度：要求达到80%，实际99.99%",
      },
      chartTwoData: {
        color: ["#D13F3F", "#0E7CE2", "#FF8352"],
        xData: ["生成数", "响应数", "待处理数"],
        sData: [
          {
            data: [15253, 14446, 10],
          },
        ],
        title: "响应度\n99.99%",
      },
    };
    return {
      fourthObj,
      fifthObj,
      ninthObj,
    };
  },
};
</script>
