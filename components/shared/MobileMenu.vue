<template>
  <app-container v-if="isMobileMenuOpened">
    <div class="mobile-menu__links">
      <app-navigation></app-navigation>
      <button class="mobile-menu__button" @click="toggleQuiz">
        Рассказать историю
      </button>
    </div>
  </app-container>
</template>

<script>
import Container from '@/components/shared/Container';
import Navigation from '@/components/shared/Navigation';

export default {
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/isMobileMenuOpened'];
    },
  },
  components: {
    'app-container': Container,
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
.mobile-menu__links {
  display: flex;
  min-height: 60px;
  align-items: center;
}

.mobile-menu__button {
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
</style>
