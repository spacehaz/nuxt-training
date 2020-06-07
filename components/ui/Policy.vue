<template>
  <p class="policy">
    {{ text }}
    <nuxt-link class="policy__link" to="policy" target="_blank">
      {{ link }}
    </nuxt-link>
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.policy {
  font-size: 14px;
  line-height: 17px;
  color: #666;
  display: inline-block;
}
.policy__link {
  text-decoration: none;
  color: #666;
  border-bottom: 1px solid #666;
}
</style>
