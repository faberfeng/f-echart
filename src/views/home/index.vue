<template>
  <div>
    <Headers />
    <el-row
      class="my-px-80 my-py-60"
      :gutter="0"
      justify="space-between"
      align="center"
    >
      <el-col :span="4" class="scroll">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="(item, index) in collapseItemList"
            :title="item.title"
            :name="item.name"
            :key="index"
            class="my-mb-5"
          >
            <div class="border_content">
              <el-tree
                show-checkbox
                :check-strictly="true"
                :data="item.children"
                :props="propsdata"
              ></el-tree>
              <!-- <div
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
              </div> -->
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="15">
        <el-row
          :gutter="10"
          justify="space-between"
          align="center"
          class="my-mb-20"
        >
          <el-col :span="24">
            <el-input
              v-model="searchForm.searchValue"
              placeholder="请输入标准名称或编号"
              clearable
              @clear="handleValueReset"
              size="large"
            >
              <template #prepend>
                <el-select
                  v-model="searchForm.selectTypeValue"
                  placeholder="请选择"
                  clearable
                  style="width: 130px"
                  size="large"
                >
                  <el-option
                    v-for="(item, index) in selectTypeOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
              <template #append>
                <el-button :icon="Search" @click="handleValueSearch" />
              </template>
            </el-input>
          </el-col>
        </el-row>
        <TableData
          :table-column="tableColumn"
          :table-data="tableData"
          :pagination="pagination"
          :show-pagination="true"
        ></TableData>
      </el-col>
      <el-col :span="4" class="scroll">
        <el-collapse v-model="activeRankNames" @change="handleRankChange">
          <el-collapse-item
            style="background: #e3ecfd; color: #333"
            v-for="(item, index) in rankCollapseItemList"
            :title="item.title"
            :name="item.name"
            :key="index"
            class="my-mb-5"
          >
            <div class="border_content">
              <el-tree
                :check-strictly="true"
                show-checkbox
                :data="item.children"
                :props="propsdata"
              ></el-tree>
              <!-- <div
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
              </div> -->
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
const activeNames = ref<string[]>([
  "standardGrade",
  "basicClassification",
  "specialClassification",
]);
const activeRankNames = ref<string[]>([
  "mainUnit",
  "secondaryUnit",
  "draftingPersonnel",
  "reviewer",
]);
import {
  getStandardLabelList,
  getStandardCategoryTree,
} from "@/api/publicInfo.ts";
const propsdata = {
  children: "children",
  label: "name",
};
const searchForm = ref({
  selectTypeValue: "",
  searchValue: "",
});
const selectTypeOptions = ref([
  { label: "标准检索", value: "1" },
  { label: "条文检索", value: "2" },
  { label: "术语检索", value: "3" },
]);
import TableData from "@/components/Table/index.vue";
import Headers from "@/components/Header/index.vue";
const collapseItemList = ref([
  {
    title: "标准等级（200）",
    value: 1,
    type: "flat",
    name: "standardGrade",
    children: [],
  },
  {
    title: "基础分类(100)",
    type: "tree",
    value: 1,
    name: "basicClassification",
    children: [],
  },
  {
    title: "专项分类(54)",
    type: "tree",
    value: 2,
    name: "specialClassification",
    children: [],
  },
]);
const rankCollapseItemList = ref([
  {
    title: "主编单位排名",
    name: "mainUnit",
    children: [{ name: "选项1", checked: false }],
  },
  {
    title: "参编单位排名",
    name: "secondaryUnit",
    children: [
      { name: "选项2", checked: false },
      { name: "选项3", checked: false },
    ],
  },
  {
    title: "起草人员排名",
    name: "draftingPersonnel",
    children: [
      { name: "选项4", checked: false },
      { name: "选项5", checked: false },
      { name: "选项6", checked: false },
    ],
  },
  {
    title: "审查人员排名",
    name: "reviewer",
    children: [
      { name: "选项7", checked: false },
      { name: "选项8", checked: false },
      { name: "选项9", checked: false },
      { name: "选项10", checked: false },
    ],
  },
]);
const tableColumn = ref([
  { type: "index", label: "序号", width: "65" },
  { prop: "S_ProjectName", label: "标准名称", sortable: true },
  { prop: "S_ProjectNo", label: "标准编号", width: "200", sortable: true },
  { prop: "S_RealeaseTime", label: "发布日期", width: "200", sortable: true },
  { prop: "S_DoTime", label: "实施日期", width: "200", sortable: true },
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
  {
    S_ProjectName: "标准名称4",
    S_ProjectNo: "标准编号4",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称5",
    S_ProjectNo: "标准编号5",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称6",
    S_ProjectNo: "标准编号6",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称7",
    S_ProjectNo: "标准编号7",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称8",
    S_ProjectNo: "标准编号8",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称9",
    S_ProjectNo: "标准编号9",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
  {
    S_ProjectName: "标准名称10",
    S_ProjectNo: "标准编号10",
    S_RealeaseTime: "2021-09-01",
    S_DoTime: "2021-09-01",
  },
]);
const pagination = ref({
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
// 切换
const handleChange = (val: string[]) => {
  activeNames.value = val;
};
const handleRankChange = (val: string[]) => {
  activeRankNames.value = val;
};

const handleCheck = (data: any) => {
  console.log(data);
};
// 搜索
const handleValueSearch = () => {
  console.log(searchForm.value);
};
// 重置
const handleValueReset = () => {
  searchForm.value.selectTypeValue = "";
  searchForm.value.searchValue = "";
};
const initData = () => {
  collapseItemList.value.forEach((item) => {
    if (item.type == "flat") {
      getStandardLabelListFn(item.value);
    } else {
      getStandardCategoryTreeFn(item.value);
    }
  });
};
const getStandardLabelListFn = async (type: any) => {
  let params = {
    type: type,
  };
  const res = await getStandardLabelList(params);
  collapseItemList.value.forEach((item) => {
    if (item.type == "flat") {
      if (type == item.value) {
        item.children = res.data;
      }
    }
  });
};
const getStandardCategoryTreeFn = async (type: any) => {
  let params = {
    type: type,
  };
  const res = await getStandardCategoryTree(params);
  collapseItemList.value.forEach((item) => {
    if (item.type == "tree") {
      if (type == item.value) {
        item.children = res.data;
      }
    }
  });
};
onMounted(() => {
  initData();
});
</script>

<style lang="scss" scoped>
:deep(.el-collapse-item__header) {
  background: #e3ecfd !important;
  color: #333 !important;
  padding-left: 1.7rem !important;
  font-weight: 500 !important;
}
:deep(.el-collapse-item__wrap) {
  border: none !important;
  // padding: 0;
}
.border_content {
  box-shadow: 0 2px 3px 0 rgba(210, 210, 210, 0.75);
  border: 1px solid #ebebeb;
  padding: 0.5rem 0;
}
</style>
