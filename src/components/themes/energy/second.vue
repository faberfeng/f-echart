<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <CaretDownOutlined class="fs-20 fc-primary" v-show="true" />
        <CaretUpOutlined class="fs-20 fc-primary" v-show="false" />
      </a-row>
    </ChartTitle>
    <div class="my-pt-10">
      <DefTable :type="3" :thead="oneData.thead" :tbody="oneData.tbody" />
    </div>
  </div>
</template>
<script>
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons-vue";

import ChartTitle from "@/components/others/ChartTitle";
import DefTable from "@/components/others/DefTable";
export default {
  components: {
    CaretDownOutlined,
    CaretUpOutlined,

    ChartTitle,
    DefTable,
  },
  props: {
    oneData: Object,
  },
  setup() {},
};
</script>