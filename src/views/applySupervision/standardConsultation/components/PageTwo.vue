<template>
  <div class="my-mt-15">
    <el-table :data="tableData" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
      <el-table-column prop="S_ProjectName" label="标准名称" />
      <el-table-column prop="XXX" label="姓名" />
      <el-table-column prop="XXX" label="日期" />
      <el-table-column prop="XXX" label="问题" />
      <el-table-column prop="XXX" label="回答" />
    </el-table>
  </div>
  <div class="row justify-center my-mt-20">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[20, 50, 100, 150]"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next, jumper"
      :total="total"
      @change="changePagination" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const tableData = ref([]);
// 分页
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();
const background = ref(true);
const disabled = ref(false);
const changePagination = () => {};

onMounted(() => {});
</script>

<style lang="scss" scoped>
:deep(.el-tabs__item) {
  font-size: 18px;
  height: 60px;
}
:deep(.el-button) {
  width: 70px;
  height: 40px;
}
</style>
