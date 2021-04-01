<template>
  <div class="my-pa-10">
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
            :class="
              isRank && hindex == 0 ? rankColor[index > 3 ? 3 : index] : ''
            "
          >
            {{ item[hitem.field] }}
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
    isRank: Boolean,
    thead: Array,
    tbody: Array,
  },
  setup(props) {
    let rankColor = ["fc-error", "fc-warn", "fc-primary", "fc-second"];

    let { thead } = props;
    let defSpan = computed(() => Math.floor(24 / thead.length));
    return {
      rankColor,
      defSpan,
    };
  },
};
</script>