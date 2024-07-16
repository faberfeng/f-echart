<template>
  <div>
    <el-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input v-model:value="formState.name" size="large" placeholder="请输入主编单位、标准编号或标准名称" />
        </el-col>
        <el-col :span="8">
          <el-form-item label="标准类型:" name="name">
            <el-select v-model="selectValue" size="large">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button type="primary">查询</el-button>
          <el-button type="success">重置</el-button>
        </el-col>
        <el-col :span="8">
          <el-form-item label="发布日期:" name="name"
            ><el-date-picker size="large" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="value1" /> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="实施日期:" name="name"
            ><el-date-picker size="large" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="value2" /> </el-form-item
        ></el-col>
      </el-row>
    </el-form>
  </div>

  <el-table :data="tableData" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
    <el-table-column prop="name" label="标准名称" />
    <el-table-column prop="code" label="标准编号" />
    <el-table-column prop="unit" label="主编单位" />
    <el-table-column prop="type" label="类型" width="110" />
    <el-table-column prop="number" label="备案号" width="115" />
    <el-table-column prop="releaseDate" label="发布日期" width="110" />
    <el-table-column prop="workDate" label="实施日期" width="110" />
    <el-table-column prop="file" label="标准全文" width="90">
      <template #default="scope">
        <el-tooltip content="点击进入" :show-arrow="false" placement="bottom">
          <el-icon class="fs-30 cursor"><Document /></el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="note" label="意见反馈" width="90">
      <template #default="scope">
        <el-tooltip content="点击进入" :show-arrow="false" placement="bottom">
          <el-icon class="fs-30 cursor"><ChatLineSquare /></el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <div class="row justify-center my-mt-20">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[20, 50, 100, 150]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next, jumper"
      :total="1000" />
  </div>
</template>

<script setup lang="ts">
import { Document, ChatLineSquare } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
interface FormState {
  name: string;
}
const formState = reactive<FormState>({
  name: "",
});

const options = [
  {
    value: "全部",
    label: "全部",
  },
  {
    value: "强制性标准",
    label: "强制性标准",
  },
  {
    value: "推荐性标准",
    label: "推荐性标准",
  },
];
let selectValue = ref("全部");

import type { Dayjs } from "dayjs";
type RangeValue = [Dayjs, Dayjs];

const value1 = ref<RangeValue>();
const value2 = ref<RangeValue>();

const tableData = Array(10)
  .fill("")
  .map((i, idx) => {
    return {
      key: idx,
      name: "绿色生态城区评价标准",
      code: "DG/TJ08-2253-2024",
      unit: "上海市建筑科学研究院有限公司、中建研科技股份有限公司上海分公司",
      type: "推荐性标准",
      number: "J14150-2024",
      releaseDate: "2024-01-16",
      workDate: "2024-07-01",
      file: "1",
      note: "1",
    };
  });

const currentPage = ref(5);
const pageSize = ref(100);
const size = ref<ComponentSize>("default");
const background = ref(false);
const disabled = ref(false);
</script>

<style lang="scss" scoped>
:deep(.el-button) {
  width: 70px;
  height: 40px;
}
</style>
