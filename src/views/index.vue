<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        width="210px"
        style="min-height: 100vh; background: #001529; overflow: hidden"
      >
        <div class="sideTop">后台管理平台</div>
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="headerBottom">
          <div><span>欢迎进入标准平台</span></div>
          <div class="cursor" @click="logout()">
            <span class="my-mr-10" style="vertical-align: top">admin</span>
            <el-icon><Avatar /></el-icon>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "@/components/menu/index.vue";
import { Avatar } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const logout = () => {
  router.push("/nav");
};
</script>

<style lang="scss" scoped>
.sideTop {
  height: 59px;
  line-height: 59px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  //   border-bottom: 1px solid #ccc;
}
.headerBottom {
  //   border-bottom: 1px solid #ccc;
  box-shadow: 0 0.36rem 0.71rem 0 rgba(33, 81, 129, 0.1) !important;
  // background: #1890ff;
  background: #0072c6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}
</style>
