<template>
  <section class="habits">
    <app-container>
      <app-title :theme="theme" class="habits__title">
        Истории неизлечимых привычек
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
};
</script>

<style scoped>
.habits__title {
  margin-bottom: 70px;
}

.habits__content {
  margin-bottom: 70px;
}
</style>
