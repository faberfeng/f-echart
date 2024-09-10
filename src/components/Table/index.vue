<template>
  <el-table
    :data="props.tableData"
    :stripe="!props.isTree"
    max-height="calc(100vh - 10rem)"
    border
    row-key="id"
    :cell-style="{ textAlign: 'center' }"
    :header-cell-style="{ textAlign: 'center' }"
    @row-click="rowClick"
    v-loading="tableLoading"
    :highlight-current-row="props.isTree"
  >
    <el-table-column
      v-for="item in props.tableColumn"
      :prop="item.prop"
      :type="item.type"
      :label="item.label"
      :width="item.width"
      :sortable="item.sortable"
    >
      <template v-if="item.prop == 'operate'" #default="{ row }">
        <el-button link type="primary" size="small" @click.stop="editTable(row)"
          >编辑</el-button
        >
        <el-popconfirm
          title="确定删除吗？"
          @confirm="deleteTabel(row)"
          confirmButtonText="确定"
          cancelButtonText="取消"
        >
          <template #reference>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
      <template v-else-if="item.prop == 'detail'" #default="{ row }">
        <el-button
          link
          type="primary"
          size="small"
          @click.stop="detailTable(row)"
          >详情信息</el-button
        >
      </template>
      <template v-else-if="item.prop == 'termLabelIds'" #default="{ row }">
        <span v-for="data in row.termLabels">
          <el-tag size="small" style="margin-right: 5px">{{
            data.name
          }}</el-tag>
        </span>
      </template>
      <template
        v-else-if="item.prop == 'articleSpecialLabelIds'"
        #default="{ row }"
      >
        <span v-for="data in row.articleSpecialLabels">
          <el-tag size="small" style="margin-right: 5px">{{
            data.name
          }}</el-tag>
        </span>
      </template>
      <template
        v-else-if="item.prop == 'articleManageLabelIds'"
        #default="{ row }"
      >
        <span v-for="data in row.articleManageLabels">
          <el-tag size="small" style="margin-right: 5px">{{
            data.name
          }}</el-tag>
        </span>
      </template>
      <!-- item.prop == 'articleSpecialLabelIds' ||
          item.prop == 'articleManageLabelIds' ||
          item.prop == 'termLabelIds' -->
    </el-table-column>
  </el-table>
  <div class="my-my-10 row justify-end" v-if="props.showPagination">
    <el-pagination
      @size-change="props.pagination.handleSizeChange"
      @current-change="props.pagination.handleCurrentChange"
      :current-page="props.pagination.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="props.pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.pagination.total"
    ></el-pagination>
  </div>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, ref } from "vue";
const tableLoading = ref(false);
const emits = defineEmits([
  "editTable",
  "deleteTabel",
  "rowClick",
  "detailTable",
]);
const props = withDefaults(
  defineProps<{
    tableData: any[];
    tableColumn: any[];
    pagination: {
      currentPage: number;
      pageSize: number;
      total: number;
      handleSizeChange: (val: number) => void;
      handleCurrentChange: (val: number) => void;
    };
    showPagination: boolean;
    isTree: boolean;
  }>(),
  {
    tableData: () => [],
    tableColumn: () => [],
    pagination: () => ({
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
    showPagination: false,
    isTree: false,
  }
);
const editTable = (row: any) => {
  emits("editTable", row);
};
const deleteTabel = (row: any) => {
  console.log(row, "row111");
  emits("deleteTabel", row);
};
const detailTable = (row: any) => {
  emits("detailTable", row);
};
// 表格行点击事件
const rowClick = (row: any) => {
  emits("rowClick", row);
  //改变当前行的选中状态和颜色高亮
};
// watch(
//   () => props.tableData,
//   (val) => {
//     console.log(val, "val");
//     tableLoading.value = false;
//   },
//   { deep: true }
// );
</script>

<style></style>
