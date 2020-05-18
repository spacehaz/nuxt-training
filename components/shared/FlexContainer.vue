<template>
  <div class="flex-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 60px;
}

@media screen and (max-width: 1280px) {
  .flex-container {
    padding: 0 50px;
  }
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    padding: 0 40px;
  }
}

@media screen and (max-width: 485px) {
  .flex-container {
    padding: 0 15px;
  }
}
</style>
