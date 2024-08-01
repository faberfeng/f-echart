<template>
  <el-form
    :model="formState"
    class="my-mt-20"
    name="basic"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    autocomplete="off"
  >
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input
          v-model="formState.keyword"
          size="large"
          placeholder="请输入发布单位或标准名称"
        />
      </el-col>
      <el-col :span="8">
        <el-form-item label="发布日期:"
          ><el-date-picker
            size="large"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="formState.lunchTime"
          /> </el-form-item
      ></el-col>
      <el-col :span="8">
        <el-button type="primary" @click="handleSearch()">查询</el-button>
        <el-button type="success" @click="resetSearch()">重置</el-button>
      </el-col>
    </el-row>
  </el-form>
  <el-tabs v-model="activeKey" class="demo-tab" @tab-click="handleClick">
    <el-tab-pane
      v-for="item in tabList"
      :label="item.label"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
  <div class="my-mt-15">
    <el-table
      :data="tableData"
      border
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="{ textAlign: 'center' }"
    >
      <el-table-column prop="S_ProjectName" label="序号" />
      <el-table-column prop="S_ProjectNo" label="发布单位" />
      <el-table-column prop="S_ProjectNo" label="标准编号" />
      <el-table-column prop="S_ProjectNo" label="标准名称" />
      <el-table-column prop="S_ReleaseDate" label="发布日期" width="150">
        <template #default="scope">
          <div class="text-canter">
            {{ scope.row.S_ReleaseDate }}
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="S_ID" label="宣贯计划文件" width="150">
        <template #default="scope">
          <el-button
            style="width: 80px; height: 28px"
            type="success"
            class="cursor"
            @click="openFile(scope.row.S_ID)"
            >标准文件</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>
  </div>
  <div class="row justify-center my-mt-20">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[20, 50, 100, 150]"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next, jumper"
      :total="total"
      @change="changePagination"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
  // getStandardReleaseList,
  getFilePathByIdAndTypeNew,
  getGroupStandardInfo,
} from "@/api/publicInfo";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import type { TabsPaneContext } from "element-plus";
type RangeValue = [Dayjs, Dayjs];
const activeKey = ref("all");
interface FormState {
  keyword: any;
  lunchTime: RangeValue | string;
}
const tabList = [
  { label: "全部", name: "all" },
  { label: "上海市建设协会", name: "上海市建设协会" },
  { label: "上海市石材行业协会", name: "上海市石材行业协会" },
  { label: "上海市绿色建筑协会", name: "上海市绿色建筑协会" },
  { label: "上海市装饰装修行业协会", name: "上海市装饰装修行业协会" },
];
const formState = reactive<FormState>({
  keyword: "",
  lunchTime: "",
});
const tableData = ref([]);
// 分页
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();
const background = ref(true);
const disabled = ref(false);
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event, "tab");
  // activeKey.value = tab.name;
  currentPage.value = 1;
  formState.keyword = tab.props.name === "all" ? "" : tab.props.name;
};
const changePagination = () => {
  queryStandardReleaseList();
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
  formState.lunchTime = "";
  queryStandardReleaseList();
};

// 打开文件
const openFile = async (id: string) => {
  await getFilePathByIdAndTypeNew({ id: id, type: "R0901" }).then((res) => {
    //解析文件充blod中解析
    const url = window.URL.createObjectURL(
      new Blob([res], { type: "application/pdf" })
    );
    window.open(url, "_blank");
  });
};

const queryStandardReleaseList = async () => {
  const params = {
    page: currentPage.value,
    rows: pageSize.value,
    keyword: undefined,
    // ReleaseDateBegain: undefined,
    // ReleaseDateEnd: undefined,
  };
  if (formState.keyword) {
    params.keyword = formState.keyword;
  }
  if (formState.lunchTime) {
    params.ReleaseDateBegain = dayjs(formState.lunchTime[0]).format(
      "YYYY-MM-DD"
    );
    params.ReleaseDateEnd = dayjs(formState.lunchTime[1]).format("YYYY-MM-DD");
  }

  await getGroupStandardInfo(params).then((res) => {
    tableData.value = res.data.rows;
    total.value = res.data.records;
  });
};
onMounted(() => {
  queryStandardReleaseList();
});
</script>

<style lang="scss" scoped>
.demo-tab {
  // margin-top: 20px;
  .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
}
:deep(.el-tabs__item) {
  font-size: 18px;
  height: 60px;
}
:deep(.el-button) {
  width: 70px;
  height: 40px;
}
</style>
