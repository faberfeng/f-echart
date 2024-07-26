<template>
  <div>
    <el-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input v-model="formState.keyword" size="large" placeholder="请输入标准编号或标准名称" />
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目类型:">
            <el-button type="primary" @click="selectProjectType('')">全部</el-button>
            <el-button type="primary" @click="selectProjectType(1)">新编</el-button>
            <el-button type="primary" @click="selectProjectType(2)">修订</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" @click="handleSearch()">查询</el-button>
          <el-button type="success" @click="resetSearch()">重置</el-button>
        </el-col>
        <el-col :span="8">
          <el-form-item label="发布日期:"
            ><el-date-picker size="large" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="formState.lunchTime" /> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="实施日期:"
            ><el-date-picker size="large" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="formState.applyTime" /> </el-form-item
        ></el-col>
      </el-row>
    </el-form>
  </div>

  <el-table :data="tableData" border :cell-style="{ textAlign: 'center' }" :header-cell-style="{ textAlign: 'center' }">
    <el-table-column prop="S_ProjectName" label="标准名称" />
    <el-table-column prop="S_ProjectNo" label="标准编号" />
    <el-table-column prop="S_A2" label="发布日期">
      <template #default="scope">
        <div class="text-canter">
          {{ formatTime(scope.row.S_A2) }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="S_A1" label="实施日期">
      <template #default="scope">
        <div class="text-canter">
          {{ formatTime(scope.row.S_A1) }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="S_ProjectType" label="项目类型">
      <template #default="scope">
        {{ scope.row.S_ProjectType == 1 ? "新编" : scope.row.S_ProjectType == 2 ? "修订" : "-" }}
      </template>
    </el-table-column>
    <el-table-column prop="S_ID" label="标准文件">
      <template #default="scope">
        <el-button style="width: 98px" type="primary" class="cursor" @click="openFile(scope.row.S_ID)">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="row justify-center my-mt-20">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[20, 50, 100, 150]"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next, jumper"
      :total="total"
      @change="changePagination" />
  </div>
</template>

<script setup lang="ts">
import { Document, ChatLineSquare } from "@element-plus/icons-vue";
import { onMounted, reactive, ref } from "vue";
import { getStandardReleaseList, getFilePathByIdAndTypeNew } from "@/api/publicInfo";
import { dayjs } from "element-plus";
import type { Dayjs } from "dayjs";

type RangeValue = [Dayjs, Dayjs];
interface FormState {
  keyword: string;
  S_ProjectType: string | number;
  lunchTime: RangeValue | undefined;
  applyTime: RangeValue | undefined;
}

// 查询表单
const formState = reactive<FormState>({
  keyword: "",
  S_ProjectType: "",
  lunchTime: undefined,
  applyTime: undefined,
});

// 选项
const options = [
  {
    value: "",
    label: "全部",
  },
  {
    value: 1,
    label: "强制性标准",
  },
  {
    value: 2,
    label: "推荐性标准",
  },
];

// 表格数据
const tableData = ref([]);

// 分页
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();
const background = ref(true);
const disabled = ref(false);
const changePagination = () => {
  queryStandardReleaseList();
};

// 格式化时间样式
const formatTime = (time: string) => {
  return dayjs(time).format("YYYY-MM-DD");
};

// 搜索
const handleSearch = () => {
  currentPage.value = 1;
  queryStandardReleaseList();
};

// 重置
const resetSearch = () => {
  currentPage.value = 1;
  formState.keyword = "";
  formState.S_ProjectType = "";
  formState.lunchTime = undefined;
  formState.applyTime = undefined;
  queryStandardReleaseList();
};

const selectProjectType = (val) => {
  formState.S_ProjectType = val;
  queryStandardReleaseList();
};

// 打开文件
const openFile = async (id: string) => {
  await getFilePathByIdAndTypeNew({ id: id, type: "R0401" }).then((res) => {
    //解析文件充blod中解析
    const url = window.URL.createObjectURL(new Blob([res], { type: "application/pdf" }));
    window.open(url, "_blank");
  });
};

//查询列表
const queryStandardReleaseList = async () => {
  const params = {
    pagination: JSON.stringify({
      page: currentPage.value,
      rows: pageSize.value,
      sord: "ASC",
      sidx: "S_CreateDate",
    }),
    queryJson: JSON.stringify({
      type: 4,
      S_Status: 1,
      keyword: formState.keyword,
      S_ProjectType: formState.S_ProjectType,
      ...(formState.lunchTime && {
        S_A1_Begin: dayjs(formState.lunchTime[0]).format("YYYY-MM-DD"),
        S_A1_End: dayjs(formState.lunchTime[1]).format("YYYY-MM-DD"),
      }),
      ...(formState.applyTime && {
        S_A2_Begin: dayjs(formState.applyTime[0]).format("YYYY-MM-DD"),
        S_A2_End: dayjs(formState.applyTime[1]).format("YYYY-MM-DD"),
      }),
    }),
  };
  await getStandardReleaseList(params).then((res) => {
    tableData.value = res.data.rows;
    total.value = res.data.records;
  });
};

onMounted(() => {
  queryStandardReleaseList();
});
</script>

<style lang="scss" scoped>
:deep(.el-button) {
  width: 70px;
  height: 40px;
}
</style>
