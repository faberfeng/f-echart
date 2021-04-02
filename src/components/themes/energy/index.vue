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
  </a-row>
</template>
<script>
import First from "./first";
import Second from "./second";
export default {
  components: { First, Second },
  setup() {
    let firstObj = {
      oneData: {
        title: "能源消耗情况",
        decorateArr: [
          { name: "接入园区", value: "99个", class: "ff-pm fc-primary" },
          { name: "接入比例", value: "90.6%", class: "ff-pm fc-primary" },
        ],
        chartData: {
          xData: ["峰时", "谷时", "平时", "其他"],
          sData: [{ data: [36249, 33182, 83831, 31187] }],
          width: 140,
        },
      },
      twoData: {
        title: "不同行业客户耗电占比",
        chartData: {},
      },
      threeData: {
        tabs: ["不同行业客户分时段耗电", "不同行业客户月度耗电"],
        chartData: {},
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
    return {
      firstObj,
      secondObj,
    };
  },
};
</script>