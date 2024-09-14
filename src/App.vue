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
import "./charts/init";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  background: #000010;
}

.ff-fz {
  font-family: "fanzheng";
}

.ff-pm {
  font-family: "pangmeng";
}

.ff-fg {
  font-family: "FZLTZHKGBK";
}

.chart-item {
  width: 400px;
  height: 225px;
}

.panel-bg {
  background: url("~@/assets/imgs/chart/panel_bg.png") center no-repeat;
  background-size: 100% 100%;
}
</style>
