<template>
  <p :class="['paragraph', `paragraph_theme_${theme}`]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
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

@media (max-width: 1280px) {
  .paragraph {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 1024px) {
  .paragraph {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media (max-width: 768px) {
  .paragraph {
    max-width: 380px;
  }
}

@media (max-width: 425px) {
  .paragraph {
    max-width: 100%;
  }
}
</style>
