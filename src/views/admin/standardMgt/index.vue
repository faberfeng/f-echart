<template>
  <h1 class="my-my-10">标准管理</h1>
  <!-- <el-row>
    <el-col :span="24">
      <el-input
        v-model="searchForm.searchValue"
        placeholder="请输入标准名称或编号"
        clearable
        @clear="handleValueReset"
        size="large"
        style="width: 500px"
      >
        <template #append>
          <el-button :icon="Search" @click="handleValueSearch" />
        </template>
      </el-input>
    </el-col>
  </el-row> -->
  <el-row class="my-my-20" justify="space-between">
    <el-col :span="8">
      <el-date-picker
        v-model="searchForm.dateValue"
        type="datetimerange"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        format="YYYY-MM-DD"
        date-format="YYYY/MM/DD"
        time-format="A hh:mm:ss"
        size="large"
      />
    </el-col>
    <el-col :span="8">
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
    <el-col :span="8" class="text-right">
      <el-button type="primary" @click="addData">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </el-col>
  </el-row>
  <Table
    :table-column="tableColumn"
    :table-data="tableData"
    :pagination="pagination"
    :showPagination="true"
    @edit-table="editTable"
    @delete-tabel="deleteTabel"
  ></Table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/Table/index.vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
// getStandardListByPage,
import { deleteStandard, searchStandard } from "@/api/publicInfo.ts";
import { onMounted } from "vue";
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
  getStandardListByPageFn(searchForm.value.searchValue);
};
const tableColumn = ref<any>([
  { prop: "name", label: "标准名称" },
  { prop: "no", label: "标准编号" },
  { prop: "publishTime", label: "发布日期" },
  { prop: "implementTime", label: "实施日期" },
  { prop: "operate", label: "操作" },
]);
const tableData = ref<any>([]);
const pagination = ref<any>({
  currentPage: 1,
  pageSize: 10,
  total: 3,
  handleSizeChange: (val: number) => {
    console.log(val, "handleSizeChange");
    pagination.value.pageSize = val;
    getStandardListByPageFn(searchForm.value.searchValue);
  },
  handleCurrentChange: (val: number) => {
    console.log(val, "handleCurrentChange");
    pagination.value.currentPage = val;
    getStandardListByPageFn(searchForm.value.searchValue);
  },
});
const addData = () => {
  console.log("新增");
  router.push({
    path: "/admin/addStandard/detail",
    query: {
      type: "add",
      id: "",
    },
  });
};
const getStandardListByPageFn = async (keywords: any) => {
  const res = await searchStandard({
    number: pagination.value.currentPage - 1,
    size: pagination.value.pageSize,
    keywords: keywords,
  });
  tableData.value = res.data.content;
  pagination.value.total = res.data.page.totalElements;
  console.log(res, "res");
};
//删除
const deleteTabel = async (row: any) => {
  const res = await deleteStandard({ id: row.id });
  console.log(res, "res");
  getStandardListByPageFn(searchForm.value.searchValue);
};
//编辑
const editTable = (row: any) => {
  console.log("编辑", row);
  router.push({
    path: "/admin/addStandard/detail",
    query: {
      type: "edit",
      id: row.id,
    },
  });
};
onMounted(() => {
  getStandardListByPageFn(null);
});
</script>

<style lang="scss" scoped></style>
