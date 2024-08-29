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
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="item.name == '2'">
        <innerTable
          title="主编单位"
          props="chiefOrganizations"
          @onSubmit="innerTableSubmit"
        ></innerTable>
        <innerTable
          title="参编单位"
          props="participantOrganizations"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <div v-show="item.name == '3'">
        <innerTable
          title="主要起草人"
          props="draftsmen"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <div v-show="item.name == '4'">
        <innerTable
          title="主要审查人"
          props="auditors"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <div v-show="item.name == '5'">
        <innerTable
          :main-table-column="termTableColumn"
          :main-table-data="termTableData"
          props="terms"
          @onSubmit="innerTableSubmit"
          title="术语"
        ></innerTable>
      </div>
      <div v-show="item.name == '6'">
        <innerTable
          :main-table-column="articleTabelColumn"
          :main-table-data="articleTabelData"
          props="articles"
          @onSubmit="innerTableSubmit"
          title="条文"
        ></innerTable>
      </div>
      <div v-show="item.name == '7'">
        <innerTable
          title="引用标准"
          :main-table-column="quotedStandardsColumn"
          :main-table-data="quotedStandardsData"
          props="quotedStandards"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <!-- //保存和关闭按钮，居右 -->
      <div class="my-my-20 row justify-end">
        <el-button type="primary" @click="saveFrom()">保存</el-button>
        <el-button @click="closeFrom">关闭</el-button>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import innerTable from "./component/innertabel.vue";
import { useRouter } from "vue-router";
import {
  createStandard,
  getStandardLabelList,
  getStandardCategoryTree,
} from "@/api/publicInfo.ts";
const router = useRouter();
const activeName = ref<string>("1");
const submitFrom = ref<any>({});
const tabList = ref<any[]>([
  { label: "标准信息", name: "1" },
  { label: "主参编单位", name: "2" },
  { label: "主要起草人", name: "3" },
  { label: "主要审查人", name: "4" },
  { label: "术语", name: "5" },
  { label: "条文", name: "6" },
  { label: "引用标准", name: "7" },
]);
const formItemList = ref<any[]>([
  {
    label: "标准名称",
    prop: "name",
    type: "input",
    placeholder: "请输入标准名称",
    data: "",
  },
  {
    label: "英文名称",
    prop: "enName",
    type: "input",
    placeholder: "请输入英文名称",
    data: "",
  },
  //标准号-input
  {
    label: "标准号",
    prop: "no",
    type: "input",
    placeholder: "请输入标准号",
    data: "",
  },
  //被替代标准名称-input
  {
    label: "被替代标准名称",
    prop: "substitutedName",
    type: "input",
    placeholder: "请输入被替代标准名称",
    data: "",
  },
  //备案号-input
  {
    label: "备案号",
    prop: "recordNo",
    type: "input",
    placeholder: "请输入备案号",
    data: "",
  },
  //被替代标准编号-input
  {
    label: "被替代标准编号",
    prop: "substitutedNo",
    type: "input",
    placeholder: "请输入被替代标准编号",
    data: "",
  },
  //标准序号-input
  {
    label: "标准序号",
    prop: "seqNo",
    type: "input",
    placeholder: "请输入标准序号",
    data: "",
  },
  //标准代次-input
  {
    label: "标准代次",
    prop: "version",
    type: "input",
    placeholder: "请输入标准代次",
    data: "",
  },
  //立项时间-date
  {
    label: "立项时间",
    prop: "initiateTime",
    type: "date",
    placeholder: "请选择立项时间",
    data: "",
  },
  //发布时间-date
  {
    label: "发布时间",
    prop: "publishTime",
    type: "date",
    placeholder: "请选择发布时间",
    data: "",
  },
  //批准时间-date-少一个
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
    prop: "implementTime",
    type: "date",
    placeholder: "请选择实施时间",
    data: "",
  },
  //废止时间
  {
    label: "废止时间",
    prop: "abolishTime",
    type: "date",
    placeholder: "请选择废止时间",
    data: "",
  },
  //强制性分类-select
  {
    label: "强制性分类",
    prop: "mandatoryId",
    type: "select",
    code: 4,
    placeholder: "请选择强制性分类",
    options: [
      { label: "强制性分类1", value: "1" },
      { label: "强制性分类2", value: "2" },
      { label: "强制性分类3", value: "3" },
    ],
  },
  //标准代次-select
  // {
  //   label: "标准代次",
  //   prop: "standardGeneration",
  //   type: "select",
  //   placeholder: "请选择标准代次",
  //   options: [
  //     { label: "标准代次1", value: "1" },
  //     { label: "标准代次2", value: "2" },
  //     { label: "标准代次3", value: "3" },
  //   ],
  // },
  //标准类别-select
  {
    label: "标准类别",
    prop: "labelCategoryId",
    type: "select",
    code: 1,
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
    prop: "labelStatusId",
    type: "select",
    code: 2,
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
    code: 3,
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
    code: 1,
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
    prop: "specialCategoryIds",
    type: "treeSelect",
    code: 2,
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
    prop: "projectIds",
    type: "multipleSelect",
    placeholder: "请选择工程专业分类",
    code: 7,
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
    prop: "projectLifeCycleIds",
    type: "multipleSelect",
    code: 5,
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
    prop: "projectManagementLineIds",
    type: "multipleSelect",
    code: 8,
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
    prop: "buildingIds",
    type: "multipleSelect",
    code: 6,
    placeholder: "请选择建筑类型分类",
    options: [
      { label: "建筑类型分类1", value: "1" },
      { label: "建筑类型分类2", value: "2" },
      { label: "建筑类型分类3", value: "3" },
    ],
    data: [],
  },
]);
//术语column
const termTableColumn = ref([
  //术语编号
  {
    prop: "termNumber",
    label: "术语编号",
    isfrom: true,
    type: "input",
    data: null,
  },
  //中文名称
  {
    prop: "chineseName",
    label: "中文名称",
    isfrom: true,
    type: "input",
    data: null,
  },
  //英文名称
  {
    prop: "englishName",
    label: "英文名称",
    isfrom: true,
    type: "input",
    data: null,
  },
  //术语条文
  {
    prop: "termArticle",
    label: "术语条文",
    isfrom: true,
    type: "input",
    data: null,
  },
  //术语解释
  {
    prop: "termExplanation",
    label: "术语解释",
    isfrom: true,
    type: "input",
    data: null,
  },
  //术语标签
  {
    prop: "termLabel",
    label: "术语标签",
    isfrom: true,
    options: [
      { label: "术语标签1", value: "1" },
      { label: "术语标签2", value: "2" },
      { label: "术语标签3", value: "3" },
    ],
    type: "select",
    data: null,
  },
  //操作
  {
    prop: "operate",
    label: "操作",
    width: "150",
    type: "operate",
    sortable: false,
  },
]);
//术语data
const termTableData = ref([
  {
    termNumber: "1",
    chineseName: "中文名称1",
    englishName: "英文名称1",
    termArticle: "术语条文1",
    termExplanation: "术语解释1",
    termLabel: "术语标签1",
  },
  {
    termNumber: "2",
    chineseName: "中文名称2",
    englishName: "英文名称2",
    termArticle: "术语条文2",
    termExplanation: "术语解释2",
    termLabel: "术语标签2",
  },
  {
    termNumber: "3",
    chineseName: "中文名称3",
    englishName: "英文名称3",
    termArticle: "术语条文3",
    termExplanation: "术语解释3",
    termLabel: "术语标签3",
  },
]);
//条文column
const articleTabelColumn = ref([
  //条文编号
  { prop: "articleNumber", label: "条文编号", isfrom: true, type: "input" },
  //条文
  { prop: "article", label: "条文", isfrom: true, type: "input" },
  //条文说明
  { prop: "articleExplain", label: "条文说明", isfrom: true, type: "input" },
  //条文标签（专业）
  {
    prop: "articleLabel",
    label: "条文标签（专业）",
    isfrom: true,
    options: [
      { label: "条文标签（专业）1", value: "1" },
      { label: "条文标签（专业）2", value: "2" },
      { label: "条文标签（专业）3", value: "3" },
    ],
    type: "select",
  },
  //条文标签（管理）
  {
    prop: "articleLabelManagement",
    label: "条文标签（管理）",
    isfrom: true,
    options: [
      { label: "条文标签（管理）1", value: "1" },
      { label: "条文标签（管理）2", value: "2" },
      { label: "条文标签（管理）3", value: "3" },
    ],
    type: "select",
  },
  //操作
  {
    prop: "operate",
    label: "操作",
    width: "150",
    type: "operate",
    sortable: false,
  },
]);
//条文data
const articleTabelData = ref([
  {
    articleNumber: "1",
    article: "条文1",
    articleExplain: "条文说明1",
    articleLabel: "条文标签（专业）1",
    articleLabelManagement: "条文标签（管理）1",
  },
  {
    articleNumber: "2",
    article: "条文2",
    articleExplain: "条文说明2",
    articleLabel: "条文标签（专业）2",
    articleLabelManagement: "条文标签（管理）2",
  },
  {
    articleNumber: "3",
    article: "条文3",
    articleExplain: "条文说明3",
    articleLabel: "条文标签（专业）3",
    articleLabelManagement: "条文标签（管理）3",
  },
]);
//引用标准column
const quotedStandardsColumn = ref([
  //标准编号
  { prop: "standardNo", label: "标准编号", isfrom: true, type: "input" },
  //标准名称
  { prop: "standardName", label: "标准名称", isfrom: true, type: "input" },
  //操作
  {
    prop: "operate",
    label: "操作",
    width: "150",
    type: "operate",
    sortable: false,
  },
]);
//引用标准data
const quotedStandardsData = ref([
  {
    standardNo: "1",
    standardName: "标准名称1",
  },
  {
    standardNo: "2",
    standardName: "标准名称2",
  },
  {
    standardNo: "3",
    standardName: "标准名称3",
  },
]);
const handleClick = (tab: any) => {
  console.log(tab, "tab");
};
//清除formItemList内的数据
const clearForm = () => {
  formItemList.value.forEach((item) => {
    item.data = "";
  });
};
//保存
const saveFrom = () => {
  formItemList.value.forEach((item) => {
    submitFrom.value[item.prop] = item.data;
  });
  console.log(submitFrom.value, "保存数据");
  createStandardFn();
};
//内部表格提交
const innerTableSubmit = (data: any) => {
  submitFrom.value[data.props] = data.data;
};
//关闭
const closeFrom = () => {
  //返回上一页
  router.go(-1);
  clearForm();
  console.log("关闭");
};
//新增
const createStandardFn = () => {
  // let data = submitFrom.value;
  // createStandard(data).then((res) => {
  //   console.log(res, "res");
  // });
};
//异步获取标签列表
// const getStandardLabelListFn = async (type: any) => {
//   new Promise((resolve, reject) => {
//     getStandardLabelList(type)
//       .then((res) => {
//         console.log(res, "res");
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
//异步获取标准分类树
// const getStandardCategoryTreeFn = async (type: any) => {
//   new Promise((resolve, reject) => {
//     getStandardCategoryTree(type)
//       .then((res) => {
//         console.log(res, "res");
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
const initData = async () => {
  formItemList.value.forEach((item) => {
    if (item.type === "select" || item.type === "multipleSelect") {
      getStandardLabelList({ type: item.code }).then((res: any) => {
        item.options = res.data.map((item: any) => {
          return {
            label: item.name,
            value: item.id,
          };
        });
      });
    }
    if (item.type === "treeSelect") {
      getStandardCategoryTree({ type: item.code }).then((res: any) => {
        item.treedata = getTreeData(res.data);
      });
    }
  });
};
//树形结构递归方法
const getTreeData = (data: any) => {
  return data.map((item: any) => {
    if (item.children) {
      return {
        label: item.name,
        value: item.id,
        children: getTreeData(item.children),
      };
    } else {
      return {
        label: item.name,
        value: item.id,
      };
    }
  });
};
initData();
</script>

<style></style>
