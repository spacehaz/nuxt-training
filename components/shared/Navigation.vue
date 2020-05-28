<template>
  <nav class="navigation">
    <ul class="navigation__list" v-if="decorate">
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
    <ul class="navigation__list" v-else>
      <li class="navigation__item">
        <nuxt-link to="/" class="navigation__link">
          Главная
        </nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link to="/stories" class="navigation__link">
          Истории
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    decorate: {
      type: Boolean,
      default: true,
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
}

.navigation__link:hover {
  opacity: 0.8;
}

.navigation__link_active {
  border-bottom: 1px solid #000;
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
