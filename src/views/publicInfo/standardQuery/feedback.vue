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
      <div style="width: 80%; margin: 0 auto">
        <el-form
          :model="formState"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          label-width="auto"
          :label-position="'left'"
          :rules="rules"
        >
          <el-row :gutter="20" justify="space-between">
            <el-col :span="10">
              <el-form-item label="姓名:" prop="S_Asker">
                <el-input
                  v-model="formState.S_Asker"
                  size="large"
                  placeholder="姓名"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="所在单位:">
                <el-input
                  v-model="formState.S_AskBusiness"
                  size="large"
                  placeholder="所在单位"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="my-my-30" justify="space-between">
            <el-col :span="10">
              <el-form-item label="职务职称:">
                <el-input
                  v-model="formState.S_AskPosition"
                  size="large"
                  placeholder="职务职称"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="专业领域:">
                <el-input
                  v-model="formState.S_AskMajor"
                  size="large"
                  placeholder="专业领域"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" justify="space-between">
            <el-col :span="10">
              <el-form-item label="手机:" prop="S_AskerTel">
                <el-input
                  v-model="formState.S_AskerTel"
                  size="large"
                  placeholder="手机"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="电子邮箱:" prop="S_AskerMail">
                <el-input
                  v-model="formState.S_AskerMail"
                  size="large"
                  placeholder="电子邮箱"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="my-mt-40">
            <el-col :span="24">
              <el-form-item
                label="意见内容（限500字）:"
                prop="S_AskerContent"
                label-position="top"
              >
                <el-input
                  type="textarea"
                  :rows="15"
                  v-model="formState.S_AskerContent"
                  size="large"
                  placeholder="请输入内容"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="my-my-20" justify="space-between" align="middle">
            <el-upload
              action=""
              :limit="1"
              :auto-upload="false"
              :on-change="changeUpload"
            >
              <!-- :on-change="changeUpload" -->
              <el-button type="primary">选择文件</el-button>
            </el-upload>
            <a @click="download" style="color: #409eff; font-size: 14px"
              >意见反馈模版下载</a
            >
          </el-row>
          <el-row justify="center">
            <el-button @click="submitAsker" type="primary" round size="large"
              >同意并提交征集意见</el-button
            >
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { getFeedBack } from "@/api/publicInfo";
import { ElMessage } from "element-plus";
const route = useRoute();
const projectName = route.query.S_ProjectName;
const name = route.query.name;
const formState = reactive<any>({
  S_ID: "",
  S_AskerType: 1,
  S_Asker: "",
  S_AskBusiness: "",
  S_AskPosition: "",
  S_AskMajor: "",
  S_AskerTel: "",
  S_AskerMail: "",
  S_AskerContent: "",
  file: "",
});
const download = () => {
  window.open(
    "https://ciac.zjw.sh.gov.cn/JGBStandardWeb/LR_Api/StandardReleaseApi/AskBackTemplateDownload",
    "_blank"
  );
};
const validatePhone = (rule: any, value: string, callback: any) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的手机号"));
  } else {
    callback();
  }
};
const validateEmail = (rule: any, value: string, callback: any) => {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的邮箱"));
  } else {
    callback();
  }
};
const rules = reactive({
  S_Asker: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  S_AskerTel: [
    {
      required: true,
      message: "请输入正确的手机号",
      trigger: "blur",
      validator: validatePhone,
    },
  ],
  S_AskerMail: [
    {
      required: true,
      message: "请输入正确的电子邮箱",
      trigger: "blur",
      validator: validateEmail,
    },
  ],
  S_AskerContent: [
    { required: true, message: "请输入意见内容", trigger: "blur" },
  ],
});

const changeUpload = (file: any) => {
  //清除上一个文件
  //   console.log(file, "file000");
  formState.file = file.raw;
  console.log(formState.file, "file000");
};
const submitAsker = () => {
  formState.S_ID = route.query.S_ID;
  console.log(formState);
  //   ElMessage("提交成功");
  getFeedBack(formState).then((res) => {
    console.log(res);
    ElMessage({
      message: "您的意见反馈已经提交",
      type: "success",
      offset: 100,
    });
    //文本框清空
    formState.S_Asker = "";
    formState.S_AskBusiness = "";
    formState.S_AskPosition = "";
    formState.S_AskMajor = "";
    formState.S_AskerTel = "";
    formState.S_AskerMail = "";
    formState.S_AskerContent = "";
    formState.file = "";
  });
};
</script>

<style lang="scss" scoped></style>
