<template>
  <!-- 盒子底部 -->
  <template v-if="type == 1">
    <img
      class="absolute left-bottom full-width events-none"
      :src="require('@/assets/imgs/chart/wrapper_bottom.png')"
    />
  </template>
</template>
<script>
export default {
  props: {
    type: Number,
  },
};
</script>