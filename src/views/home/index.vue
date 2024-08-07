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
        <tableData></tableData>
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
import tableData from "@/components/Table/index.vue";
const handleChange = (val: string[]) => {
  activeNames.value = val;
};
const collapseItemList = ref([
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
</script>

<style lang="scss" scoped>
.el-collapse-item__header {
  background: #f5f7fa !important;
  color: #333 !important;
}
</style>
