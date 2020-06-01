<template>
  <div
    :class="[
      'progress-bar',
      `progress-bar_size_${size}`,
      `progress-bar_theme_${theme}`,
    ]"
  >
    <div
      :style="innerBarStyle"
      :class="[
        'progress-bar__container',
        `progress-bar__container_theme_${theme}`,
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    currentValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    theme: {
      type: String,
      default: 'main',
    },
    size: {
      type: String,
      default: 'l',
    },
  },
  computed: {
    innerBarStyle() {
      return `width: ${(this.currentValue / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.progress-bar_size_m {
  height: 20px;
}

.progress-bar_size_l {
  height: 40px;
}

.progress-bar_theme_main {
  background-color: #f4f4f4;
}

.progress-bar_theme_dark {
  background-color: transparent;
}

.progress-bar {
  position: relative;
}

.progress-bar__container_theme_main {
  background-color: #613a93;
}

.progress-bar__container_theme_dark {
  background-color: #f4f4f4;
}

.progress-bar_theme_main {
  background-color: #f4f4f4;
}

.progress-bar_theme_dark {
  background-color: transparent;
}

.progress-bar_theme_main-transparent {
  background-color: transparent;
}

.progress-bar__container_theme_main-transparent {
  background-color: #613a93;
}

.progress-bar_theme_dark-transparent {
  background-color: transparent;
}

.progress-bar__container_theme_dark-transparent {
  background-color: #f4f4f4;
}

.progress-bar__container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}

@media (max-width: 1280px) {
  .progress-bar_size_l {
    height: 36px;
  }

  .progress-bar_size_m {
    height: 18px;
  }
}

@media (max-width: 1024px) {
  .progress-bar_size_l {
    height: 28px;
  }

  .progress-bar_size_m {
    height: 14px;
  }
}
</style>
