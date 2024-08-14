<template>
  <div>
    <h1>{{ labelId }}</h1>
    <Table
      :table-column="tableColumn"
      :table-data="tableData"
      :pagination="pagination"
    ></Table>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/Table/index.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
const route = useRoute();
const labelId = ref<any>(route.params.id);
const tableColumn = ref([
  { prop: "name", label: "标签名称" },
  { prop: "type", label: "标签类型" },
  { prop: "operate", label: "操作" },
]);
const tableData = ref([
  { name: "标签1", type: "标签类型1" },
  { name: "标签2", type: "标签类型2" },
  { name: "标签3", type: "标签类型3" },
]);
const pagination = ref({
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
watch(
  () => route.params.id,
  (newVal) => {
    console.log(newVal, "newVal");
    labelId.value = newVal;
  },
  { immediate: true }
);
</script>

<style></style>
