<template>
  <div>
    <div
      class="fact"
      v-for="fact in statistics"
      :key="fact.id"
      v-if="fact.oldValue === 0"
    >
      <p class="fact__text">
        {{ fact.description }}
      </p>
      <div class="fact__container">
        <div class="fact__bars">
          <app-progress-bar
            :currentValue="fact.currentValue"
            :maxValue="fact.maxValue"
          />
        </div>
        <p class="fact__number">{{ fact.summary }}</p>
        <p class="fact__source">{{ fact.source }}</p>
      </div>
    </div>

    <div class="fact" v-else>
      <p class="fact__text">
        {{ fact.description }}
      </p>
      <div class="fact__container">
        <div class="fact__bars">
          <app-double-progress-bar
            :previousValue="fact.oldValue"
            :currentValue="fact.currentValue"
            :maxValue="fact.maxValue"
          />
        </div>
        <p class="fact__number">{{ fact.summary }}</p>
        <p class="fact__source">{{ fact.source }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Flex from '@/components/shared/Flex';
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';

export default {
  computed: {
    statistics() {
      return this.$store.getters['statistics/getStatictics'];
    },
  },
  components: {
    'app-flex': Flex,
    'app-progress-bar': ProgressBar,
    'app-double-progress-bar': DoubleProgressBar,
  },
};
</script>

<style scoped>
.fact {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  min-height: 300px;
  border: 1px solid #efefef;
}

.fact__text {
  font-size: 12px;
  line-height: 16px;
}

.fact__number {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
}

.fact__source {
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666;
}

.fact__bars {
  margin-bottom: 20px;
}

@media (max-width: 1280px) {
  .fact {
    padding: 18px;
    min-height: 265px;
  }
}

@media (max-width: 1150px) {
  .fact {
    min-height: 245px;
  }

  .fact__number {
    font-size: 26px;
    line-height: 30px;
  }
}

@media (max-width: 1024px) {
  .fact {
    padding: 10px;
    min-height: 208px;
  }

  .fact__text {
    font-size: 10px;
    line-height: 14px;
  }

  .fact__number {
    margin-bottom: 10px;
  }

  .fact__source {
    font-size: 10px;
    line-height: 14px;
  }

  .fact__bars {
    margin-bottom: 10px;
  }
}

@media (max-width: 810px) {
  .fact {
    padding: 10px;
    min-height: 216px;
    min-width: 216px;
  }
}
</style>
