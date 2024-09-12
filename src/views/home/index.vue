<template>
  <div>
    <Headers />
    <el-row class="my-px-80 my-py-70" :gutter="0" justify="space-between">
      <el-col :span="4" class="scroll">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="(item, index) in collapseItemList"
            :title="item.title"
            :name="item.name"
            :key="index"
            class="my-mb-5"
          >
            <div class="border_content scroll-x">
              <el-tree
                :ref="item.name"
                show-checkbox
                :check-strictly="true"
                :check-on-click-node="true"
                :expand-on-click-node="false"
                :data="item.children"
                :props="propsdata"
                node-key="id"
                @check-change="handleCheck($event, item, index)"
              ></el-tree>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="15">
        <el-row :gutter="10" justify="space-between" class="my-mb-20">
          <el-col :span="24">
            <el-input
              v-model="searchForm.searchValue"
              placeholder="请输入标准名称或编号"
              @clear="handleValueReset"
              size="large"
            >
              <template #prepend>
                <el-select
                  v-model="searchForm.selectTypeValue"
                  placeholder="请选择"
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
          @detailTable="detailTable"
        ></TableData>
      </el-col>
      <el-col :span="4" class="scroll">
        <el-collapse v-model="activeRankNames" @change="handleRankChange">
          <el-collapse-item
            style="background: #e3ecfd; color: #333"
            v-for="(item, index) in rankCollapseItemList"
            :title="item.titlenum"
            :name="item.name"
            :key="index"
            class="my-mb-5"
          >
            <div class="border_content">
              <el-tree
                :data="item.children"
                :props="propsdata"
                :highlight-current="false"
              ></el-tree>
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
import { ElTree } from "element-plus";
import {
  searchStandard,
  getTermStandardList,
  getArticleList,
  getStandardLabelList,
  getStandardCategoryTree,
} from "@/api/publicInfo.ts";
import TableData from "@/components/Table/index.vue";
import Headers from "@/components/Header/index.vue";
import router from "@/router/index";
const activeNames = ref<string[]>([
  "standardGrade",
  "baseCategoryCount",
  "specialCategoryCount",
]);
const activeRankNames = ref<string[]>([
  "chiefOrganizationsCount",
  "participantOrganizationsCount",
  "draftsmenCounts",
  "auditorsCounts",
]);
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

const collapseItemList = ref([
  {
    title: "标准等级",
    value: 1,
    type: "flat",
    titlenum: "",
    count: 0,
    name: "standardGrade",
    children: [],
  },
  {
    title: "基础分类",
    type: "tree",
    value: 1,
    titlenum: "",
    count: 0,
    name: "baseCategoryCount",
    children: [],
  },
  {
    title: "专项分类",
    type: "tree",
    value: 2,
    titlenum: "",
    count: 0,
    name: "specialCategoryCount",
    children: [],
  },
]);
const rankCollapseItemList = ref([
  {
    title: "主编单位排名",
    name: "chiefOrganizationsCount",
    titlenum: "",
    count: 0,
    children: [],
  },
  {
    title: "参编单位排名",
    name: "participantOrganizationsCount",
    titlenum: "",
    count: 0,
    children: [],
  },
  {
    title: "起草人员排名",
    name: "draftsmenCounts",
    titlenum: "",
    count: 0,
    children: [],
  },
  {
    title: "审查人员排名",
    name: "auditorsCounts",
    titlenum: "",
    count: 0,
    children: [],
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
const detailTable = (row: any) => {
  console.log(row, "row");
  router.push({
    path: "/home/addStandard/detail",
    query: {
      type: "detail",
      id: row.id,
    },
  });
};
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
const labelIds = ref([]);

const categoryIds = ref([]);
const baseCategoryIds = ref([]);
const specialCategoryIds = ref([]);
//标准检索
const getStandardListByPageFn = async (keywords: any) => {
  tableColumn.value = [
    { prop: "name", label: "标准名称", sortable: true },
    { prop: "no", label: "标准编号", sortable: true },
    { prop: "publishTime", label: "发布日期", sortable: true },
    { prop: "implementTime", label: "实施日期", sortable: true },
    { prop: "detail", label: "操作", width: "200", sortable: false },
  ];
  const res = await searchStandard({
    number: pagination.value.currentPage - 1,
    size: pagination.value.pageSize,
    keywords: keywords,
    labelCategoryIds: labelIds.value,
    baseCategoryIds: baseCategoryIds.value,
    specialCategoryIds: specialCategoryIds.value,
    // sortOrder: "asc",
  });
  tableData.value = res.data.content;
  pagination.value.total = res.data.page.totalElements;
  Object.keys(res.data).forEach((key) => {
    getRankData(key, res.data[key]);
  });
  getLabelCount(res.data.labelCount);
  getCategoryCount(res.data.categoryCount);
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
    number: pagination.value.currentPage - 1,
    size: pagination.value.pageSize,
    keywords: keywords,
    labelIds: labelIds.value,
    categoryIds: categoryIds.value,
  });
  tableData.value = res.data.content;
  tableData.value = res.data.content.map((item: any) => {
    return {
      ...item,
      standardName: item.standard.name,
    };
  });
  pagination.value.total = res.data.page.totalElements;
  Object.keys(res.data).forEach((key) => {
    getRankData(key, res.data[key]);
  });
  getLabelCount(res.data.labelCount);
  getCategoryCount(res.data.categoryCount);
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
    number: pagination.value.currentPage - 1,
    size: pagination.value.pageSize,
    keywords: keywords,
    labelIds: labelIds.value,
    categoryIds: categoryIds.value,
  });
  tableData.value = res.data.content.map((item: any) => {
    return {
      ...item,
      standardName: item.standard.name,
    };
  });
  pagination.value.total = res.data.page.totalElements;
  Object.keys(res.data).forEach((key) => {
    getRankData(key, res.data[key]);
  });
  getLabelCount(res.data.labelCount);
  getCategoryCount(res.data.categoryCount);
  console.log(res, "res");
};
//右边排行榜数据
const getRankData = async (key: any, data: any) => {
  rankCollapseItemList.value.forEach((item) => {
    if (item.name == key) {
      item.count = 0;
      data.forEach((num: any) => {
        item.count += num.count;
      });
      item.titlenum = `${item.title} (${item.count})`;
      item.children = data.map((item: any) => {
        return {
          name: `${item.name} (${item.count})`,
        };
      });
    }
  });
};
//左边树结构的数字-标签等级
// const getLabelCount = async (key: any, data: any) => {
//   let childrens: any = [];
//   childrens = collapseItemList.value.filter((item: any) => {
//     return item.type == "flat";
//   })[0].children;
//   childrens.forEach((item: any) => {
//     // item.name = item.count ? `${item.label} (${item.count})` : item.label;
//     item.count = null;
//     console.log(item, "item11");
//     if (item.id == key) {
//       console.log(item, "item111");
//       item.count = data;
//       item.name = `${item.label} (${item.count})`;
//       // return;
//     }
//   });
// };
const getLabelCount = (data: any) => {
  console.log(data, "data111111");
  let childrens: any = [];
  childrens = collapseItemList.value.filter((item: any) => {
    return item.type == "flat";
  })[0].children;
  childrens.forEach((item: any) => {
    item.name = item.label;
    Object.keys(data).forEach((key) => {
      if (item.id == key) {
        item.count = data[key];
        item.name = `${item.label} (${item.count})`;
      }
    });
  });
};
//左边树结构的数字-基础和专项分类
// const getCategoryCount = async (key: any, data: any) => {
//   let childrens: any = [];
//   childrens = collapseItemList.value.filter((item: any) => {
//     return item.type == "tree";
//   })[0].children;
//   recursion(key, data, childrens);
//   console.log(childrens, "childrens");
// };
// const recursion = (key: any, data: any, children: any) => {
//   children.forEach((child: any) => {
//     if (child.id == key) {
//       child.count = data;
//       child.name = `${child.label} (${data})`;
//     }
//     if (child.children) {
//       recursion(key, data, child.children);
//     }
//   });
// };
const getCategoryCount = async (data: any) => {
  // nextTick(() => {
  let childrens: any = [];
  childrens = collapseItemList.value.filter((item: any) => {
    return item.type == "tree";
  })[0].children;
  console.log(childrens, data, "data99999");
  recursionTreeCount(data, childrens);

  // let childrens: any = [];
  // childrens = collapseItemList.value.filter((item: any) => {
  //   return item.type == "tree";
  // })[0].children;
  // console.log(childrens, data, "data99999");
  // recursionTreeCount(data, childrens);
};
const recursionTreeCount = (data: any, children: any) => {
  children.forEach((child: any) => {
    child.name = child.label;
    Object.keys(data).forEach((key) => {
      if (child.id == key) {
        child.count = data[key];
        child.name = `${child.label} (${child.count})`;
      }
    });
    if (child.children) {
      recursionTreeCount(data, child.children);
    }
  });
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
// const standardGrade = ref<InstanceType<typeof ElTree>>();
// const baseCategoryCount = ref<InstanceType<typeof ElTree>>();
// const specialCategoryCount = ref<InstanceType<typeof ElTree>>();
const standardGrade = ref(null);
const baseCategoryCount = ref(null);
const specialCategoryCount = ref(null);
// 选中左边树
const handleCheck = (data: any, item: any, index: any) => {
  console.log(data, item, index, standardGrade.value);
  const labelId = standardGrade.value[0]?.getCheckedKeys();
  console.log(labelId, "labelId999");
  labelIds.value = labelId;
  const categoryIds1 = baseCategoryCount.value[0]?.getCheckedKeys();
  baseCategoryIds.value = categoryIds1;
  const categoryIds2 = specialCategoryCount.value[0]?.getCheckedKeys();
  specialCategoryIds.value = categoryIds2;
  const categoryId = categoryIds1.concat(categoryIds2);
  categoryIds.value = categoryId;
  commoninitFn(searchForm.value.selectTypeValue);
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
      // commoninitFn(searchForm.value.selectTypeValue);
    } else {
      getStandardCategoryTreeFn(item.value);
      // commoninitFn(searchForm.value.selectTypeValue);
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
        item.children = res.data.map((item: any) => {
          return {
            ...item,
            label: item.name,
          };
        });
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
        recursionTree(res.data);
        item.children = res.data;
      }
    }
  });
};
//递归给树结构添加label属性
const recursionTree = (data: any) => {
  data.forEach((item: any) => {
    item.label = item.name;
    if (item.children) {
      recursionTree(item.children);
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
