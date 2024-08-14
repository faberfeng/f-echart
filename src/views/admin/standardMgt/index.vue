<template>
  <h1>标准管理</h1>
  <el-row>
    <el-col :span="24">
      <el-input
        v-model="searchForm.searchValue"
        placeholder="请输入标准名称或编号"
        clearable
        @clear="handleValueReset"
        size="large"
      >
        <template #append>
          <el-button :icon="Search" @click="handleValueSearch" />
        </template>
      </el-input>
    </el-col>
  </el-row>
  <el-row class="my-my-20" :gutter="20" justify="space-between" align="center">
    <el-col :span="12">
      <el-date-picker
        v-model="searchForm.dateValue"
        type="datetimerange"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        format="YYYY-MM-DD"
        date-format="YYYY/MM/DD"
        time-format="A hh:mm:ss"
      />
    </el-col>
    <el-col :span="12" class="text-right">
      <el-button type="primary" @click="addData">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </el-col>
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
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const searchForm = ref<any>({
  searchValue: "",
  selectTypeValue: "",
  dateValue: "",
});
const handleValueReset = () => {
  searchForm.value.searchValue = "";
  searchForm.value.selectTypeValue = "";
};
const handleValueSearch = () => {
  console.log(searchForm.value, "searchForm");
};
const tableColumn = ref<any>([
  { prop: "name", label: "标准名称" },
  { prop: "num", label: "标准编号" },
  { prop: "pbtime", label: "发布日期" },
  { prop: "retime", label: "实施日期" },
  { prop: "operate", label: "操作" },
]);
const tableData = ref<any>([
  {
    name: "标准1",
    num: "标准编号1",
    pbtime: "2021-09-01",
    retime: "2021-09-01",
  },
  {
    name: "标准2",
    num: "标准编号2",
    pbtime: "2021-09-01",
    retime: "2021-09-01",
  },
  {
    name: "标准3",
    num: "标准编号3",
    pbtime: "2021-09-01",
    retime: "2021-09-01",
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
const addData = () => {
  console.log("新增");
  router.push({
    path: "/admin/addStandard/detail",
    query: {
      type: "add",
      id: 1,
    },
  });
};
</script>

<style lang="scss" scoped></style>
