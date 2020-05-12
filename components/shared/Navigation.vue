<template>
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
</template>

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
</style>
