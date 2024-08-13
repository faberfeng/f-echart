<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px" style="min-height: 100vh; background: #545c64">
        <Menu />
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "@/components/menu/index.vue";
</script>

<style></style>
