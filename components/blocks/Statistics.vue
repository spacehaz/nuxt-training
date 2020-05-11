<template>
  <section class="statistics">
    <app-container>
      <app-title :theme="theme" class="statistics__title">
        Статистика по онкозаболеваниям
      </app-title>
      <app-fact class="statistics__facts" :statistics="statistics" />
    </app-container>
  </section>
</template>

<script>
import Container from '../shared/Container';
import Title from '../shared/Title';
import Fact from './Fact';

export default {
  props: {
    statistics: Array,
  },
  components: {
    'app-container': Container,
    'app-title': Title,
    'app-fact': Fact,
  },
  data() {
    return {
      theme: 'light',
    };
  },
};
</script>

<style scoped>
.statistics__title {
  margin-bottom: 70px;
}

.statistics__facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}
</style>
