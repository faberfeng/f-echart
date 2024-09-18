<template>
  <!-- 设备态势 -->
  <a-row type="flex" justify="space-around" class="wrap my-pt-20">
    <a-col :span="6">
      <First
        :title="firstObj.title"
        :oneArr="firstObj.oneArr"
        :twoArr="firstObj.twoArr"
      />
    </a-col>
    <a-col :span="6">
      <Second :title="secondObj.title" :oneArr="secondObj.oneArr" />
    </a-col>
  </a-row>
</template>
<script>
import First from "./first.vue";
import Second from "./second.vue";
export default {
  name: "Device",
  components: { First, Second },
  setup() {
    let firstObj = {
      title: "设备态势",
      oneArr: [
        { name: "安检设备总数", value: 2, unit: "处", color: "#78CAFF" },
        { name: "设备在线总数", value: 16, unit: "处", color: "#73E6BC" },
        { name: "设备离线总数", value: 5, unit: "处", color: "#F78456" },
      ],
      twoArr: [
        { name: "摄像机", onLine: 10, offLine: 2, icon: "camera" },
        { name: "探测器", onLine: 10, offLine: 2, icon: "camera" },
        { name: "门禁", onLine: 10, offLine: 2, icon: "camera" },
        { name: "紧急按钮", onLine: 10, offLine: 2, icon: "camera" },
        { name: "电梯", onLine: 10, offLine: 2, icon: "camera" },
        { name: "机器人", onLine: 10, offLine: 2, icon: "camera" },
      ],
    };

    let secondObj = {
      title: "办公设备",
      oneArr: [
        { name: "打印机", value: 1, unit: "个" },
        { name: "文具柜", value: 1, unit: "个" },
        { name: "电话亭", value: 10, unit: "个" },
        { name: "共享书架", value: 3, unit: "个" },
      ],
    };
    return {
      firstObj,
      secondObj,
    };
  },
};
</script>
