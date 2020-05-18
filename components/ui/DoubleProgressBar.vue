<template>
  <div>
    <progress
      :value="previousValue"
      :max="maxValue"
      class="fact__progress fact__progress_short fact__progress_size_m fact__progress__value-color_light"
    ></progress>
    <progress
      :value="currentValue"
      :max="maxValue"
      class="fact__progress fact__progress_short fact__progress_size_m fact__progress__value-color_main"
    ></progress>
  </div>
</template>

<script>
export default {
  props: {
    previousValue: {
      type: Number,
      required: true,
    },
    currentValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.fact__progress {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
}

.fact__progress_short[value]::-webkit-progress-bar {
  background-color: transparent;
}

.fact__progress_short[value]::-webkit-progress-value {
  background-color: #613a93;
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

@media (max-width: 1280px) {
  .fact__progress_size_m {
    height: 18px;
    margin-bottom: -2px;
  }
}

@media (max-width: 1024px) {
  .fact__progress_size_m {
    height: 14px;
    margin-bottom: -6px;
  }
}
</style>
