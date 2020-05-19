<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 60px;
}
@media screen and (max-width: 1280px) {
  .container {
    padding: 0 50px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0 40px;
  }
}
@media screen and (max-width: 485px) {
  .container {
    padding: 0 15px;
  }
}
</style>
