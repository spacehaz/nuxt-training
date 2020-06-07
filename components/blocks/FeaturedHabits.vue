<template>
  <section class="featured-habits">
    <app-previews
      class="featured-habits__content"
      :featured="true"
    ></app-previews>
  </section>
</template>

<script>
import Previews from '@/components/blocks/Previews';

export default {
  components: {
    'app-previews': Previews,
  },
  data() {
    return {
      theme: 'light',
    };
  },
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].stories.title;
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .featured-habits__content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 425px) {
  .featured-habits__content {
    grid-template-columns: 1fr;
  }
}
</style>
