<template>
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tabList" :label="item.label" :name="item.name">
      {{ item.label }}
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
const activeName = ref<string>("1");
const tabList = ref<any[]>([
  { label: "标准信息", name: "1" },
  { label: "主参编单位", name: "2" },
  { label: "主要起草人", name: "3" },
  { label: "主要审查人", name: "4" },
  { label: "术语", name: "5" },
  { label: "条文", name: "6" },
]);
const handleClick = (tab: any) => {
  console.log(tab, "tab");
};
</script>

<style></style>
