<template>
  <section class="statistics">
    <app-title :theme="theme" class="statistics__title">
      Статистика по онкозаболеваниям
    </app-title>
    <div class="statistics__facts-container">
      <app-fact class="statistics__facts" />
    </div>
  </section>
</template>

<script>
import Title from '@/components/shared/Title';
import Fact from '@/components/blocks/Fact';

export default {
  components: {
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
  padding: 0 60px;
}

.statistics__facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}

.statistics__facts {
  padding: 0 60px;
}

@media (max-width: 1280px) {
  .statistics__title {
    margin-bottom: 60px;
    padding: 0 50px;
  }

  .statistics__facts {
    padding: 0 50px;
  }
}

@media (max-width: 1024px) {
  .statistics__title {
    margin-bottom: 46px;
  }

  .statistics__facts {
    grid-gap: 30px;
  }
}

@media (max-width: 810px) {
  .statistics__facts-container {
    overflow-x: scroll;
  }

  .statistics__facts {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .statistics__title {
    margin: 0 auto 60px;
    padding: 0 40px;
    text-align: center;
  }

  .statistics__facts {
    grid-gap: 20px;
  }
}

@media (max-width: 425px) {
  .statistics__title {
    margin-bottom: 30px;
    padding: 0 15px;
    text-align: left;
  }

  .statistics__facts {
    grid-gap: 10px;
    padding: 0 15px;
  }
}
</style>
