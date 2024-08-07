<template>
  <el-table
    :data="tableData"
    border
    :cell-style="{ textAlign: 'center' }"
    :header-cell-style="{ textAlign: 'center' }"
  >
    <el-table-column
      v-for="item in tableColumn"
      :type="item.type"
      :label="item.label"
      :width="item.width"
    />
  </el-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tableData = ref([]);
const tableColumn = ref([
  { type: "index", label: "序号", width: "65" },
  { prop: "S_ProjectName", label: "发布单位" },
  { prop: "S_ProjectNo", label: "团队标准", width: "200" },
  { prop: "S_ProjectNo", label: "应用工程", width: "200" },
  { prop: "S_ProjectNo", label: "报建编号", width: "200" },
]);
</script>

<style></style>
