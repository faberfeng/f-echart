<template>
  <div class="bg-0006 my-pa-10">
    <ChartTitle :title="oneData.title" :type="1">
      <a-row type="flex" justify="end" class="flex-other">
        <CaretDownOutlined class="fs-20 fc-primary" v-show="true" />
        <CaretUpOutlined class="fs-20 fc-primary" v-show="false" />
      </a-row>
    </ChartTitle>
    <a-row type="flex" align="middle" class="my-pt-10 fc-primary">
      <a-col :span="6" class="text-right">当月电费：</a-col>
      <a-col :span="6">
        <span class="fc-warn">4273237</span>
        <span class="my-pl-3">元</span>
      </a-col>
      <a-col :span="6" class="text-right">平均：</a-col>
      <a-col :span="6">
        <span class="fc-warn">0.62</span>
        <span class="my-pl-3">元/度</span>
      </a-col>
    </a-row>
    <a-row type="flex" align="middle">
      <a-col :span="14" class="height-16" id="energyPaleChart5Id"></a-col>
      <a-col :span="10">
        <template v-for="(item, index) in oneData.decorateArr" :key="index">
          <a-row type="flex" align="middle" class="my-py-5">
            <span class="bg-second3 my-px-5 my-py-2">{{ item.name }}</span>
            <span class="my-pl-5">{{ item.value }}{{ item.unit }}</span>
          </a-row>
        </template>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons-vue";
import ChartTitle from "@/components/others/ChartTitle";
import { paleChart5 } from "@/charts/paleChart";
import { onMounted } from "vue";
import { init } from "echarts";

export default {
  components: {
    CaretDownOutlined,
    CaretUpOutlined,
    ChartTitle,
  },
  props: {
    oneData: Object,
  },
  setup(props) {
    let energyPaleChart5Id = null;
    function initData() {
      if (!energyPaleChart5Id) {
        energyPaleChart5Id = init(
          document.getElementById("energyPaleChart5Id")
        );
      }
      energyPaleChart5Id.setOption(paleChart5(props.oneData.chartData), true);
      energyPaleChart5Id.resize();
    }
    onMounted(() => {
      initData();
    });
  },
};
</script>