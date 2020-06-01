<template>
  <a :href="href" class="twitter" target="_blank"></a>
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
.twitter {
  background-image: url('~assets/images/socials-icons/twitter.svg');
}
</style>
