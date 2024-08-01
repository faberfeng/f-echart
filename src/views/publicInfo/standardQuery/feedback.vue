<template>
  <Header></Header>
  <div class="my-pb-20">
    <div class="content">
      <div class="my-my-20 text-center fs-20 fw-bold">
        {{ name }}项目意见反馈
      </div>
      <div class="my-mb-20 text-center fs-18 fw-bold">
        反馈意见项目：{{ projectName }}
      </div>
      <div class="justify-center align-middle row">
        <el-form
          :inline="true"
          :model="formState"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 18 }"
          autocomplete="off"
        >
          <a-row :gutter="20" justify="space-between">
            <a-col :span="8">
              <el-form-item label="姓名:">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="姓名"
                />
              </el-form-item>
            </a-col>
            <a-col :span="8">
              <el-form-item label="所在单位:">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="所在单位"
                />
              </el-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="20" justify="space-between">
            <a-col :span="8">
              <el-form-item label="职务职称:">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="职务职称"
                />
              </el-form-item>
            </a-col>
            <a-col :span="8">
              <el-form-item label="专业领域:">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="专业领域"
                />
              </el-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="20" justify="space-between">
            <a-col :span="8">
              <el-form-item label="手机:">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="手机"
                />
              </el-form-item>
            </a-col>
            <a-col :span="8">
              <el-form-item label="电子邮箱:">
                <el-input
                  v-model="formState.keyword"
                  size="large"
                  placeholder="电子邮箱"
                />
              </el-form-item>
            </a-col>
          </a-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import { useRoute } from "vue-router";
import { reactive } from "vue";
const route = useRoute();
const projectName = route.query.S_ProjectName;
const name = route.query.name;
const formState = reactive({
  keyword: "",
});
</script>

<style lang="scss" scoped></style>
