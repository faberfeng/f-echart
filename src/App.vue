<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
// import zhCN from "ant-design-vue/es/locale/zh_CN";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

export default {
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style lang="scss">
html {
  font-size: 16px;
  font-family: Arial, Verdana, Tahoma, 微软雅黑, 黑体;
  color: #2c3e50;
}
.content {
  width: 1136px;
  margin: 110px auto 80px;
  border: 1px solid #e9eaec;
  border-color: #e9eaec;
  border-radius: 4px;
  padding: 16px;
  box-sizing: border-box;
}
</style>
