<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <Title title="工程应用信息"></Title>
      <el-tabs v-model="activeKey">
        <el-tab-pane label="工程应用信息" name="1">
          <el-form
            :model="formState"
            name="basic"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }"
            autocomplete="off"
          >
            <el-row :gutter="20">
              <el-col :span="20">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="请输入发布单位、团队标准、应用工程或报建编号"
                />
              </el-col>
              <el-col :span="4">
                <el-button type="primary" @click="handleSearch()"
                  >查询</el-button
                >
                <el-button type="success" @click="resetSearch()"
                  >重置</el-button
                >
              </el-col>
            </el-row>
          </el-form>
          <div class="my-mt-30">
            <el-table
              :data="tableData"
              border
              :cell-style="{ textAlign: 'center' }"
              :header-cell-style="{ textAlign: 'center' }"
            >
              <el-table-column type="index" label="序号" width="65" />
              <el-table-column prop="S_ProjectName" label="发布单位" />
              <el-table-column
                prop="S_ProjectNo"
                label="团队标准"
                width="200"
              />
              <el-table-column
                prop="S_ProjectNo"
                label="应用工程"
                width="200"
              />
              <el-table-column
                prop="S_ProjectNo"
                label="报建编号"
                width="200"
              />
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
              @change="changePagination"
            />
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
import { getEngineerInfo } from "@/api/publicInfo";
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

const handleSearch = () => {
  currentPage.value = 1;
  queryStandardReleaseList();
};
const resetSearch = () => {
  currentPage.value = 1;
  formState.keyword = "";
  queryStandardReleaseList();
};

const queryStandardReleaseList = async () => {
  const params = {
    page: currentPage.value,
    rows: pageSize.value,
    keyword: undefined,
    // ReleaseDateBegain: undefined,
    // ReleaseDateEnd: undefined,
  };
  if (formState.keyword) {
    params.keyword = formState.keyword;
  }
  await getEngineerInfo(params).then((res) => {
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
