<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <Title title="政策性文件"></Title>
      <el-tabs v-model="activeKey">
        <el-tab-pane label="政策性文件" name="1">
          <el-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
            <el-row :gutter="20">
              <el-col :span="20">
                <el-input v-model:value="formState.name" size="large" placeholder="请输入政策性文件名称或政策性文件文号" />
              </el-col>
              <el-col :span="4">
                <el-button type="primary">查询</el-button>
                <el-button type="success">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
          <div class="my-mt-30">
            <el-table :data="tableData" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
              <el-table-column prop="idx" label="序号" width="65" />
              <el-table-column prop="name" label="政策性文件名称" />
              <el-table-column prop="code" label="政策性文件文号" width="200" />
            </el-table>
          </div>
          <div class="row justify-center my-mt-20">
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[20, 50, 100, 150]"
              :size="size"
              :disabled="disabled"
              :background="background"
              layout="sizes, prev, pager, next, jumper"
              :total="100" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Title from "@/components/Title/index.vue";
import { ref, reactive } from "vue";
const activeKey = ref("1");
interface FormState {
  name: string;
}
const formState = reactive<FormState>({
  name: "",
});
const tableData = Array(10)
  .fill("")
  .map((i, idx) => {
    return {
      key: idx,
      idx: idx + 1,
      name: "关于鼓励团体标准在本市工程建设中应用的通知",
      code: "沪建标定【2019】871号",
    };
  });
const currentPage = ref(1);
const pageSize = ref(20);
const size = ref<ComponentSize>("default");
const background = ref(false);
const disabled = ref(false);
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
