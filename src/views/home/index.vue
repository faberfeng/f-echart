<template>
  <div class="my-pa-50">
    <el-row :gutter="30">
      <el-col :span="4">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="(item, index) in collapseItemList"
            :title="item.title"
            :name="item.name"
            :key="index"
          >
            <div
              v-for="(data, index) in item.children"
              :key="index"
              class="my-pl-20"
            >
              <span>{{ data.title }}</span
              ><el-checkbox
                class="my-ml-20"
                v-model="data.checked"
                @change="handleCheck(data)"
              ></el-checkbox>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="16">
        <TableData
          :table-column="tableColumn"
          :table-data="tableData"
        ></TableData>
      </el-col>
      <el-col :span="4">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            style="background: #e3ecfd; color: #333"
            v-for="(item, index) in rankCollapseItemList"
            :title="item.title"
            :name="item.name"
            :key="index"
          >
            <div
              v-for="(data, index) in item.children"
              :key="index"
              class="my-pl-20"
            >
              <span>{{ data.title }}</span
              ><el-checkbox
                class="my-ml-20"
                v-model="data.checked"
                @change="handleCheck(data)"
              ></el-checkbox>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const activeNames = ref<string[]>(["1"]);
import TableData from "@/components/Table/index.vue";
const handleChange = (val: string[]) => {
  activeNames.value = val;
};
const collapseItemList = ref([
  {
    title: "标准等级（数量）",
    name: "1",
    children: [
      { title: "选项1", checked: false },
      { title: "选项2", checked: false },
      { title: "选项3", checked: false },
    ],
  },
  {
    title: "标准纵向分级(数量)",
    name: "2",
    children: [
      { title: "选项4", checked: false },
      { title: "选项5", checked: false },
      { title: "选项6", checked: false },
    ],
  },
  {
    title: "基础分类(数量)",
    name: "3",
    children: [
      { title: "选项4", checked: false },
      { title: "选项5", checked: false },
      { title: "选项6", checked: false },
    ],
  },
  {
    title: "专项分类(数量)",
    name: "4",
    children: [
      { title: "选项4", checked: false },
      { title: "选项5", checked: false },
      { title: "选项6", checked: false },
    ],
  },
]);
const rankCollapseItemList = ref([
  {
    title: "一级标题",
    name: "1",
    children: [
      { title: "选项1", checked: false },
      { title: "选项2", checked: false },
      { title: "选项3", checked: false },
    ],
  },
  {
    title: "二级标题",
    name: "2",
    children: [
      { title: "选项4", checked: false },
      { title: "选项5", checked: false },
      { title: "选项6", checked: false },
    ],
  },
]);
const handleCheck = (data: any) => {
  console.log(data);
};
const tableColumn = ref([
  { type: "index", label: "序号", width: "65" },
  { prop: "S_ProjectName", label: "标准名称" },
  { prop: "S_ProjectNo", label: "标准编号", width: "200" },
  { prop: "S_RealeaseTime", label: "发布日期", width: "200" },
  { prop: "S_DoTime", label: "实施日期", width: "200" },
]);
const tableData = ref([
  {
    S_ProjectName: "标准名称1",
    S_ProjectNo: "标准编号1",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称2",
    S_ProjectNo: "标准编号2",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称3",
    S_ProjectNo: "标准编号3",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
]);
</script>

<style lang="scss" scoped>
.el-collapse-item__header {
  background: #f5f7fa !important;
  color: #333 !important;
}
</style>
