<template>
  <header class="header">
    <app-flex-container class="header__container">
      <p class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <app-navigation :links="headerLinks"></app-navigation>
    </app-flex-container>
  </header>
</template>

<script>
import FlexContainer from './FlexContainer';
import Navigation from './Navigation';

export default {
  components: {
    'app-flex-container': FlexContainer,
    'app-navigation': Navigation,
  },
  data() {
    return {
      headerLinks: [
        { item: 'Главная', path: '/' },
        { item: 'Истории', path: '/stories' },
        { item: 'Рассказать историю', path: '#form' },
      ],
    };
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
</style>
