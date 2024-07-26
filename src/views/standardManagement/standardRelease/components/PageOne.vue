<template>
  <el-form :model="formState" class="my-mt-20" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="发布日期:"
          ><el-date-picker
            size="large"
            @change="changeTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="formState.lunchTime" /> </el-form-item
      ></el-col>
    </el-row>
  </el-form>
  <div class="my-mt-15">
    <el-table :data="tableData" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
      <el-table-column prop="S_ProjectName" label="通知发布名称" />
      <el-table-column prop="S_ReleaseDate" label="发布日期" width="150">
        <template #default="scope">
          <div class="text-canter">
            {{ scope.row.S_ReleaseDate }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="S_ID" label="通知发布文件" width="150">
        <template #default="scope">
          <el-button style="width: 98px" type="primary" class="cursor" @click="openFile(scope.row.S_ID)">查看详情</el-button>
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
import { ref, reactive, onMounted } from "vue";
import { getStandardReleaseList, getFilePathByIdAndTypeNew } from "@/api/publicInfo";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
type RangeValue = [Dayjs, Dayjs];
const activeKey = ref("1");
interface FormState {
  lunchTime: RangeValue | string;
}
const formState = reactive<FormState>({
  lunchTime: "",
});
const tableData = ref([]);
// 分页
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();
const background = ref(true);
const disabled = ref(false);
const changePagination = () => {
  queryStandardReleaseList();
};

// 打开文件
const openFile = async (id: string) => {
  await getFilePathByIdAndTypeNew({ id: id, type: "R0201" }).then((res) => {
    //解析文件充blod中解析
    const url = window.URL.createObjectURL(new Blob([res], { type: "application/pdf" }));
    window.open(url, "_blank");
  });
};

const changeTime = () => {
  queryStandardReleaseList();
};
const queryStandardReleaseList = async () => {
  const params = {
    pagination: JSON.stringify({
      page: currentPage.value,
      rows: pageSize.value,
      sord: "ASC",
      sidx: "S_CreateDate",
    }),
    queryJson: JSON.stringify({
      type: 2,
      S_Status: 1,
      ...(formState.lunchTime && {
        S_A2_Begin: dayjs(formState.lunchTime[0]).format("YYYY-MM-DD"),
        S_A2_End: dayjs(formState.lunchTime[1]).format("YYYY-MM-DD"),
      }),
    }),
  };
  await getStandardReleaseList(params).then((res) => {
    tableData.value = res.data.rows;
    total.value = res.data.records;
  });
};
onMounted(() => {
  queryStandardReleaseList();
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
