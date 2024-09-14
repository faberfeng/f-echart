<template>
  <div class="bg-0006 my-pa-10 relative">
    <ChartTitle :type="2" :title="title" />
    <a-row type="flex" align="middle" class="fc-fff6">
      <template v-for="(item, index) in oneArr" :key="index">
        <a-col :span="8">
          <DecorateBox :type="3" :data="item" />
        </a-col>
      </template>
    </a-row>
    <SplitLine :type="1" />
    <a-row type="flex" justify="space-around" class="fc-fff6">
      <template v-for="(item, index) in twoArr" :key="index">
        <a-col :span="12" class="bg-0008 my-pa-5 bdr-20">
          <a-row type="flex" align="middle">
            <a-checkbox></a-checkbox>
            <div class="my-px-5 my-pt-10 fs-12 fc-primary">
              <a-row type="flex" justify="center">
                <img
                  :src="require('@/assets/imgs/chart/camera_bg.png')"
                  style="width: 2.57rem"
                />
              </a-row>
              <div class="relative text-center" style="bottom: 0.8rem">
                {{ item.name }}
              </div>
            </div>
            <div class="col justify-between">
              <div>
                <span>在线：</span>
                <span class="fc-second">{{ item.onLine }}个</span>
              </div>
              <div>
                <span>离线：</span>
                <span class="fc-warn">{{ item.offLine }}个</span>
              </div>
            </div>
          </a-row>
        </a-col>
      </template>
    </a-row>
    <BoxBottom :type="1" />
  </div>
</template>
<script>
import ChartTitle from "@/components/others/ChartTitle";
import DecorateBox from "@/components/others/DecorateBox";
import SplitLine from "@/components/others/SplitLine";
import BoxBottom from "@/components/others/BoxBottom";
export default {
  props: {
    title: String,
    oneArr: Array,
    twoArr: Array,
  },
  components: { ChartTitle, DecorateBox, SplitLine, BoxBottom },
  setup() {},
};
</script>