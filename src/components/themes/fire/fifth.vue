<template>
  <div class="bg-0006 my-pa-10">
    <div class="bd-all">
      <ChartTitle :title="oneData.title" :status="oneData.status" :type="4" />
    </div>
    <div class="my-mt-10 bd-all">
      <ChartTitle :title="twoData.title" :status="twoData.status" :type="4" />
      <div class="bd-top">
        <a-row type="flex" align="middle" class="my-py-10">
          <template v-for="(item, index) in twoData.decorateArr" :key="index">
            <a-col :flex="1" class="text-right">{{ item.name }}：</a-col>
            <a-col :flex="1" :class="item.color">{{ item.value }}</a-col>
          </template>
        </a-row>
        <div id="fireColumnChart10Id" class="height-17"></div>
      </div>
    </div>
    <div class="my-mt-10 bd-all">
      <ChartTitle
        :title="threeData.title"
        :status="threeData.status"
        :type="4"
      />
      <div class="bd-top height-17" id="firePaleChart13Id"></div>
    </div>
    <div class="my-mt-10 bd-all">
      <ChartTitle :title="fourData.title" :status="fourData.status" :type="4" />
      <a-row type="flex" align="middle" class="bd-top bd-bottom">
        <template v-for="(item, index) in fourData.decorateArr" :key="index">
          <span class="my-pl-5 my-py-2">{{ item.name }}:</span>
          <span
            class="flex-other text-center"
            :class="{ 'bd-right': index == 0 }"
          >
            {{ item.value }}
          </span>
        </template>
      </a-row>
      <ChartTitle :title="fiveData.title" :status="fiveData.status" :type="4" />
      <a-row type="flex" align="middle" class="bd-top">
        <template v-for="(item, index) in fiveData.decorateArr" :key="index">
          <span class="my-pl-5 my-py-2">{{ item.name }}:</span>
          <span
            class="flex-other text-center"
            :class="{ 'bd-right': index == 0 }"
          >
            {{ item.value }}
          </span>
        </template>
      </a-row>
    </div>
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";

import { columnChart10 } from "@/charts/columnChart";
import { paleChart13 } from "@/charts/paleChart";
import { onMounted } from "vue";
import { init } from "echarts";

export default {
  components: {
    ChartTitle,
  },
  props: {
    oneData: Object,
    twoData: Object,
    threeData: Object,
    fourData: Object,
    fiveData: Object,
  },
  setup(props) {
    let fireColumnChart10Id = null;
    let firePaleChart13Id = null;
    function initData() {
      if (!fireColumnChart10Id)
        fireColumnChart10Id = init(
          document.getElementById("fireColumnChart10Id")
        );
      fireColumnChart10Id.setOption(
        columnChart10(props.twoData.chartData),
        true
      );
      fireColumnChart10Id.resize();

      if (!firePaleChart13Id)
        firePaleChart13Id = init(document.getElementById("firePaleChart13Id"));
      firePaleChart13Id.setOption(paleChart13(props.threeData.chartData), true);
      firePaleChart13Id.resize();
    }

    onMounted(() => {
      initData();
    });
  },
};
</script>