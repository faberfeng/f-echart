<template>
  <Headers
    style="position: relative !important; margin-bottom: 1.5rem"
    v-if="isDetail"
  />
  <el-tabs
    v-loading="loading"
    type="border-card"
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane v-for="item in tabList" :label="item.label" :name="item.name">
      <!-- {{ item.label }} -->
      <div v-show="item.name == '1'">
        <el-form
          :inline="true"
          :disabled="isDetail"
          label-width="auto"
          label-position="left"
        >
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
            <el-input-number
              style="width: 100%"
              v-else-if="item.type === 'inputNumber'"
              v-model="item.data"
              :placeholder="item.placeholder"
            ></el-input-number>
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
              :multiple="item.multiple"
              :filterable="true"
              :clearable="true"
            ></el-tree-select>
            <!-- item.type=date -->
            <el-date-picker
              v-else-if="item.type === 'date'"
              v-model="item.data"
              style="width: 100%"
              type="date"
              placeholder="选择日期"
              :clearable="true"
              value-format="YYYY-MM-DD HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="item.name == '2'">
        <innerTable
          title="主编单位"
          :is-show="!isDetail"
          props="chiefOrganizations"
          @onSubmit="innerTableSubmit"
          :main-table-column="chiefOrganizationsColumn"
          :main-table-data="submitFrom.chiefOrganizations"
        ></innerTable>
        <innerTable
          title="参编单位"
          props="participantOrganizations"
          :is-show="!isDetail"
          :main-table-column="participantOrganizationsColumn"
          :main-table-data="submitFrom.participantOrganizations"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <div v-show="item.name == '3'">
        <innerTable
          title="主要起草人"
          props="draftsmen"
          :is-show="!isDetail"
          @onSubmit="innerTableSubmit"
          :main-table-column="draftsmenColumn"
          :main-table-data="submitFrom.draftsmen"
        ></innerTable>
      </div>
      <div v-show="item.name == '4'">
        <innerTable
          title="主要审查人"
          props="auditors"
          :is-show="!isDetail"
          :main-table-column="auditorsColumn"
          :main-table-data="submitFrom.auditors"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <div v-show="item.name == '5'">
        <innerTable
          :main-table-column="termTableColumn"
          :main-table-data="submitFrom.terms"
          props="terms"
          :is-show="!isDetail"
          @onSubmit="innerTableSubmit"
          title="术语"
        ></innerTable>
      </div>
      <div v-show="item.name == '6'">
        <innerTable
          :main-table-column="articleTabelColumn"
          :main-table-data="submitFrom.articles"
          props="articles"
          :is-show="!isDetail"
          @onSubmit="innerTableSubmit"
          title="条文"
        ></innerTable>
      </div>
      <div v-show="item.name == '7'">
        <innerTable
          title="引用标准"
          :main-table-column="quotedStandardsColumn"
          :main-table-data="submitFrom.quotedStandards"
          props="quotedStandards"
          :is-show="!isDetail"
          @onSubmit="innerTableSubmit"
        ></innerTable>
      </div>
      <!-- //保存和关闭按钮，居右 -->
      <div class="my-my-20 row justify-end">
        <el-button v-if="!isDetail" type="primary" @click="saveFrom()"
          >保存</el-button
        >
        <el-button @click="closeFrom">关闭</el-button>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import innerTable from "./component/innertabel.vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import Headers from "@/components/Header/index.vue";
import {
  createStandard,
  getStandardLabelList,
  getStandardCategoryTree,
  getStandard,
  updateStandard,
} from "@/api/publicInfo.ts";
import { onMounted } from "vue";
const router = useRouter();
const activeName = ref<string>("1");
const curtype = ref<any>("add");
const loading = ref<boolean>(false);
const isDetail = ref<boolean>(false);
const submitFrom = ref<any>({
  chiefOrganizations: [],
  participantOrganizations: [],
  draftsmen: [],
  auditors: [],
  terms: [],
  articles: [],
  quotedStandards: [],
});
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
    data: null,
  },
  {
    label: "英文名称",
    prop: "enName",
    type: "input",
    placeholder: "请输入英文名称",
    data: null,
  },
  //标准号-input
  {
    label: "标准号",
    prop: "no",
    type: "input",
    placeholder: "请输入标准号",
    data: null,
  },
  //被替代标准名称-input
  {
    label: "被替代标准名称",
    prop: "substitutedName",
    type: "input",
    placeholder: "请输入被替代标准名称",
    data: null,
  },
  //备案号-input
  {
    label: "备案号",
    prop: "recordNo",
    type: "input",
    placeholder: "请输入备案号",
    data: null,
  },
  //被替代标准编号-input
  {
    label: "被替代标准编号",
    prop: "substitutedNo",
    type: "input",
    placeholder: "请输入被替代标准编号",
    data: null,
  },
  //标准序号-input
  {
    label: "标准序号",
    prop: "seqNo",
    type: "input",
    placeholder: "请输入标准序号",
    data: null,
  },
  //标准代次-input
  {
    label: "标准代次",
    prop: "version",
    type: "inputNumber",
    placeholder: "请输入标准代次",
    data: null,
  },
  //立项时间-date
  {
    label: "立项时间",
    prop: "initiateTime",
    type: "date",
    placeholder: "请选择立项时间",
    data: null,
  },
  //发布时间-date
  {
    label: "发布时间",
    prop: "publishTime",
    type: "date",
    placeholder: "请选择发布时间",
    data: null,
  },
  //批准时间-date-少一个
  {
    label: "批准时间",
    prop: "approvalTime",
    type: "date",
    placeholder: "请选择批准时间",
    data: null,
  },
  //实施时间-date
  {
    label: "实施时间",
    prop: "implementTime",
    type: "date",
    placeholder: "请选择实施时间",
    data: null,
  },
  //废止时间
  {
    label: "废止时间",
    prop: "abolishTime",
    type: "date",
    placeholder: "请选择废止时间",
    data: null,
  },
  //强制性分类-select
  {
    label: "强制性分类",
    prop: "mandatoryId",
    type: "select",
    code: 4,
    placeholder: "请选择强制性分类",
    options: [],
    data: null,
  },
  //标准类别-select
  {
    label: "标准类别",
    prop: "labelCategoryId",
    type: "select",
    code: 1,
    placeholder: "请选择标准类别",
    options: [],
    data: null,
  },
  //标准状态-select
  {
    label: "标准状态",
    prop: "labelStatusId",
    type: "select",
    code: 2,
    placeholder: "请选择标准状态",
    options: [],
    data: null,
  },
  //编制状态-select
  {
    label: "编制状态",
    // prop: "preparationStatus",
    prop: "compileStatusId",
    type: "select",
    code: 3,
    placeholder: "请选择编制状态",
    options: [],
    data: null,
  },
  //基础分类-treeSelect
  {
    label: "基础分类",
    // prop: "basicClassification",
    prop: "baseCategoryId",
    type: "treeSelect",
    code: 1,
    treedata: [],
    placeholder: "请输入基础分类",
    data: null,
  },

  //专题分类-treeSelect
  {
    label: "专题分类",
    prop: "specialCategoryIds",
    type: "treeSelect",
    multiple: true,
    code: 2,
    treedata: [],
    placeholder: "请输入专题名称",
    data: undefined,
  },
  //工程专业分类-multipleSelect
  {
    label: "工程专业分类",
    prop: "projectIds",
    type: "multipleSelect",
    placeholder: "请选择工程专业分类",
    code: 7,
    options: [],
    data: [],
  },
  //工程全生命周期分类-multipleSelect
  {
    label: "工程全生命周期分类",
    prop: "projectLifeCycleIds",
    type: "multipleSelect",
    code: 5,
    placeholder: "请选择工程全生命周期分类",
    options: [],
    data: [],
  },
  //管理条线分类-multipleSelect
  {
    label: "管理条线分类",
    prop: "projectManagementLineIds",
    type: "multipleSelect",
    code: 8,
    placeholder: "请选择管理条线分类",
    options: [],
    data: [],
  },
  //建筑类型分类-multipleSelect
  {
    label: "建筑类型分类",
    prop: "buildingIds",
    type: "multipleSelect",
    code: 6,
    placeholder: "请选择建筑类型分类",
    options: [],
    data: [],
  },
]);
//主参编单位column
const chiefOrganizationsColumn = ref([
  //单位名称
  {
    prop: "name",
    label: "单位名称",
    isfrom: true,
    type: "input",
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
//参编单位column
const participantOrganizationsColumn = ref([
  //单位名称
  {
    prop: "name",
    label: "单位名称",
    isfrom: true,
    type: "input",
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
//主要起草人column
const draftsmenColumn = ref([
  //单位名称
  {
    prop: "name",
    label: "姓名",
    isfrom: true,
    type: "input",
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
//主要审查人column
const auditorsColumn = ref([
  //单位名称
  {
    prop: "name",
    label: "姓名",
    isfrom: true,
    type: "input",
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
//术语column
const termTableColumn = ref([
  //术语编号
  {
    prop: "no",
    label: "术语编号",
    isfrom: true,
    type: "input",
    data: null,
  },
  //中文名称
  {
    prop: "name",
    label: "中文名称",
    isfrom: true,
    type: "input",
    data: null,
  },
  //英文名称
  {
    prop: "enName",
    label: "英文名称",
    isfrom: true,
    type: "input",
    data: null,
  },
  //术语条文
  {
    prop: "article",
    label: "术语条文",
    isfrom: true,
    type: "input",
    data: null,
  },
  //术语解释
  {
    prop: "explanation",
    label: "术语解释",
    isfrom: true,
    type: "input",
    data: null,
  },
  //术语标签
  {
    prop: "termLabelIds",
    label: "术语标签",
    isfrom: true,
    options: [],
    type: "select",
    parentId: 9,
    data: undefined,
    // data: undefined,
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
//条文column
const articleTabelColumn = ref([
  //条文编号
  { prop: "no", label: "条文编号", isfrom: true, type: "input", data: null },
  //条文
  { prop: "content", label: "条文", isfrom: true, type: "input", data: null },
  //条文说明
  {
    prop: "explanation",
    label: "条文说明",
    isfrom: true,
    type: "input",
    data: null,
  },
  //条文标签（专业）
  {
    prop: "articleSpecialLabelIds",
    label: "条文标签（专业）",
    isfrom: true,
    options: [],
    type: "select",
    parentId: 10,
    data: null,
  },
  //条文标签（管理）
  {
    prop: "articleManageLabelIds",
    label: "条文标签（管理）",
    isfrom: true,
    options: [],
    parentId: 11,
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
//条文data
//引用标准column
const quotedStandardsColumn = ref([
  //标准编号
  { prop: "no", label: "标准编号", isfrom: true, type: "input", data: null },
  //标准名称
  { prop: "name", label: "标准名称", isfrom: true, type: "input", data: null },
  //操作
  {
    prop: "operate",
    label: "操作",
    width: "150",
    type: "operate",
    sortable: false,
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
  if (curtype.value === "edit") {
    console.log("编辑");
    updateStandardFn();
  } else if (curtype.value === "add") {
    console.log("新增");
    createStandardFn();
  }
};
//内部表格提交
const innerTableSubmit = (data: any) => {
  submitFrom.value[data.props] = data.data;
};
//关闭
const closeFrom = () => {
  //返回上一页
  loading.value = false;
  router.go(-1);
  clearForm();
  console.log("关闭");
};
//新增
const createStandardFn = () => {
  let data = submitFrom.value;
  createStandard(data).then((res: any) => {
    console.log(res, "res");
    if (res.code === 200) {
      ElMessage({
        message: "新增成功",
        type: "success",
      });
      router.go(-1);
      return;
    }
    ElMessage({
      message: res.msg,
      type: "error",
    });
  });
};
//编辑
const updateStandardFn = () => {
  let data = submitFrom.value;
  updateStandard(data).then((res: any) => {
    console.log(res, "res");
    if (res.code === 200) {
      ElMessage({
        message: "编辑成功",
        type: "success",
      });
      router.go(-1);
      return;
    }
    ElMessage({
      message: res.msg,
      type: "error",
    });
  });
};
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
  //初始化innerTable的选择框的数据，术语标签，条文标签（专业），条文标签（管理）等三种
  //术语标签
  termTableColumn.value.forEach((item) => {
    if (item.type === "select") {
      getStandardLabelList({ type: item.parentId }).then((res: any) => {
        item.options = res.data.map((item: any) => {
          return {
            label: item.name,
            value: item.id,
          };
        });
      });
    }
  });
  //条文标签（专业），条文标签（管理）
  articleTabelColumn.value.forEach((item) => {
    if (item.type === "select") {
      getStandardLabelList({ type: item.parentId }).then((res: any) => {
        item.options = res.data.map((item: any) => {
          return {
            label: item.name,
            value: item.id,
          };
        });
      });
    }
  });
  console.log(
    termTableColumn.value,
    articleTabelColumn.value,
    "111111formItemList"
  );
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
onMounted(() => {
  console.log("mounted");
  // getStandard
  let id = router.currentRoute.value.query.id;
  curtype.value = router.currentRoute.value.query.type;
  isDetail.value = curtype.value === "detail";
  if (id) {
    loading.value = true;
    getStandard({ id }).then((res: any) => {
      console.log(res, "res");
      let mapSelData: any = {
        mandatoryId: "mandatory",
        labelCategoryId: "labelCategory",
        labelStatusId: "labelStatus",
        compileStatusId: "compileStatus",
      };
      let mapTreeSelData: any = {
        specialCategoryIds: "specialCategory",
        baseCategoryId: "baseCategory",
      };
      let mapMultipleSelData: any = {
        projectIds: "projects",
        projectLifeCycleIds: "projectLifeCycle",
        projectManagementLineIds: "projectManagementLines",
        buildingIds: "buildings",
      };
      formItemList.value.forEach((item) => {
        item.data = res.data[item.prop];
        //处理下拉框的数据
        if (item.type === "select") {
          if (mapSelData[item.prop]) {
            item.data = res.data[mapSelData[item.prop]]?.standardLabelId;
          }
        }
        //处理树形下拉框的数据
        if (item.type === "treeSelect") {
          if (mapTreeSelData[item.prop]) {
            if (
              res.data[mapTreeSelData[item.prop]] instanceof Array &&
              res.data[mapTreeSelData[item.prop]].length > 0
            ) {
              item.data = res.data[mapTreeSelData[item.prop]].map(
                (item: any) => item.standardCategoryId
              );
            } else {
              item.data =
                res.data[mapTreeSelData[item.prop]]?.standardCategoryId;
            }
          }
        }
        //处理多选下拉框的数据
        if (item.type === "multipleSelect") {
          if (mapMultipleSelData[item.prop]) {
            item.data = res.data[mapMultipleSelData[item.prop]].map(
              (item: any) => item.standardLabelId
            );
          }
        }
      });
      Object.keys(submitFrom.value).forEach((key) => {
        submitFrom.value[key] = res.data[key];
      });
      loading.value = false;
      console.log(submitFrom.value, "submitFrom09876");
    });
  }
});
</script>

<style></style>
