<template>
  <!-- 人员态势 -->
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <a-col :span="6">
      <Ninth
        :chartOneData="ninthObj.chartOneData"
        :chartTwoData="ninthObj.chartTwoData"
        :threeData="ninthObj.threeData"
      />
    </a-col>
  </a-row>
</template>
<script>
import Ninth from "./ninth";
export default {
  components: { Ninth },
  setup() {
    let ninthObj = {
      chartOneData: {},
      chartTwoData: {},
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
      ninthObj,
    };
  },
};
</script>