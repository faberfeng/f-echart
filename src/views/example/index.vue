<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <Title title="标准查询"></Title>
      <el-tabs v-model="activeKey">
        <el-tab-pane label="现行标准" name="1">
          <PageOne></PageOne>
        </el-tab-pane>
        <el-tab-pane label="现行标准设计" name="2">
          <PageTwo></PageTwo>
        </el-tab-pane>
        <el-tab-pane label="废止标准" name="3">
          <PageThree></PageThree>
        </el-tab-pane>
        <el-tab-pane label="废止标准设计" name="4">
          <PageFour></PageFour>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Title from "@/components/Title/index.vue";
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";
import PageFour from "./components/PageFour.vue";
import { ref } from "vue";
const activeKey = ref("1");
</script>
<style lang="scss" scoped>
:deep(.el-tabs__item) {
  font-size: 18px;
  height: 60px;
}
</style>
