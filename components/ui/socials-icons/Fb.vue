<template>
  <a :href="href" class="fb" target="_blank"></a>
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
.fb {
  background-image: url('~assets/images/socials-icons/fb.svg');
}
</style>
