<template>
  <div class="title row align-middle">
    <div class="block"></div>
    <div class="my-ml-20" style="font-size: 18px; font-weight: 600">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "TITLE",
  },
});
</script>

<style lang="scss" scoped>
.title {
  color: #0073d4;
  height: 55px;
  background-color: #f9f9f9;
  .block {
    width: 2px;
    height: 20px;
    margin: 18px 0;
    background-color: #0073d4;
  }
}
</style>
