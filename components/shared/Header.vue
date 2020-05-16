<template>
  <header class="header">
    <app-flex-container class="header__container">
      <p class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <div class="header__links">
        <app-navigation></app-navigation>
        <button class="header__button" @click="toggleQuiz">
          Рассказать историю
        </button>
      </div>
    </app-flex-container>
  </header>
</template>

<script>
import FlexContainer from '@/components/shared/FlexContainer';
import Navigation from '@/components/shared/Navigation';

export default {
  components: {
    'app-flex-container': FlexContainer,
    'app-navigation': Navigation,
  },
  methods: {
    toggleQuiz() {
      this.$store.commit('popup/togglePopupVisibility');
    },
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #e8e8e8;
}

.header__container {
  align-items: center;
  min-height: 76px;
}

.header__logo {
  max-width: 300px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.header__links {
  display: flex;
}

.header__button {
  margin-left: 40px;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  cursor: pointer;
}

.header__button:hover {
  opacity: 0.8;
}

.header__button:active {
  outline: none;
}
</style>
