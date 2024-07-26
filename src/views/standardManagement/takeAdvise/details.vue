<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <div class="table_header">征求意见详情</div>
      <el-table :data="tableData" border :show-header="false" :cell-style="{ textAlign: 'center' }" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="value" label="value" />
      </el-table>
      <h3 class="my-my-20">征求意见函</h3>
      <div v-html="rawHtml"></div>
      <p>
        <a class="getSuggestionDetail_P_A" @click="openFile()">征求意见稿</a>
      </p>
      <p>
        <a class="getSuggestionDetail_P_A" @click="openform()"> 意见表</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import { getStandardReleaseById, getFilePathByIdAndTypeNew } from "@/api/publicInfo";
import { ref, onMounted } from "vue";
import { dayjs } from "element-plus";
import { useRoute } from "vue-router";
const route = useRoute();
const tableData = [
  {
    name: "项目编号",
    value: null,
  },
  {
    name: "项目名称",
    value: null,
  },
  {
    name: "截止日期",
    value: null,
  },
];
const rawHtml = ref();
const queryStandardReleaseById = async () => {
  await getStandardReleaseById({
    id: route.query.S_ID,
  }).then((res) => {
    console.log(res);
    tableData[0].value = res.data.S_ProjectNo;
    tableData[1].value = res.data.S_ProjectName;
    tableData[2].value = dayjs(res.data.S_A2).format("YYYY-MM-DD");
    rawHtml.value = res.data.S_FileAddress;
  });
};
// 打开文件
const openFile = async () => {
  await getFilePathByIdAndTypeNew({ id: route.query.S_ID, type: "R0501" }).then((res) => {
    //解析文件充blod中解析
    const url = window.URL.createObjectURL(new Blob([res], { type: "application/pdf" }));
    window.open(url, "_blank");
  });
};
// 打开表单
const openform = async () => {
  await getFilePathByIdAndTypeNew({ id: route.query.S_ID, type: "R0502" }).then((res) => {
    //解析文件充blod中解析
    const url = window.URL.createObjectURL(new Blob([res], { type: "application/pdf" }));
    window.open(url, "_blank");
  });
};

onMounted(() => {
  console.log(route.query.S_ID);
  queryStandardReleaseById();
});
</script>

<style lang="scss" scoped>
.table_header {
  border: 1px solid #ebeef5;
  color: #fff;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #599beb;
  font-weight: 700;
  margin-top: 30px;
}
.getSuggestionDetail_P_A {
  cursor: pointer;
  color: #0073d4;
  text-decoration: underline;
}
p {
  margin-bottom: 16px;
}
</style>
<style lang="scss">
p {
  margin-bottom: 16px;
}
</style>
