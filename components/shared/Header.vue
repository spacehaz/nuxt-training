<template>
  <header class="header">
    <div class="header__container">
      <p class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <div class="header__links">
        <app-navigation></app-navigation>
        <button class="header__button" @click="toggleQuiz">
          Рассказать историю
        </button>
      </div>
      <app-mobile-icon class="header__mobile-icon"></app-mobile-icon>
    </div>
  </header>
</template>

<script>
import Navigation from '@/components/shared/Navigation';
import MobileIcon from '@/components/ui/MobileIcon';

export default {
  components: {
    'app-navigation': Navigation,
    'app-mobile-icon': MobileIcon,
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
.header {
  border-bottom: 1px solid #e8e8e8;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 76px;
  padding: 0 60px;
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

.header__mobile-icon {
  display: none;
}

@media (max-width: 1280px) {
  .header__container {
    min-height: 72px;
    padding: 0 50px;
  }

  .header__button {
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  .header__button {
    margin-left: 30px;
  }
}

@media screen and (max-width: 768px) {
  .header__links {
    display: none;
  }

  .header__mobile-icon {
    display: block;
  }
}

@media (max-width: 425px) {
  .header__container {
    min-height: 64px;
    padding: 0 15px;
  }

  .header__logo {
    max-width: 216px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
