<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @click="handleMenuClick"
  >
    <el-submenu v-for="item in menuList" :index="item.index" :key="item.index">
      <template #title>
        <!-- <i class="el-icon-location"></i> -->
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group :title="item.title">
        >
        <el-menu-item
          v-for="child in item.children"
          :index="child.index"
          :key="child.index"
        >
          {{ child.title }}
        </el-menu-item>
      </el-menu-item-group>
      <!-- <el-menu-item
        v-for="child in item.children"
        :index="child.index"
        :key="child.index"
      >
        {{ child.title }}
      </el-menu-item> -->
    </el-submenu>
  </el-menu>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
const menuList = ref<any[]>([
  {
    title: "标准管理",
    index: "1",
  },
  {
    title: "标签管理",
    index: "2",
    children: [
      { title: "选项1", index: "2-1" },
      { title: "选项2", index: "2-2" },
      { title: "选项3", index: "2-3" },
    ],
  },
  {
    title: "日志管理",
    index: "3",
  },
]);
const handleMenuClick = (index: string) => {
  console.log(index);
};
</script>

<style></style>
