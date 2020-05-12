<template>
  <button type="button" class="share-btn">
    <slot>Поделитесь &#8599;</slot>
  </button>
</template>

<style scoped>
.share-btn {
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  background-color: transparent;
  cursor: pointer;
  border: 0;
}

.share-btn:hover {
  opacity: 0.8;
}
</style>
