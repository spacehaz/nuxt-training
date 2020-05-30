<template>
  <a :href="href" class="instagram" target="_blank"></a>
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
.instagram {
  background-image: url('~assets/images/socials-icons/instagram.svg');
}
</style>
