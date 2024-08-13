<template>
  <el-table
    :data="props.tableData"
    stripe
    border
    :cell-style="{ textAlign: 'center' }"
    :header-cell-style="{ textAlign: 'center' }"
  >
    <el-table-column
      v-for="item in props.tableColumn"
      :prop="item.prop"
      :type="item.type"
      :label="item.label"
      :width="item.width"
      :sortable="item.sortable"
    />
  </el-table>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  tableData: any[];
  tableColumn: any[];
}>();
</script>

<style></style>
