<template>
  <transition name="fade">
    <app-container v-if="isMobileMenuOpened" class="mobile-menu">
      <div class="mobile-menu__links">
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <nuxt-link
                to="/"
                class="navigation__link"
                active-class="navigation__link_active"
                exact
              >
                Главная
              </nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link
                to="/stories"
                class="navigation__link"
                active-class="navigation__link_active"
              >
                Истории
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <button class="mobile-menu__button" @click="toggleQuiz">
          Рассказать историю
        </button>
      </div>
    </app-container>
  </transition>
</template>

<script>
import Container from '@/components/shared/Container';

export default {
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/isMobileMenuOpened'];
    },
  },
  components: {
    'app-container': Container,
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
.mobile-menu {
  border-bottom: 1px solid #efefef;
}

.mobile-menu__links {
  display: flex;
  min-height: 60px;
  align-items: center;
}

.mobile-menu__button {
  margin-left: 30px;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  cursor: pointer;
}

.navigation__list {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.navigation__item {
  margin-right: 30px;
}

.navigation__item:last-of-type {
  margin-right: 0;
}

.navigation__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  text-decoration: none;
}

.navigation__link:hover {
  opacity: 0.8;
}

.navigation__link_active {
  border-bottom: 1px solid #000;
}

@media (max-width: 768px) {
  .mobile-menu__button {
    font-size: 16px;
    line-height: 24px;
  }

  .navigation__link {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 425px) {
  .mobile-menu__links {
    flex-direction: column;
    align-items: initial;
    padding: 18px 0;
  }

  .mobile-menu__button {
    margin-left: 0;
    margin-top: 18px;
    font-size: 13px;
    line-height: 16px;
    text-align: left;
  }

  .navigation__list {
    flex-direction: column;
  }

  .navigation__item {
    margin-bottom: 18px;
  }

  .navigation__item:last-of-type {
    margin-bottom: 0;
  }

  .navigation__link {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
