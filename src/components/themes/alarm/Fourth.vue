<template>
  <div class="bg-0006">
    <ChartTitle :title="titleData.title"></ChartTitle>
  </div>
</template>
<script>
import { ChartTitle } from "@/components/title/ChartTitle";
export default {
  components: {
    ChartTitle,
  },
  props: {
    oneData: Object,
    chartTwoData: Object,
  },
  setup() {},
};
</script>