<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <Title title="团体标准信息"></Title>
      <el-tabs v-model="activeKey">
        <el-tab-pane label="团体标准信息" name="1">
          <PageOne></PageOne>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Title from "@/components/Title/index.vue";
import PageOne from "./components/PageOne.vue";
import { ref } from "vue";
const activeKey = ref("1");
</script>
<style lang="scss" scoped>
:deep(.el-tabs__item) {
  font-size: 18px;
  height: 60px;
}
</style>
