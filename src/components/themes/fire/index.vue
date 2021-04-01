<template>
  <!-- 消防态势 -->
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <a-col :span="6">
      <Second
        :oneData="secondObj.oneData"
        :chartTwoData="secondObj.chartTwoData"
      />
    </a-col>
    <a-col :span="6">
      <Third
        :oneData="thirdObj.oneData"
        :twoData="thirdObj.twoData"
        :threeData="thirdObj.threeData"
        :fourData="thirdObj.fourData"
      />
    </a-col>
    <a-col :span="6">
      <Fourth :oneData="fourthObj.oneData" />
    </a-col>
  </a-row>
</template>
<script>
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
export default {
  components: { Second, Third, Fourth },
  setup() {
    let secondObj = {
      oneData: {
        title: "消防安全情况",
        decorateArr: [
          { name: "接入园区/达标园区", value: "99个/99个" },
          { name: "接入比例/达标比例", value: "90.6%/100%" },
        ],
      },
      chartTwoData: {},
    };
    let thirdObj = {
      oneData: {
        title: "消防安全情况",
        decorateArr: [
          { name: "接入园区", value: "99", unit: "个", color: "fc-primary" },
          { name: "接入比例", value: "90.6%", color: "fc-primary" },
          { name: "达标园区", value: "99", unit: "个", color: "fc-primary" },
          { name: "达标比例", value: "100%", color: "fc-second" },
          { name: "不达标园区", value: "0", unit: "个", color: "fc-warn" },
        ],
      },
      twoData: {
        title: "消防运维长效性",
        chartData: { title: "" },
      },
      threeData: {
        title: "园区合格率排行",
        thead: [
          { name: "排名", field: "rank", span: 4 },
          { name: "项目名称", field: "name", span: 14 },
          { name: "合格率", field: "percent", span: 6 },
        ],
        tbody: [
          { rank: 1, name: "金科中心", percent: "94.86%" },
          { rank: 2, name: "金科中心", percent: "92.19%" },
          { rank: 3, name: "金科中心", percent: "86.31%" },
          { rank: 4, name: "金科中心", percent: "81.75%" },
          { rank: 5, name: "金科中心", percent: "80.91%" },
        ],
      },
      fourData: {
        title: "园区消防报警排行",
        thead: [
          { name: "排名", field: "rank", span: 4 },
          { name: "项目名称", field: "name", span: 12 },
          { name: "待处理报警数", field: "alarmNum", span: 8 },
        ],
        tbody: [
          { rank: 1, name: "金科中心", alarmNum: "94" },
          { rank: 2, name: "金科中心", alarmNum: "92" },
          { rank: 3, name: "金科中心", alarmNum: "86" },
          { rank: 4, name: "金科中心", alarmNum: "81" },
          { rank: 5, name: "金科中心", alarmNum: "80" },
        ],
      },
    };
    let fourthObj = {
      oneData: {
        title: "电子督查单",
        status: 1,
        text: "电子督查单响应度：要求达到80%，实际99.99%",
        chartData: {},
      },
    };

    return {
      secondObj,
      thirdObj,
      fourthObj,
    };
  },
};
</script>