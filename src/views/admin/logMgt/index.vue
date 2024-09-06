<template>
  <h1 class="my-my-10">日志管理</h1>
  <el-row class="my-mb-10">
    <el-rol :span="24">
      <el-input
        v-model="searchForm.searchValue"
        placeholder="请输入标准名称或编号"
        size="large"
        style="width: 500px"
      >
        <template #append>
          <el-button :icon="Search" @click="handleValueSearch" />
        </template>
      </el-input>
    </el-rol>
  </el-row>
  <Table
    :table-column="tableColumn"
    :table-data="tableData"
    :pagination="pagination"
  ></Table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/Table/index.vue";
import { getLogByPage } from "@/api/publicInfo.ts";
import { Search } from "@element-plus/icons-vue";
const searchForm = ref<any>({
  searchValue: "",
});
const tableColumn = ref<any>([
  { prop: "no", label: "标准编号" },
  { prop: "name", label: "标准名称" },
  { prop: "time", label: "时间" },
  { prop: "operatevalue", label: "操作记录" },
  // { prop: "content", label: "内容" },
  // { prop: "ip", label: "IP" },
]);
const tableData = ref<any>([]);
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
const handleValueSearch = () => {
  console.log(searchForm.value, "searchForm");
  getLogByPageFn(searchForm.value.searchValue);
};
const getLogByPageFn = (val: string) => {
  let data = {
    pageNum: pagination.value.currentPage,
    pageSize: pagination.value.pageSize,
    keyword: val,
  };
  getLogByPage(data).then((res: any) => {
    console.log(res, "res");
    tableData.value = res.data.records.map((item: any) => {
      return {
        no: item.no,
        name: item.name,
        time: item.createdAt,
        operatevalue: item.operation.message,
        // content: item.content,
        // ip: item.ip,
      };
    });
  });
};
getLogByPageFn("");
</script>

<style></style>
