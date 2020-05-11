<template>
  <p :class="['paragraph', `paragraph_theme_${theme}`]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.paragraph {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
}

.paragraph_theme_light {
  color: #666;
}

.paragraph_theme_main {
  color: #dedede;
}
</style>
