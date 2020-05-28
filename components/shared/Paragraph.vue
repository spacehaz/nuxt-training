<template>
  <div :class="['paragraph', `paragraph_theme_${theme}`]"></div>
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
  display: inline-block;
}

.paragraph >>> p {
  max-width: 340px;
  font-size: 18px;
  line-height: 22px;
}

.paragraph_theme_light >>> p {
  color: #666;
}

.paragraph_theme_main >>> p {
  color: #dedede;
}

@media (max-width: 1280px) {
  .paragraph >>> p {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 1024px) {
  .paragraph >>> p {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media (max-width: 768px) {
  .paragraph >>> p {
    max-width: 380px;
  }
}

@media (max-width: 425px) {
  .paragraph >>> p {
    max-width: 100%;
  }
}
</style>
