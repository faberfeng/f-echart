<template>
  <el-row justify="space-between" align="center" class="my-my-10">
    <el-col :span="4"
      ><span class="fw-bold">{{ props.title }}</span></el-col
    >
    <el-col :span="4" style="text-align: right">
      <el-button type="primary" @click="addData()">新增</el-button>
    </el-col>
  </el-row>
  <Table
    :table-column="props.mainTableColumn"
    :table-data="mainTableData"
    :pagination="props.mainpagination"
    :showPagination="false"
    @edit-table="editTable"
    @delete-tabel="deleteTabel"
  ></Table>
  <!-- 表单对话框 -->
  <el-dialog
    :title="dialogType"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
    align-center
  >
    <el-form ref="form" :model="formes" label-width="80px">
      <el-form-item label="单位名称">
        <el-input v-model="formes.name"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults, defineEmits } from "vue";
import Table from "@/components/Table/index.vue";
const props = withDefaults(
  defineProps<{
    props: string;
    title: string;
    mainTableColumn: any[];
    mainTableData: any[];
    mainpagination: {
      currentPage: number;
      pageSize: number;
      total: number;
      handleSizeChange: (val: number) => void;
      handleCurrentChange: (val: number) => void;
    };
  }>(),
  {
    props: "",
    title: "主要起草人",
    mainTableColumn: () => [
      { prop: "name", label: "单位名称" },
      { prop: "operate", label: "操作" },
    ],
    mainTableData: () => [
      { name: "单位1", id: 1 },
      { name: "单位2", id: 2 },
      { name: "单位3", id: 3 },
    ],
    mainpagination: () => ({
      currentPage: 1,
      pageSize: 10,
      total: 0,
      handleSizeChange: (val: number) => {
        console.log(val, "handleSizeChange");
      },
      handleCurrentChange: (val: number) => {
        console.log(val, "handleCurrentChange");
      },
    }),
  }
);
const emits = defineEmits(["onSubmit"]);
const dialogType = ref<string>("新增");
const mainTableData = ref<any[]>(props.mainTableData);
// 新增
const addData = () => {
  dialogType.value = "新增";
  dialogVisible.value = true;
  console.log("新增");
  formes.value = {
    name: "",
    id: null,
  };
};
// 编辑
const editTable = (row: any) => {
  console.log("编辑", row);
  dialogType.value = "编辑";
  formes.value = row;
  dialogVisible.value = true;
};
// 删除
const deleteTabel = (row: any) => {
  mainTableData.value = mainTableData.value.filter(
    (item) => item.id !== row.id
  );
  console.log("删除", row);
};
// 表单对话框
const dialogVisible = ref<boolean>(false);
const formes = ref<any>({
  name: "",
  id: null,
});
const handleClose = (done: any) => {
  done();
};
const onSubmit = () => {
  if (dialogType.value === "新增") {
    mainTableData.value.push(formes.value);
  } else {
    mainTableData.value = mainTableData.value.map((item) => {
      if (item.id === formes.value.id) {
        return formes.value;
      }
      return item;
    });
  }
  const data = {
    props: props.props,
    data: mainTableData.value,
  };
  emits("onSubmit", data);
  // mainTableData.value.push(form.value);
  dialogVisible.value = false;
  console.log("提交");
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
