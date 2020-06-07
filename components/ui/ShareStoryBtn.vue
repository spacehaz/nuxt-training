<template>
  <button
    type="button"
    :class="['button', `button_theme_${theme}`]"
    @click="toggleQuiz"
  >
    Рассказать историю
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleQuiz() {
      this.$store.dispatch('quiz/showQuiz');
      this.$store.commit('popup/togglePopupVisibility');
    },
  },
};
</script>

<style scoped>
.button {
  width: 218px;
  line-height: 44px;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  border: 0;
  transition: opacity 0.2s linear;
  cursor: pointer;
}

.button_theme_cover {
  width: 334px;
  min-height: 60px;
  color: #fff;
  font-size: 24px;
  line-height: 36px;
  border: 2px solid #fff;
  border-radius: 60px;
  background-color: transparent;
  transition: background-color 0.2s linear;
}

.button:hover {
  opacity: 0.8;
}

.button_theme_cover:hover {
  background-color: #613a93;
}

.button_theme_light {
  background-color: #fff;
  color: #000;
}

.button_theme_main {
  color: #fff;
  background-color: #613a93;
}

@media (max-width: 1280px) {
  .button {
    width: 211px;
    line-height: 42px;
  }

  .button_theme_cover {
    width: 314px;
    min-height: 58px;
    font-size: 22px;
    line-height: 36px;
  }
}

@media (max-width: 1024px) {
  .button {
    width: 200px;
    line-height: 38px;
  }

  .button_theme_cover {
    width: 294px;
    min-height: 56px;
    font-size: 20px;
  }
}

@media (max-width: 425px) {
  .button {
    width: 146px;
    font-size: 12px;
    line-height: 31px;
  }

  .button_theme_cover {
    width: 224px;
    min-height: 44px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
