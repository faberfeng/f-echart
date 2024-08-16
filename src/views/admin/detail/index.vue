<template>
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tabList" :label="item.label" :name="item.name">
      <!-- {{ item.label }} -->
      <div v-show="item.name == '1'">
        <el-form :inline="true" label-width="auto" label-position="left">
          <el-form-item
            style="width: 30%"
            v-for="(item, index) in formItemList"
            :key="index"
            :label="item.label"
          >
            <el-input
              v-if="item.type === 'input'"
              v-model="item.data"
              :placeholder="item.placeholder"
            ></el-input>
            <el-select
              v-else-if="item.type === 'select'"
              v-model="item.data"
              :placeholder="item.placeholder"
            >
              <el-option
                v-for="(option, index) in item.options"
                :key="index"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </el-select>
            <el-select
              v-else-if="item.type === 'multipleSelect'"
              v-model="item.data"
              :placeholder="item.placeholder"
              clearable
              multiple
            >
              <el-option
                v-for="(option, index) in item.options"
                :key="index"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </el-select>
            <!-- item.type=treeSelect -->
            <el-tree-select
              v-else-if="item.type === 'treeSelect'"
              v-model="item.data"
              :data="item.treedata"
              :props="{ label: 'label', value: 'value' }"
              :placeholder="item.placeholder"
              :filterable="true"
              :clearable="true"
            ></el-tree-select>
            <!-- item.type=date -->
            <el-date-picker
              v-else-if="item.type === 'date'"
              v-model="item.data"
              type="date"
              placeholder="选择日期"
              :clearable="true"
            ></el-date-picker>
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button type="primary">保存</el-button>
            <el-button>关闭</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="item.name == '2'">
        <el-row justify="space-between" align="center">
          <el-col :span="4"><span class="fw-bold">主编单位</span></el-col>
          <el-col :span="4" style="text-align: right">
            <el-button type="primary">新增</el-button>
          </el-col>
        </el-row>
        <Table
          :table-column="mainTableColumn"
          :table-data="mainTableData"
          :pagination="mainpagination"
        ></Table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/Table/index.vue";
const activeName = ref<string>("1");
const tabList = ref<any[]>([
  { label: "标准信息", name: "1" },
  { label: "主参编单位", name: "2" },
  { label: "主要起草人", name: "3" },
  { label: "主要审查人", name: "4" },
  { label: "术语", name: "5" },
  { label: "条文", name: "6" },
]);
const formItemList = ref<any[]>([
  {
    label: "标准名称",
    prop: "standardName",
    type: "input",
    placeholder: "请输入标准名称",
    data: "",
  },
  {
    label: "英文名称",
    prop: "englishName",
    type: "input",
    placeholder: "请输入英文名称",
    data: "",
  },
  //标准号-input
  {
    label: "标准号",
    prop: "standardNumber",
    type: "input",
    placeholder: "请输入标准号",
    data: "",
  },
  //被替代标准名称-input
  {
    label: "被替代标准名称",
    prop: "replacedStandardName",
    type: "input",
    placeholder: "请输入被替代标准名称",
    data: "",
  },
  //备案号-input
  {
    label: "备案号",
    prop: "recordNumber",
    type: "input",
    placeholder: "请输入备案号",
    data: "",
  },
  //被替代标准编号-input
  {
    label: "被替代标准编号",
    prop: "replacedStandardNumber",
    type: "input",
    placeholder: "请输入被替代标准编号",
    data: "",
  },
  //标准序号-input
  {
    label: "标准序号",
    prop: "standardNumber",
    type: "input",
    placeholder: "请输入标准序号",
    data: "",
  },
  //立项时间-date
  {
    label: "立项时间",
    prop: "projectTime",
    type: "date",
    placeholder: "请选择立项时间",
    data: "",
  },
  //发布时间-date
  {
    label: "发布时间",
    prop: "releaseTime",
    type: "date",
    placeholder: "请选择发布时间",
    data: "",
  },
  //批准时间-date
  {
    label: "批准时间",
    prop: "approvalTime",
    type: "date",
    placeholder: "请选择批准时间",
    data: "",
  },
  //实施时间-date
  {
    label: "实施时间",
    prop: "implementationTime",
    type: "date",
    placeholder: "请选择实施时间",
    data: "",
  },
  //废止时间
  {
    label: "废止时间",
    prop: "abolitionTime",
    type: "date",
    placeholder: "请选择废止时间",
    data: "",
  },
  //标准代次-select
  {
    label: "标准代次",
    prop: "standardGeneration",
    type: "select",
    placeholder: "请选择标准代次",
    options: [
      { label: "标准代次1", value: "1" },
      { label: "标准代次2", value: "2" },
      { label: "标准代次3", value: "3" },
    ],
  },
  //标准类别-select
  {
    label: "标准类别",
    prop: "standardCategory",
    type: "select",
    placeholder: "请选择标准类别",
    options: [
      { label: "标准类别1", value: "1" },
      { label: "标准类别2", value: "2" },
      { label: "标准类别3", value: "3" },
    ],
  },
  //标准状态-select
  {
    label: "标准状态",
    prop: "standardStatus",
    type: "select",
    placeholder: "请选择标准状态",
    options: [
      { label: "标准状态1", value: "1" },
      { label: "标准状态2", value: "2" },
      { label: "标准状态3", value: "3" },
    ],
  },
  //编制状态-select
  {
    label: "编制状态",
    prop: "preparationStatus",
    type: "select",
    placeholder: "请选择编制状态",
    options: [
      { label: "编制状态1", value: "1" },
      { label: "编制状态2", value: "2" },
      { label: "编制状态3", value: "3" },
    ],
  },
  //基础分类-treeSelect
  {
    label: "基础分类",
    prop: "basicClassification",
    type: "treeSelect",
    treedata: [
      {
        label: "基础分类1",
        value: "1",
        children: [
          { label: "基础分类1-1", value: "1-1" },
          { label: "基础分类1-2", value: "1-2" },
          { label: "基础分类1-3", value: "1-3" },
        ],
      },
      {
        label: "基础分类2",
        value: "2",
        children: [
          { label: "基础分类2-1", value: "2-1" },
          { label: "基础分类2-2", value: "2-2" },
          { label: "基础分类2-3", value: "2-3" },
        ],
      },
      {
        label: "基础分类3",
        value: "3",
        children: [
          { label: "基础分类3-1", value: "3-1" },
          { label: "基础分类3-2", value: "3-2" },
          { label: "基础分类3-3", value: "3-3" },
        ],
      },
    ],
    placeholder: "请输入基础分类",
    data: "",
  },

  //专题分类-treeSelect
  {
    label: "专题分类",
    prop: "specialName",
    type: "treeSelect",
    treedata: [
      {
        label: "专题分类1",
        value: "1",
        children: [
          { label: "专题分类1-1", value: "1-1" },
          { label: "专题分类1-2", value: "1-2" },
          { label: "专题分类1-3", value: "1-3" },
        ],
      },
      {
        label: "专题分类2",
        value: "2",
        children: [
          { label: "专题分类2-1", value: "2-1" },
          { label: "专题分类2-2", value: "2-2" },
          { label: "专题分类2-3", value: "2-3" },
        ],
      },
      {
        label: "专题分类3",
        value: "3",
        children: [
          { label: "专题分类3-1", value: "3-1" },
          { label: "专题分类3-2", value: "3-2" },
          { label: "专题分类3-3", value: "3-3" },
        ],
      },
    ],
    placeholder: "请输入专题名称",
    data: "",
  },
  //工程专业分类-multipleSelect
  {
    label: "工程专业分类",
    prop: "engineeringClassification",
    type: "multipleSelect",
    placeholder: "请选择工程专业分类",
    options: [
      { label: "工程专业分类1", value: "1" },
      { label: "工程专业分类2", value: "2" },
      { label: "工程专业分类3", value: "3" },
    ],
    data: [],
  },
  //工程全生命周期分类-multipleSelect
  {
    label: "工程全生命周期分类",
    prop: "engineeringLifeCycle",
    type: "multipleSelect",
    placeholder: "请选择工程全生命周期分类",
    options: [
      { label: "工程全生命周期分类1", value: "1" },
      { label: "工程全生命周期分类2", value: "2" },
      { label: "工程全生命周期分类3", value: "3" },
    ],
    data: [],
  },
  //管理条线分类-multipleSelect
  {
    label: "管理条线分类",
    prop: "managementLine",
    type: "multipleSelect",
    placeholder: "请选择管理条线分类",
    options: [
      { label: "管理条线分类1", value: "1" },
      { label: "管理条线分类2", value: "2" },
      { label: "管理条线分类3", value: "3" },
    ],
    data: [],
  },
  //建筑类型分类-multipleSelect
  {
    label: "建筑类型分类",
    prop: "buildingType",
    type: "multipleSelect",
    placeholder: "请选择建筑类型分类",
    options: [
      { label: "建筑类型分类1", value: "1" },
      { label: "建筑类型分类2", value: "2" },
      { label: "建筑类型分类3", value: "3" },
    ],
    data: [],
  },
  //时间分类-multipleSelect
  {
    label: "时间分类",
    prop: "timeClassification",
    type: "multipleSelect",
    placeholder: "请选择时间分类",
    options: [
      { label: "时间分类1", value: "1" },
      { label: "时间分类2", value: "2" },
      { label: "时间分类3", value: "3" },
    ],
    data: [],
  },
]);

// 主参编单位column
const mainTableColumn = ref<any>([
  { prop: "name", label: "单位名称" },
  { prop: "operate", label: "操作" },
]);
// 主参编单位data
const mainTableData = ref<any>([
  { name: "单位1" },
  { name: "单位2" },
  { name: "单位3" },
]);
// 主参编单位pagination
const mainpagination = ref<any>({
  currentPage: 1,
  pageSize: 10,
  total: 3,
  handleSizeChange: (val: number) => {
    console.log(val, "handleSizeChange");
  },
  handleCurrentChange: (val: number) => {
    console.log(val, "handleCurrentChange");
  },
});
const handleClick = (tab: any) => {
  console.log(tab, "tab");
};
</script>

<style></style>
