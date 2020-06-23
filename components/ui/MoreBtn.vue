<template>
  <nuxt-link to="/stories" class="more-btn">Больше статей</nuxt-link>
</template>

<style scoped>
.more-btn {
  display: block;
  padding: 30px 0;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  text-align: center;
  text-decoration: none;
  background-color: #fbfbfb;
  transition: background-color 0.3s linear;
}

.more-btn:hover {
  background-color: #f8f8f8;
}

@media (max-width: 1024px) {
  .more-btn {
    padding: 17px 0;
  }
}

@media (max-width: 425px) {
  .more-btn {
    padding: 15px 0;
  }
}
</style>
