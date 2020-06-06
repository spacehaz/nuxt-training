<template>
  <section class="featured-habits">
    <app-container>
      <app-previews
        class="featured-habits__content"
        :featured="true"
      ></app-previews>
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Previews from '@/components/blocks/Previews';

export default {
  components: {
    'app-container': Container,
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
.featured-habits__content {
  margin-bottom: 70px;
}

@media (max-width: 1280px) {
  .featured-habits__content {
    margin-bottom: 60px;
  }
}

@media (max-width: 1024px) {
  .featured-habits__content {
    margin-bottom: 46px;
  }
}

@media (max-width: 768px) {
  .featured-habits__content {
    margin-bottom: 40px;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 425px) {
  .featured-habits__content {
    grid-template-columns: 1fr;
  }
}
</style>
