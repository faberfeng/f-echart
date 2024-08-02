<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content relative">
      <Title title="团体标准信息"></Title>
      <el-tabs v-model="activeKey">
        <el-tab-pane label="团体标准信息" name="1">
          <PageOne></PageOne>
        </el-tab-pane>
      </el-tabs>
      <div class="floatTag" @click="switchLogin">
        <img src="@/assets/imgs/edit.png" alt="" />
        <span class="tagspan">团体标准信息填报</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Title from "@/components/Title/index.vue";
import PageOne from "./components/PageOne.vue";
import { ref } from "vue";
const activeKey = ref("1");
const switchLogin = () => {
  window.open(
    "https://ciac.zjw.sh.gov.cn/CIACuserportal/SSO/Login.aspx",
    "_blank"
  );
};
</script>
<style lang="scss" scoped>
:deep(.el-tabs__item) {
  font-size: 18px;
  height: 60px;
}
.floatTag {
  position: absolute;
  right: -90px;
  top: 14%;
  cursor: pointer;
  img {
    width: 80px;
    height: 80px;
  }
  .tagspan {
    display: block;
    width: 80px;
    height: 14px;
    font-size: 10px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #969696;
    line-height: 14px;
  }
}
</style>
