<template>
  <h2 :class="['title', `title_theme_${theme}`]">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.title_theme_light {
  color: #000;
}

.title_theme_main {
  color: #fff;
}
</style>
