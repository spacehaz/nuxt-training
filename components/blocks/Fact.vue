<template>
  <div>
    <app-flex
      class="fact"
      v-for="(fact, index) in statistics"
      :key="fact.id"
      v-if="fact.type === 1"
    >
      <p class="fact__text">
        {{ fact.title }}
      </p>
      <div class="fact__container">
        <div class="fact__bars">
          <progress
            :value="fact.currentValue"
            :max="fact.maxValue"
            class="fact__progress fact__progress_full fact__progress_size_l"
          ></progress>
        </div>
        <p class="fact__number">{{ fact.text }}</p>
        <p class="fact__source">{{ fact.source }}</p>
      </div>
    </app-flex>

    <app-flex class="fact" v-else>
      <p class="fact__text">
        {{ fact.title }}
      </p>
      <div class="fact__container">
        <div class="fact__bars">
          <progress
            :value="fact.bars.previousValue"
            :max="fact.bars.maxValue"
            class="fact__progress fact__progress_short fact__progress_size_m fact__progress__value-color_light"
          ></progress>
          <progress
            :value="fact.bars.currentValue"
            :max="fact.bars.maxValue"
            class="fact__progress fact__progress_short fact__progress_size_m fact__progress__value-color_main"
          ></progress>
        </div>
        <p class="fact__number">{{ fact.text }}</p>
        <p class="fact__source">{{ fact.source }}</p>
      </div>
    </app-flex>
  </div>
</template>

<script>
import Flex from '../shared/Flex';

export default {
  props: {
    statistics: Array,
  },
  components: {
    'app-flex': Flex,
  },
};
</script>

<style scoped>
.fact {
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

.fact__progress {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
}

.fact__progress_full[value]::-webkit-progress-bar {
  background-color: #f4f4f4;
}

.fact__progress_full[value]::-webkit-progress-value {
  background-color: #613a93;
}

.fact__progress_short[value]::-webkit-progress-bar {
  background-color: transparent;
}

.fact__progress_short[value]::-webkit-progress-value {
  background-color: #613a93;
}

.fact__progress_size_l {
  height: 40px;
}

.fact__progress_size_m {
  height: 20px;
  margin-bottom: -1px;
}

.fact__progress_size_m:last-of-type {
  margin-bottom: 0;
}

.fact__progress__value-color_light[value]::-webkit-progress-bar {
  background-color: transparent;
}

.fact__progress__value-color_light[value]::-webkit-progress-value {
  background-color: #f4f4f4;
}

.fact__progress__value-color_main[value]::-webkit-progress-bar {
  background-color: transparent;
}

.fact__progress__value-color_main[value]::-webkit-progress-value {
  background-color: #613a93;
}
</style>
