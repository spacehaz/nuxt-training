<template>
  <a :href="href" class="youtube" target="_blank"></a>
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
.youtube {
  background-image: url('~assets/images/socials-icons/youtube.svg');
}
</style>
