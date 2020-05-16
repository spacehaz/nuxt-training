<template>
  <div>
    <div
      class="fact"
      v-for="fact in statistics"
      :key="fact.id"
      v-if="fact.type === 1"
    >
      <p class="fact__text">
        {{ fact.title }}
      </p>
      <div class="fact__container">
        <div class="fact__bars">
          <app-progress-bar
            :currentValue="fact.currentValue"
            :maxValue="fact.maxValue"
          />
        </div>
        <p class="fact__number">{{ fact.text }}</p>
        <p class="fact__source">{{ fact.source }}</p>
      </div>
    </div>

    <div class="fact" v-else>
      <p class="fact__text">
        {{ fact.title }}
      </p>
      <div class="fact__container">
        <div class="fact__bars">
          <app-double-progress-bar
            :previousValue="fact.bars.previousValue"
            :currentValue="fact.bars.currentValue"
            :maxValue="fact.bars.maxValue"
          />
        </div>
        <p class="fact__number">{{ fact.text }}</p>
        <p class="fact__source">{{ fact.source }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';

export default {
  props: {
    statistics: {
      type: Array,
      required: true,
    },
  },
  components: {
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
</style>
