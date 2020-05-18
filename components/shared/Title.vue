<template>
  <h2 :class="['title', `title_theme_${theme}`]">
    <slot></slot>
  </h2>
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

@media (max-width: 1280px) {
  .title {
    max-width: 367px;
    font-size: 28px;
    line-height: 32px;
  }
}

@media (max-width: 1024px) {
  .title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}

@media (max-width: 768px) {
  .title {
    max-width: 380px;
  }
}

@media (max-width: 425px) {
  .title {
    max-width: 100%;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
