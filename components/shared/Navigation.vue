<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <nuxt-link
          to="/"
          class="navigation__link"
          active-class="navigation__link_active"
          exact
          :tag="isMain"
        >
          Главная
        </nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link
          to="/stories"
          class="navigation__link"
          active-class="navigation__link_active"
          exact
          :tag="isStories"
        >
          Истории
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isMain() {
      return this.$nuxt.$route.path === '/' ? 'p' : 'a';
    },
    isStories() {
      return this.$nuxt.$route.path === '/stories' ? 'p' : 'a';
    },
  },
};
</script>
<style scoped>
.navigation__list {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.navigation__item {
  margin-right: 40px;
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
  transition: opacity 0.3s linear;
  display: inline-block;
}

.navigation__link:hover {
  opacity: 0.8;
}

.navigation__link_active {
  border-bottom: 1px solid #000;
  cursor: default;
}

@media (max-width: 1280px) {
  .navigation__link {
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  .navigation__item {
    margin-right: 30px;
  }
}

@media (max-width: 768px) {
  .navigation__list {
    flex-direction: column;
  }

  .navigation__item {
    margin-bottom: 14px;
    margin-right: 0;
  }

  .navigation__item:last-of-type {
    margin-bottom: 0;
  }
}

@media (max-width: 670px) {
  .navigation__item {
    margin-bottom: 18px;
  }
}

@media (max-width: 425px) {
  .navigation__link {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
