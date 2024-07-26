<template>
  <div>
    <editor :api-key="apiKey" v-model="minutesStore.minutesForm.content" :init="init" id="editorId" />
  </div>
</template>

<script setup lang="ts">

import Editor from "@tinymce/tinymce-vue";
import useMinutesStore from "@/store/modules/minutes";
const minutesStore = useMinutesStore();
const init = {
  language: 'zh_CN',
  height: 300,
  // 自适应高度 end
  // menubar: false, //菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”
  // toolbar: false,
  branding: false, //tiny技术支持信息是否显示
  // resize: false, //编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
  statusbar: false, //最下方的元素路径和字数统计那一栏是否显示
  // elementpath: false, //元素路径是否显示
  setup: (editor) => {
    // editor.setMode("readonly");

  },
  init_instance_callback: (editor) => {
    minutesStore.editorloading = false
    if (minutesStore.editDisable) {
      editor.mode.set("readonly")
    } else {
      editor.mode.set("design")
    }
  },
};
const apiKey = "ldf7n7nxfxz27lynpcb73v84vq55k94qyd7ryk7snhxi8pjm"

</script>

<style lang="scss" scoped>
#editorId {
  height: 300px;
}
</style>
