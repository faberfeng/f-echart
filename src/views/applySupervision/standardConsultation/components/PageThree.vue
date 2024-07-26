<template>
  <div class="my-mt-15">
    <el-table :data="tableData" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
      <el-table-column prop="Name" label="问卷名称" />
      <el-table-column prop="Id" label="详情" width="150">
        <template #default="scope">
          <el-button style="width: 98px" type="primary" class="cursor" @click="viewDetails(scope.row.Id)">问卷详情</el-button>
        </template>
      </el-table-column>
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
import { getQuestionnaireList } from "@/api/publicInfo";

const tableData = ref([]);
// 分页
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();
const background = ref(true);
const disabled = ref(false);
const changePagination = () => {
  queryQuestionnaireList();
};
const viewDetails = () => {};

const queryQuestionnaireList = async () => {
  const params = {
    pagination: JSON.stringify({
      page: currentPage.value,
      rows: pageSize.value,
      sord: "DESC",
      sidx: "CreateDate",
    }),
    queryJson: JSON.stringify({
      Status: 1,
    }),
  };
  await getQuestionnaireList(params).then((res) => {
    tableData.value = res.data.rows;
    total.value = res.data.records;
  });
};
onMounted(() => {
  queryQuestionnaireList();
});
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
