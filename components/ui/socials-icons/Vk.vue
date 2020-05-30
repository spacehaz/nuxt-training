<template>
  <a :href="href" target="_blank" class="vk"></a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.vk {
  background-image: url('~assets/images/socials-icons/vk.svg');
}
</style>
