<template>
  <router-view />
</template>

<script>
import "./charts/init";
export default {
  setup() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 1);
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
  height: 300px;
}

.panel-bg {
  background: url("~@/assets/imgs/chart/panel_bg.png") center no-repeat;
  background-size: 100% 100%;
}
</style>
