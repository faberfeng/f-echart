<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content text-center">
      <h2 style="font-size: 1.5rem" class="my-my-15">{{ fileInfo.title }}</h2>
      <div style="height: 60px">
        <a style="color: rgb(0, 115, 212)" @click="openFile()">{{ fileInfo.name }} 下载</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import { getDetailViewNew1, getFilePathByIdNew } from "@/api/publicInfo";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

interface FileInfo {
  title: string;
  name: string;
  id: string;
}
const fileInfo = reactive<FileInfo>({
  title: "",
  name: "",
  id: "",
});

// 打开文件
const openFile = async () => {
  await getFilePathByIdNew(fileInfo.id).then((res) => {
    //解析文件充blod中解析
    const url = window.URL.createObjectURL(new Blob([res], { type: "application/pdf" }));
    window.open(url, "_blank");
  });
};

const queryDetailViewNew1 = async () => {
  await getDetailViewNew1({
    keyValue: route.query.S_ID,
  }).then((res) => {
    console.log(res);
    fileInfo.title = res.data.title;
    fileInfo.name = res.data.paperfile.title;
    fileInfo.id = res.data.paperfile.id;
  });
};
onMounted(() => {
  queryDetailViewNew1();
});
</script>

<style lang="scss" scoped></style>
