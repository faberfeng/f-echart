<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#001529"
    text-color="#fff"
    @select="handleMenuClick"
    style="border: none; height: calc(100vh - 60px); overflow-y: auto"
  >
    <el-menu-item :index="menuList[0].index">
      <el-icon><House /></el-icon>
      {{ menuList[0].title }}</el-menu-item
    >
    <el-sub-menu
      v-for="item in [menuList[1]]"
      :index="item.index"
      :key="item.index"
    >
      <!-- <template v-if="item.children"></template> -->
      <template #title>
        <el-icon><Notification /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        :index="child.index"
        :key="child.index"
      >
        {{ child.title }}
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item :index="menuList[2].index">
      <el-icon><Odometer /></el-icon>
      {{ menuList[2].title }}</el-menu-item
    >
  </el-menu>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import { Notification, House, Odometer } from "@element-plus/icons-vue";
const router = useRouter();
const menuList = ref<any[]>([
  {
    title: "标准管理",
    index: "1",
    routerLink: "/admin/standardMgt",
  },
  {
    title: "标签管理",
    index: "2",
    children: [
      {
        title: "标准等级标签",
        index: "2-1",
        routerLink: "/admin/labelMgt/standardGrade",
      },
      {
        title: "基础分类标签",
        index: "2-2",
        routerLink: "/admin/labelMgt/basicClassification",
      },
      {
        title: "专题分类标签",
        index: "2-3",
        routerLink: "/admin/labelMgt/specialClassification",
      },
      {
        title: "管理条线标签",
        index: "2-4",
        routerLink: "/admin/labelMgt/managementLine",
      },
      {
        title: "工程专业分类标签",
        index: "2-5",
        routerLink: "/admin/labelMgt/engineeringProfessionalClassification",
      },
      {
        title: "工程全生命周期分类标签",
        index: "2-6",
        routerLink: "/admin/labelMgt/engineeringLifeCycleClassification",
      },
      {
        title: "建筑类型分类标签",
        index: "2-7",
        routerLink: "/admin/labelMgt/buildingTypeClassification",
      },
      {
        title: "时间分类标签",
        index: "2-8",
        routerLink: "/admin/labelMgt/timeClassification",
      },
      {
        title: "编制状态分类标签",
        index: "2-9",
        routerLink: "/admin/labelMgt/compilationStatusClassification",
      },
      {
        title: "术语标签",
        index: "2-10",
        routerLink: "/admin/labelMgt/termLabel",
      },
      {
        title: "条文标签（专业）",
        index: "2-11",
        routerLink: "/admin/labelMgt/clauseLabelProfessional",
      },
      {
        title: "条文标签（管理）",
        index: "2-12",
        routerLink: "/admin/labelMgt/clauseLabelManagement",
      },
    ],
  },
  {
    title: "日志管理",
    index: "3",
    routerLink: "/admin/logMgt",
  },
]);
const handleMenuClick = (index: string) => {
  if (index === "1") {
    router.push({ path: "/admin/standardMgt" });
  } else if (index === "3") {
    router.push({ path: "/admin/logMgt" });
  } else if (index.split("-")[0] === "2") {
    // console.log(
    //   index,
    //   menuList.value[1].children.filter((item: any) => item.index === index)[0],
    //   "index"
    // );
    router.push({
      path: menuList.value[1].children.filter(
        (item: any) => item.index === index
      )[0].routerLink,
    });
  }
  console.log(index, "index");
};
</script>

<style lang="scss" scoped>
.el-menu-item.is-active {
  background-color: #1890ff;
  color: white;
}
</style>
