<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <Menu />
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <div :style="{ padding: '0 3.14rem' }">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "@/components/menu/index.vue";
</script>

<style></style>
