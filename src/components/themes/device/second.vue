<template>
  <div class="bg-0006 my-pa-10 relative">
    <ChartTitle :type="2" :title="title" />
    <SplitLine :type="1" />
    <BoxBottom :type="1" />
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import SplitLine from "@/components/others/SplitLine";
import BoxBottom from "@/components/others/BoxBottom";
export default {
  components: { ChartTitle, SplitLine, BoxBottom },
  props: {
    title: String,
    oneArr: Array,
  },
  setup() {},
};
</script>