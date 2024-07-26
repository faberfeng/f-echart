<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <Title title="征求意见"></Title>
      <el-tabs v-model="activeKey">
        <el-tab-pane label="征求意见" name="1">
          <el-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
            <el-row :gutter="20">
              <el-col :span="20">
                <el-input v-model="formState.keyword" size="large" placeholder="请输入标准名称" />
              </el-col>
              <el-col :span="4">
                <el-button type="primary" @click="handleSearch()">查询</el-button>
                <el-button type="success" @click="resetSearch()">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
          <div class="my-mt-30">
            <el-table :data="tableData" :default-sort="{ prop: 'S_A2', order: 'descending' }" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
              <el-table-column type="index" label="序号" width="65" />
              <el-table-column prop="S_ProjectName" label="标准名称" />
              <el-table-column prop="S_ReleaseType" label="征求状态" width="200" />
              <!-- 标注：对应功属性未知 -->
              <el-table-column sortable prop="S_A2" label="截止时间" width="200">
                <template #default="scope">
                  <div class="text-canter">
                    {{ formatTime(scope.row.S_A2) }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="S_ID" label="操作" width="150">
                <template #default="scope">
                  <el-button style="width: 98px" type="primary" class="cursor" @click="viewDetails(scope.row.S_ID)">查看详情</el-button>
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Title from "@/components/Title/index.vue";
import { ref, reactive, onMounted } from "vue";
import { getStandardReleaseList } from "@/api/publicInfo";
import { dayjs } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

const activeKey = ref("1");
interface FormState {
  keyword: string;
}
const formState = reactive<FormState>({
  keyword: "",
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
// 格式化时间样式
const formatTime = (time: string) => {
  return dayjs(time).format("YYYY-MM-DD");
};

const handleSearch = () => {
  currentPage.value = 1;
  queryStandardReleaseList();
};
const resetSearch = () => {
  currentPage.value = 1;
  formState.keyword = "";
  queryStandardReleaseList();
};

// 查看详情
const viewDetails = (id: string) => {
  console.log(id);
  router.push({
    path: "/standardManagement/takeAdvise/details",
    query: {
      S_ID: id,
    },
  });
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
      type: 5,
      S_Status: 1,
      keyword: formState.keyword,
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
