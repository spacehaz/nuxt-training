<template>
  <section class="habits">
    <app-container>
      <app-title :theme="theme" class="habits__title">
        Истории неизлечимых привычек
      </app-title>
      <app-previews class="habits__content" :stories="stories"></app-previews>
      <app-more-btn class="habits__more-btn" />
    </app-container>
  </section>
</template>

<script>
import Container from '../shared/Container';
import Title from '../shared/Title';
import Previews from './Previews';
import MoreBtn from '../ui/MoreBtn';

export default {
  props: {
    stories: Array,
  },
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
