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
</style>
