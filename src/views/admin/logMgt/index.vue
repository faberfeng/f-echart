<template>
  <h1>日志管理</h1>
  <Table
    :table-column="tableColumn"
    :table-data="tableData"
    :pagination="pagination"
  ></Table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/Table/index.vue";
const tableColumn = ref<any>([
  { prop: "name", label: "日志名称" },
  { prop: "type", label: "日志类型" },
  { prop: "time", label: "时间" },
  { prop: "content", label: "内容" },
  { prop: "ip", label: "IP" },
]);
const tableData = ref<any>([
  {
    name: "日志1",
    type: "日志类型1",
    time: "2021-09-01",
    content: "内容1",
    ip: "",
  },
  {
    name: "日志2",
    type: "日志类型2",
    time: "2021-09-01",
    content: "内容2",
    ip: "",
  },
  {
    name: "日志3",
    type: "日志类型3",
    time: "2021-09-01",
    content: "内容3",
    ip: "",
  },
]);
const pagination = ref<any>({
  currentPage: 1,
  pageSize: 10,
  total: 3,
  handleSizeChange: (val: number) => {
    console.log(val, "handleSizeChange");
  },
  handleCurrentChange: (val: number) => {
    console.log(val, "handleCurrentChange");
  },
});
</script>

<style></style>
