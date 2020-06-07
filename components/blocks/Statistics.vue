<template>
  <section class="statistics">
    <app-container class="statistics__container">
      <app-title :theme="theme" class="statistics__title">
        {{ title }}
      </app-title>
      <div class="statistics__facts-container">
        <app-flex class="statistics__facts">
          <app-fact v-for="fact in statistics" :key="fact.id" :fact="fact" />
        </app-flex>
      </div>
    </app-container>
  </section>
</template>

<script>
import Title from '@/components/shared/Title';
import Fact from '@/components/blocks/Fact';
import Container from '@/components/shared/Container';
import Flex from '@/components/shared/Flex';

export default {
  components: {
    'app-title': Title,
    'app-fact': Fact,
    'app-container': Container,
    'app-flex': Flex,
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
    statistics() {
      return this.$store.getters['statistics/getStatictics'];
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

@media (max-width: 1280px) {
  .statistics__title {
    margin-bottom: 60px;
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
