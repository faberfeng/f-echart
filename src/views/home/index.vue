<template>
  <div>
    <Headers />
    <el-row
      class="my-px-80 my-py-70"
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
                :check-on-click-node="true"
                :expand-on-click-node="false"
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
              <el-tree :data="item.children" :props="propsdata"></el-tree>
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
import { ref, onMounted, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
import {
  searchStandard,
  getTermStandardList,
  getArticleList,
} from "@/api/publicInfo.ts";
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
  selectTypeValue: "1",
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
let tableColumn = ref([
  { type: "index", label: "序号", width: "65" },
  { prop: "S_ProjectName", label: "标准名称", sortable: true },
  { prop: "S_ProjectNo", label: "标准编号", width: "200", sortable: true },
  { prop: "S_RealeaseTime", label: "发布日期", width: "200", sortable: true },
  { prop: "S_DoTime", label: "实施日期", width: "200", sortable: true },
]);
const tableData = ref([]);
const pagination = ref({
  currentPage: 1,
  pageSize: 10,
  total: 3,
  handleSizeChange: (val: number) => {
    console.log(val, "handleSizeChange");
    pagination.value.pageSize = val;
    commoninitFn(searchForm.value.selectTypeValue);
  },
  handleCurrentChange: (val: number) => {
    console.log(val, "handleCurrentChange");
    pagination.value.currentPage = val;
    commoninitFn(searchForm.value.selectTypeValue);
  },
});
// 切换
const handleChange = (val: string[]) => {
  activeNames.value = val;
};
const handleRankChange = (val: string[]) => {
  activeRankNames.value = val;
};
//标准检索
const getStandardListByPageFn = async (keywords: any) => {
  tableColumn.value = [
    { prop: "name", label: "标准名称", sortable: true },
    { prop: "no", label: "标准编号", sortable: true },
    { prop: "publishTime", label: "发布日期", sortable: true },
    { prop: "implementTime", label: "实施日期", sortable: true },
    { prop: "operate", label: "操作", width: "200", sortable: false },
  ];
  const res = await searchStandard({
    number: pagination.value.currentPage,
    size: pagination.value.pageSize,
    keywords: keywords,
  });
  tableData.value = res.data.content;
  pagination.value.total = res.data.page.totalElements;
  console.log(res, "res");
};
//术语检索
const getTermStandardListFn = async (keywords: any) => {
  tableColumn.value = [
    { prop: "no", label: "术语编号", sortable: true },
    { prop: "name", label: "中文名称", sortable: true },
    { prop: "enName", label: "英文名称", sortable: true },
    { prop: "article", label: "术语条文", sortable: true },
    { prop: "explanation", label: "术语解释", sortable: true },
    { prop: "standardName", label: "所属标准", sortable: true },
  ];
  const res = await getTermStandardList({
    number: pagination.value.currentPage,
    size: pagination.value.pageSize,
    keywords: keywords,
  });
  tableData.value = res.data.content;
  tableData.value = res.data.content.map((item: any) => {
    return {
      ...item,
      standardName: item.standard.name,
    };
  });
  pagination.value.total = res.data.page.totalElements;
  console.log(res, "res");
};
//条文检索
const getArticleListFn = async (keywords: any) => {
  tableColumn.value = [
    { prop: "no", label: "条文编号", sortable: true },
    { prop: "content", label: "条文内容", sortable: true },
    { prop: "explanation", label: "条文说明", sortable: true },
    { prop: "standardName", label: "所属标准", sortable: true },
  ];
  const res = await getArticleList({
    number: pagination.value.currentPage,
    size: pagination.value.pageSize,
    keywords: keywords,
  });
  tableData.value = res.data.content.map((item: any) => {
    return {
      ...item,
      standardName: item.standard.name,
    };
  });
  pagination.value.total = res.data.page.totalElements;
  console.log(res, "res");
};
watch(
  () => searchForm.value.selectTypeValue,
  (val: any) => {
    // commoninitFn(val);
    if (val == "1") {
      getStandardListByPageFn(searchForm.value.searchValue);
    } else if (val == "2") {
      getArticleListFn(searchForm.value.searchValue);
    } else if (val == "3") {
      getTermStandardListFn(searchForm.value.searchValue);
    }
  },
  { deep: true, immediate: true }
);
const commoninitFn = (val: any) => {
  if (val == "1") {
    getStandardListByPageFn(searchForm.value.searchValue);
  } else if (val == "2") {
    getArticleListFn(searchForm.value.searchValue);
  } else if (val == "3") {
    getTermStandardListFn(searchForm.value.searchValue);
  }
};

// const handleCheck = (data: any) => {
//   console.log(data);
// };
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
