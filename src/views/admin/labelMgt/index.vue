<template>
  <h1>{{ labelId }}</h1>
</template>

<script setup lang="ts">
//获取动态路由参数
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
const router = useRouter();
const { params } = useRoute();
const labelId = ref<string>(params.id);
watch(
  () => params.id,
  (newVal) => {
    console.log(newVal, "newVal");
    labelId.value = newVal;
  },
  { immediate: true }
);
</script>

<style></style>
