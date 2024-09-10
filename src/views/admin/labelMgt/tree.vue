<template>
  <div>
    <el-row justify="space-between" class="my-my-10">
      <el-col :span="4"
        ><span class="fw-bold">{{ labelName }}</span></el-col
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
      @rowClick="rowClick"
      :is-tree="true"
      :show-pagination="false"
    ></Table>
    <!-- // 表单对话框 -->
    <el-dialog
      :title="dialogType"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
      align-center
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="标签名称">
          <el-input v-model="forms.name" />
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
import { ref, watch, onMounted } from "vue";
import {
  getStandardCategoryList,
  createStandardCategory,
  deleteStandardCategory,
  updateStandardCategory,
  getStandardCategoryTree,
} from "@/api/publicInfo.ts";
import { ElMessage } from "element-plus";
import useMenusStore from "@/stores/modules/menus.ts";
const menusStore = useMenusStore();
const route = useRoute();
const labelId = ref<any>(route.params.id);
const labelName = ref<any>(menusStore.getMenuName);
const type = ref<any>();
console.log(type, "type11");
const tableColumn = ref([
  { prop: "name", label: "标签名称" },
  // { prop: "type", label: "标签类型" },
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
// 表单对话框
const dialogVisible = ref(false);
const dialogType = ref("新增");
// const input = ref("233");
let forms = ref({
  id: null,
  name: "",
  pid: null,
  addPid: null,
});
//新增
const addData = () => {
  console.log("addData");
  dialogVisible.value = true;
};
//编辑
const editTable = (data: any) => {
  console.log(data, "editTable");
  // data.rowshow = true;
  dialogVisible.value = true;
  dialogType.value = "编辑";
  forms.value = {
    pid: data.pid,
    name: data.name,
    id: data.id,
    addPid: data.id,
  };
};
const rowClick = (data: any) => {
  console.log(data, "rowClick");
  forms.value = {
    pid: null,
    name: "",
    id: null,
    addPid: data.id,
  };
};

//删除
const deleteTabel = (data: any) => {
  console.log(data, "deleteTabel");
  deleteStandardCategory(data).then((res) => {
    console.log(res, "res");
    ElMessage({
      message: "删除成功",
      type: "success",
    });
    getStandardCategoryTreeFn();
  });
  console.log(data, "deleteTabel");
};
//获取列表
const getStandardCategoryTreeFn = async () => {
  let params = {
    type: type.value,
  };
  const res = await getStandardCategoryTree(params);
  tableData.value = res.data;
  console.log(res, "res");
};
//清除表单
const clearForm = () => {
  forms.value = {
    pid: null,
    name: "",
    id: null,
    addPid: null,
  };
};

const handleClose = (done: any) => {
  done();
  clearForm();
};
const onSubmit = () => {
  console.log("onSubmit");
  if (!forms.value.name) {
    ElMessage({
      message: "请输入标签名称",
      type: "warning",
    });
    return;
  }
  var params: any = {
    name: forms.value.name,
    type: type.value,
  };
  if (forms.value.id) {
    params.id = forms.value.id;
    updateStandardCategory(params).then((res: any) => {
      console.log(res, "res");
      if (res.code === 200) {
        getStandardCategoryTreeFn();
        ElMessage({
          message: "编辑成功",
          type: "success",
        });
      } else {
        ElMessage({
          message: res.msg,
          type: "error",
        });
      }
      dialogVisible.value = false;
      clearForm();
    });
    return;
  }
  if (forms.value.addPid) {
    params.pid = forms.value.addPid;
  } else {
    params.pid = 0;
  }
  createStandardCategory(params).then((res: any) => {
    console.log(res, "res");
    if (res.code === 200) {
      getStandardCategoryTreeFn();
      ElMessage({
        message: "新增成功",
        type: "success",
      });
    } else {
      ElMessage({
        message: res.msg,
        type: "error",
      });
    }
    dialogVisible.value = false;
    clearForm();
  });
};
const getStandardCategoryListFn = async () => {
  const res = await getStandardCategoryList();
  console.log(res, "res111");
};
onMounted(() => {
  getStandardCategoryListFn();
  getStandardCategoryTreeFn();
});
watch(
  () => route.params.id,
  (newVal: any) => {
    console.log(newVal, "newVal");
    labelId.value = newVal;
    labelName.value = menusStore.getMenuName;
    console.log(labelId.value.split("_")[1], "labelId.value");
    type.value = labelId.value.split("_")[1];
    getStandardCategoryListFn();
    getStandardCategoryTreeFn();
    // getStandardCategoryListFn();
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
