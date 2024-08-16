<template>
  <div>
    <el-row justify="space-between" align="center" class="my-my-10">
      <el-col :span="4"
        ><span class="fw-bold">{{ labelId }}</span></el-col
      >
      <el-col :span="4" style="text-align: right">
        <el-button type="primary" @click="addData()">新增</el-button>
      </el-col>
    </el-row>
    <Table
      :table-column="tableColumn"
      :table-data="tableData"
      :pagination="pagination"
      @edit-table="editTable"
      @delete-tabel="deleteTabel"
    ></Table>
    <!-- // 表单对话框 -->
    <el-dialog
      :title="dialogType"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
      align-center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标签名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
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
//新增
const addData = () => {
  console.log("addData");
  dialogVisible.value = true;
};
//编辑
const editTable = (data: any) => {
  console.log(data, "editTable");
  dialogVisible.value = true;
  dialogType.value = "编辑";
  form.value = {
    name: data.name,
  };
};
//删除
const deleteTabel = (data: any) => {
  console.log(data, "deleteTabel");
};
//清除表单
const clearForm = () => {
  form.value = {
    name: "",
  };
};
// 表单对话框
const dialogVisible = ref(false);
const dialogType = ref("新增");
const form = ref({
  name: "",
});
const handleClose = (done: any) => {
  done();
  clearForm();
};
const onSubmit = () => {
  console.log("onSubmit");
  dialogVisible.value = false;
  clearForm();
};
watch(
  () => route.params.id,
  (newVal) => {
    console.log(newVal, "newVal");
    labelId.value = newVal;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
