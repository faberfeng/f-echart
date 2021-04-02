<template>
  <div v-if="type == 1">
    <a-row type="flex" class="my-px-10 bg-fff2 my-py-2">
      <template v-for="item in thead" :key="item.field">
        <a-col :span="item.span || defSpan">
          {{ item.name }}
        </a-col>
      </template>
    </a-row>
    <template v-for="(item, index) in tbody" :key="index">
      <a-row type="flex" class="my-px-10 my-py-2 bd-bottom fc-fff6">
        <template v-for="(hitem, hindex) in thead" :key="hitem.field">
          <a-col
            :span="hitem.span || defSpan"
            class="my-px-5"
            :class="hindex == 0 ? rankColor[index > 3 ? 3 : index] : ''"
          >
            {{ item[hitem.field] }}
          </a-col>
        </template>
      </a-row>
    </template>
  </div>
  <div v-if="type == 2" class="fc-fff6">
    <a-row type="flex" align="middle" class="my-pb-10">
      <template v-for="item in thead" :key="item.field">
        <a-col :span="item.span || defSpan">
          {{ item.name }}
        </a-col>
      </template>
    </a-row>
    <template v-for="(item, index) in tbody" :key="index">
      <a-row type="flex" align="middle" class="bd-all bdr-20 my-mb-10">
        <template v-for="(hitem, hindex) in thead" :key="hitem.field">
          <a-col :span="hitem.span || defSpan" :class="hitem.class">
            <div
              v-if="hindex == 0"
              class="my-ma-2 bdr-all text-center rank-item"
              :class="rankBgColor[index > 3 ? 3 : index]"
            >
              {{ item[hitem.field] }}
            </div>
            <div v-else>
              {{ item[hitem.field] }}
            </div>
          </a-col>
        </template>
      </a-row>
    </template>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    type: Number,
    thead: Array,
    tbody: Array,
  },
  setup(props) {
    let rankColor = ["fc-error", "fc-warn", "fc-primary", "fc-second"];
    let rankBgColor = ["bg-error", "bg-warn", "bg-primary", "bg-second"];

    let { thead } = props;
    let defSpan = computed(() => Math.floor(24 / thead.length));
    return {
      rankColor,
      rankBgColor,
      defSpan,
    };
  },
};
</script>
<style lang="scss" scoped>
.rank-item {
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
</style>