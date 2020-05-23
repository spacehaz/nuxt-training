<template>
  <section class="habits">
    <app-container>
      <app-title :theme="theme" class="habits__title">
        {{ title }}
      </app-title>
      <app-previews class="habits__content"></app-previews>
      <app-more-btn class="habits__more-btn" />
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
import Previews from '@/components/blocks/Previews';
import MoreBtn from '@/components/ui/MoreBtn';

export default {
  components: {
    'app-container': Container,
    'app-title': Title,
    'app-previews': Previews,
    'app-more-btn': MoreBtn,
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
.habits__title {
  margin-bottom: 70px;
}

.habits__content {
  margin-bottom: 70px;
}

@media (max-width: 1280px) {
  .habits__title {
    margin-bottom: 60px;
  }

  .habits__content {
    margin-bottom: 60px;
  }
}

@media (max-width: 1024px) {
  .habits__title {
    margin-bottom: 46px;
  }

  .habits__content {
    margin-bottom: 46px;
  }
}

@media (max-width: 768px) {
  .habits__title {
    margin: 0 auto 60px;
    text-align: center;
  }

  .habits__content {
    margin-bottom: 40px;
  }
}

@media (max-width: 425px) {
  .habits__title {
    margin-bottom: 40px;
    text-align: left;
  }
}
</style>
