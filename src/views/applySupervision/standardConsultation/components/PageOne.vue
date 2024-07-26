<template>
  <el-row class="justify-center">
    <el-col :span="12">
      <el-form ref="ruleFormRef" :model="formState" :rules="rules" class="my-mt-20" name="basic" label-width="auto" autocomplete="off">
        <el-form-item label="标准名称" prop="standardName">
          <el-input style="height: 40px" v-model="formState.standardName" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input style="height: 40px" v-model="formState.name" />
        </el-form-item>
        <el-form-item label="电子邮件" prop="email">
          <el-input style="height: 40px" v-model="formState.email" />
        </el-form-item>
        <el-form-item label="联系地址" prop="address">
          <el-input style="height: 40px" v-model="formState.address" />
        </el-form-item>
        <el-form-item label="联系电话" prop="tel">
          <el-input style="height: 40px" v-model="formState.tel" />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" placeholder="请输入内容" :rows="5" v-model="formState.content" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-row>
            <el-col :span="16"><el-input style="height: 40px" v-model="formState.code" /></el-col>
            <el-col :span="8">
              <div @click="clickIdentify">
                <Identify ref="identifyRef" :identifyCode="poro"></Identify>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import Identify from "@/components/Identify/index.vue";
import { reactive, onMounted, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

var poro = "1235";
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const identifyRef = ref(null);
const identifyCodes = "1234567890abcdefghijklmnopqrstuvwxyz"; //验证码输入字串
const clickIdentify = () => {
  poro = "";
  makeCode(identifyCodes, 4);
  console.log(poro);
  identifyRef.value.setIdentifyCode(poro);
};
// 生成随机验证码
const makeCode = (o, l) => {
  var numCode = "";
  for (let i = 0; i < l; i++) {
    numCode += identifyCodes[randomNum(0, identifyCodes.length)];
  }
  poro = numCode;
};
onMounted(() => {
  clickIdentify();
});

const ruleFormRef = ref<FormInstance>();
interface FormState {
  standardName: string;
  name: string;
  email: string;
  address: string;
  tel: string;
  content: string;
  code: string;
}
const formState = reactive<FormState>({
  standardName: "",
  name: "",
  email: "",
  address: "",
  tel: "",
  content: "",
  code: "",
});

const rules = reactive<FormRules<FormState>>({
  standardName: [
    {
      required: true,
      message: "请输入标准名称",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "请输入电子邮件",
      trigger: "blur",
    },
  ],
  address: [
    {
      required: true,
      message: "请输入联系地址",
      trigger: "blur",
    },
  ],
  tel: [
    {
      required: true,
      message: "请输入联系电话",
      trigger: "blur",
    },
  ],
  content: [
    {
      required: true,
      message: "请输入内容",
      trigger: "blur",
    },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
  ],
});
</script>

<style lang="scss" scoped>
:deep(.el-tabs__item) {
  font-size: 18px;
  height: 60px;
}
:deep(.el-button) {
  width: 70px;
  height: 40px;
}
</style>
