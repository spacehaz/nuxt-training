<template>
  <section class="statistics">
    <app-container class="statistics__container">
      <app-title :theme="theme" class="statistics__title">
        {{ title }}
      </app-title>
      <div class="statistics__facts-container">
        <app-fact class="statistics__facts" />
      </div>
    </app-container>
  </section>
</template>

<script>
import Title from '@/components/shared/Title';
import Fact from '@/components/blocks/Fact';
import Container from '@/components/shared/Container';

export default {
  components: {
    'app-title': Title,
    'app-fact': Fact,
    'app-container': Container,
  },
  data() {
    return {
      theme: 'light',
    };
  },
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].statistics.title;
    },
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

.statistics__facts {
}

@media (max-width: 1280px) {
  .statistics__title {
    margin-bottom: 60px;
  }

  .statistics__facts {
  }
}

@media (max-width: 1024px) {
  .statistics__title {
    margin-bottom: 46px;
  }

  .statistics__facts {
    grid-gap: 30px;
  }

  .statistics__facts-container {
    overflow: visible;
  }
}

@media (max-width: 810px) {
  .statistics__facts-container {
    overflow-x: scroll;
  }

  .statistics__facts {
  }
}

@media (max-width: 768px) {
  .statistics__title {
    margin: 0 auto 60px;
    padding-right: 40px;
    text-align: center;
  }

  .statistics__facts {
    grid-gap: 20px;
  }

  .statistics__container {
    padding-right: 0;
  }
}

@media (max-width: 425px) {
  .statistics__title {
    margin-bottom: 30px;
    text-align: left;
    padding: 0 15px;
  }

  .statistics__facts {
    grid-gap: 10px;
    padding: 0 15px;
  }
}
</style>
