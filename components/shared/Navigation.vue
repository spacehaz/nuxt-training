<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item" v-for="(link, index) in links" :key="index">
        <nuxt-link
          :to="link.path"
          class="navigation__link"
          active-class="navigation__link_active"
          exact
        >
          {{ link.item }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['links'],
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
</style>
