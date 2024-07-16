<template>
  <Hearder></Hearder>
  <div class="container">
    <div class="content">
      <div class="firstTitle row align-middle">
        <div class="block"></div>
        <div class="my-ml-20" style="font-size: 18px; font-weight: 600">标准查询</div>
      </div>
      <a-tabs v-model:activeKey="activeKey" size="large" :tabBarStyle="{ fontSize: '30px' }">
        <a-tab-pane key="1" tab="现行标准">
          <div>
            <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
              <a-row>
                <a-col :span="8">
                  <a-input v-model:value="formState.name" placeholder="请输入主编单位、标准编号或标准名称" />
                </a-col>
                <a-col :span="8">
                  <a-form-item label="标准类型" name="name"> <a-select size="large" v-model:value="selectValue" :options="options"></a-select> </a-form-item>
                </a-col>
                <a-col :span="8">
                  <a-button type="primary" class="my-mx-30">查询</a-button>
                  <a-button type="primary" style="background-color: #4db34d">重置</a-button>
                </a-col>
                <a-col :span="8">
                  <a-form-item label="发布日期" name="name"><a-range-picker size="large" v-model:value="value1" /> </a-form-item
                ></a-col>
                <a-col :span="8">
                  <a-form-item label="实施日期" name="name"><a-range-picker size="large" v-model:value="value2" /> </a-form-item
                ></a-col>
              </a-row>
            </a-form>
          </div>
          <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'file'">
                <FileTextOutlined class="fs-30 cursor" style="color: #606266" onmouseover="this.style.color='#0073d4'" />
              </template>
              <template v-else-if="column.dataIndex === 'note'">
                <CommentOutlined class="fs-30 cursor" style="color: #606266" onmouseover="this.style.color='#0073d4'" />
              </template>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="现行标准设计">现行标准设计</a-tab-pane>
        <a-tab-pane key="3" tab="废止标准">废止标准</a-tab-pane>
        <a-tab-pane key="4" tab="废止标准设计">废止标准设计</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hearder from "@/components/header/index.vue";
import { FileTextOutlined, CommentOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
const activeKey = ref("1");
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

const columns = [
  {
    title: "标准名称",
    align: "center",
    dataIndex: "name",
  },
  {
    title: "标准编号",
    align: "center",
    dataIndex: "code",
  },
  {
    title: "主编单位",
    align: "center",
    dataIndex: "unit",
    width: "15%",
  },
  {
    title: "类型",
    align: "center",
    dataIndex: "type",
  },
  {
    title: "备案号",
    align: "center",
    dataIndex: "number",
  },
  {
    title: "发布日期",
    align: "center",
    dataIndex: "releaseDate",
  },
  {
    title: "实施日期",
    align: "center",
    dataIndex: "workDate",
  },
  {
    title: "标准全文",
    align: "center",
    dataIndex: "file",
  },
  {
    title: "意见反馈",
    align: "center",
    dataIndex: "note",
  },
];

const data = [
  {
    key: "1",
    name: "绿色生态城区评价标准",
    code: "DG/TJ08-2253-2024",
    unit: "上海市建筑科学研究院有限公司、中建研科技股份有限公司上海分公司",
    type: "推荐性标准",
    number: "J14150-2024",
    releaseDate: "2024-01-16",
    workDate: "2024-07-01",
    file: "1",
    note: "1",
  },
  {
    key: "1",
    name: "绿色生态城区评价标准",
    code: "DG/TJ08-2253-2024",
    unit: "上海市建筑科学研究院有限公司、中建研科技股份有限公司上海分公司",
    type: "推荐性标准",
    number: "J14150-2024",
    releaseDate: "2024-01-16",
    workDate: "2024-07-01",
    file: "1",
    note: "1",
  },
  {
    key: "1",
    name: "绿色生态城区评价标准",
    code: "DG/TJ08-2253-2024",
    unit: "上海市建筑科学研究院有限公司、中建研科技股份有限公司上海分公司",
    type: "推荐性标准",
    number: "J14150-2024",
    releaseDate: "2024-01-16",
    workDate: "2024-07-01",
    file: "1",
    note: "1",
  },
  {
    key: "1",
    name: "绿色生态城区评价标准",
    code: "DG/TJ08-2253-2024",
    unit: "上海市建筑科学研究院有限公司、中建研科技股份有限公司上海分公司",
    type: "推荐性标准",
    number: "J14150-2024",
    releaseDate: "2024-01-16",
    workDate: "2024-07-01",
    file: "1",
    note: "1",
  },
  {
    key: "1",
    name: "绿色生态城区评价标准",
    code: "DG/TJ08-2253-2024",
    unit: "上海市建筑科学研究院有限公司、中建研科技股份有限公司上海分公司",
    type: "推荐性标准",
    number: "J14150-2024",
    releaseDate: "2024-01-16",
    workDate: "2024-07-01",
    file: "1",
    note: "1",
  },
];
</script>
<style lang="scss" scoped>
.content {
  width: 1136px;
  margin: 10px auto 80px;
  border: 1px solid #e9eaec;
  border-color: #e9eaec;
  border-radius: 4px;
  padding: 16px;
}
.firstTitle {
  color: #0073d4;
  height: 55px;
  background-color: #f9f9f9;
  .block {
    width: 2px;
    height: 20px;
    margin: 18px 0;
    background-color: #0073d4;
  }
}
:deep(.ant-tabs-large > .ant-tabs-nav .ant-tabs-tab) {
  font-size: 18px;
  padding: 10px 10px;
}
:deep(.ant-input) {
  height: 40px;
}
:deep(.ant-select-single:not(.ant-select-customize-input) .ant-select-selector) {
  height: 40px;
}
:deep(.ant-btn) {
  width: 70px;
  height: 40px;
}
:deep(.ant-table-wrapper .ant-table-thead > tr > th) {
  color: #909399;
}
:deep(.ant-table-wrapper .ant-table) {
  color: #606266;
}
</style>
