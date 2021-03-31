<template>
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <Second
      :chartOneData="secondObj.chartOneData"
      :chartTwoData="secondObj.chartTwoData"
      :threeData="secondObj.threeData"
    />
  </a-row>
</template>
<script>
import Second from "./Second";
export default {
  components: { Second },
  setup() {
    let secondObj = {
      chartOneData: {
        color: ["#10E7FF", "#FF704A", "#367CED", "#F9C34B"],
        xData: ["原住", "迁入", "租客", "访客"],
        sData: [{ data: [50, 50, 50, 50] }],
        total: 200,
      },
      chartTwoData: {
        color: [
          "#B6F6EB",
          "#88E7E0",
          "#5DDBD3",
          "#36CFC9",
          "#11C2C1",
          "#01989D",
        ],
        xData: ["19-25", "26-35", "36-45", "46-55", "19岁以下", "55岁以上"],
        sData: [
          {
            data: [300, 250, 200, 150, 100, 50],
          },
        ],
      },
      threeData: {
        data: [
          {
            name: "男",
            icon: "icon_nan",
            color: "#1F9FEC",
            value: 10,
            percent: 0.5,
          },
          {
            name: "女",
            icon: "icon_nv",
            color: "#CE4B6C",
            value: 10,
            percent: 0.5,
          },
        ],
      },
    };

    return {
      secondObj,
    };
  },
};
</script>