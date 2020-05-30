<template>
  <a :href="href" class="odnoklassniki" target="_blank"></a>
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
.odnoklassniki {
  background-image: url('~assets/images/socials-icons/odnoklassniki.svg');
}
</style>
