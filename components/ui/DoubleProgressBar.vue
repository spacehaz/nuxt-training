<template>
  <div>
    <app-progress-bar
      class="progress-bar"
      theme="dark-transparent"
      size="m"
      :currentValue="previousValue"
      :maxValue="maxValue"
    />
    <app-progress-bar
      class="progress-bar"
      theme="main-transparent"
      size="m"
      :currentValue="currentValue"
      :maxValue="maxValue"
    />
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';

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
  components: {
    'app-progress-bar': ProgressBar,
  },
};
</script>
