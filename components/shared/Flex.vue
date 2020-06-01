<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }
}
</style>
