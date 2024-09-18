<template>
  <!-- 能耗态势 -->
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <a-col :span="6">
      <First
        :oneData="firstObj.oneData"
        :twoData="firstObj.twoData"
        :threeData="firstObj.threeData"
      />
    </a-col>
    <a-col :span="6">
      <Second :oneData="secondObj.oneData" />
    </a-col>
    <a-col :span="6">
      <Seventh :oneData="serventhObj.oneData" />
    </a-col>
    <a-col :span="6">
      <Eighth :oneData="eighthObj.oneData" />
    </a-col>
  </a-row>
</template>
<script>
import First from "./first";
import Second from "./second";
import Seventh from "./seventh";
import Eighth from "./eighth";
export default {
  name: "Energy",
  components: { First, Second, Seventh, Eighth },
  setup() {
    let firstObj = {
      oneData: {
        title: "能源消耗情况",
        decorateArr: [
          { name: "接入园区", value: "99个", color: "#3f91e4" },
          { name: "接入比例", value: "90.6%", color: "#3f91e4" },
        ],
        chartData: {
          xData: ["峰时", "谷时", "平时", "其他"],
          sData: [{ data: [36249, 33182, 83831, 31187] }],
        },
      },
      twoData: {
        title: "不同行业客户耗电占比",
        chartData: {},
      },
      threeData: {
        tabs: ["不同行业客户分时段耗电", "不同行业客户月度耗电"],
        subTabs: ["当日", "当月", "当季", "当年"],
        chartData: {
          unit: "耗电:kwh",
        },
      },
    };
    let secondObj = {
      oneData: {
        title: "当前能源消耗客户TOP5",
        thead: [
          { name: "排名", field: "rank", span: 4 },
          { name: "客户", field: "name", span: 12 },
          {
            name: "耗电(单位：kwh)",
            field: "electric",
            span: 8,
            class: "fc-primary my-pr-10 text-right",
          },
        ],
        tbody: [
          { rank: 1, name: "金科中心", electric: "94.86" },
          { rank: 2, name: "金科中心", electric: "92.19" },
          { rank: 3, name: "金科中心", electric: "86.31" },
          { rank: 4, name: "金科中心", electric: "81.75" },
          { rank: 5, name: "金科中心", electric: "80.91" },
        ],
      },
    };
    let serventhObj = {
      oneData: {
        title: "能源消耗情况",
        chartData: {
          color: ["#E9C46A", "#299D8F", "#E76F51", "#F4A261"],
          xData: ["峰时", "平时", "谷时", "其他"],
          sData: [{ data: [40, 25, 20, 15] }],
          showLabel: false,
          legendType: 4,
        },
        decorateArr: [
          { name: "接入园区", value: "99", unit: "个" },
          { name: "接入比例", value: "90.6%" },
          { name: "耗电功率", value: "22.4", unit: "kw" },
        ],
      },
    };
    let eighthObj = {
      oneData: {
        title: "已接入园区情况",
        decorateArr: [
          { name: "接入园区", value: "99个", color: "#3f91e4" },
          { name: "接入比例", value: "90.6%", color: "#3f91e4" },
        ],
        chartData1: {
          xData: ["当前耗电功率"],
          sData: [{ data: [22.4] }],
          unit: "kw",
        },
        chartData2: {
          color: ["#6480F6", "#67B4FD"],
          xData: ["当日耗电功率峰值"],
          sData: [{ data: [22.4] }],
          unit: "kw",
        },
        chartData3: {
          xData: ["峰时", "谷时", "平时", "其他"],
          sData: [{ data: [36249, 33182, 83831, 31187] }],
        },
      },
    };
    return {
      firstObj,
      secondObj,
      serventhObj,
      eighthObj,
    };
  },
};
</script>
