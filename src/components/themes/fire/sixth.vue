<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1" />
    <a-row type="flex" justify="space-between" class="my-py-10 fc-fff6 fs-12">
      <a-col v-for="(item, index) in oneData.decorateArr" :key="index">
        <DecorateBox :type="2" :data="item" />
      </a-col>
    </a-row>
    <a-divider />
    <a-row type="flex" align="middle" class="my-py-10 text-center">
      <template v-for="(item, index) in twoData.tabs" :key="index">
        <a-col
          :flex="1"
          class="my-py-5 bd-bottom bdw-2 cursor"
          :class="`${index == currTab ? 'bdc-primary fc-primary' : 'bdc-none'}`"
          @click="currTab = index"
        >
          {{ item }}
        </a-col>
      </template>
    </a-row>
    <ChartTitle :title="twoData.title" :type="3" />
    <DefTable :type="1" :thead="twoData.thead" :tbody="twoData.tbody" />
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import DecorateBox from "@/components/others/DecorateBox";
import DefTable from "@/components/others/DefTable";
import { ref } from "vue";

export default {
  components: {
    ChartTitle,
    DecorateBox,
    DefTable,
  },
  props: {
    oneData: Object,
    twoData: Object,
  },
  setup() {
    let currTab = ref(0);
    return {
      currTab,
    };
  },
};
</script>