<template>
  <img
    src="/close.svg"
    alt="Закрыть"
    class="close-btn"
    @click="$emit('toggleQuiz')"
  />
</template>

<style scoped>
.close-btn {
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
}
</style>
