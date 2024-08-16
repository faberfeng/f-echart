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
    >
      <template v-if="item.prop == 'operate'" #default="{ row }">
        <el-button type="text" size="small" @click="editTable(row)"
          >编辑</el-button
        >
        <el-popconfirm
          title="确定删除吗？"
          @onConfirm="deleteTabel(row)"
          confirmButtonText="确定"
          cancelButtonText="取消"
        >
          <template #reference>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
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
import { defineProps, withDefaults } from "vue";
const emits = defineEmits(["editTable", "deleteTabel"]);
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
    showPagination: true,
  }
);
const editTable = (row: any) => {
  emits("editTable", row);
};
const deleteTabel = (row: any) => {
  emits("deleteTabel", row);
};
</script>

<style></style>
