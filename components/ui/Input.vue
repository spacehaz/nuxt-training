<template>
  <input type="text" class="input" />
</template>

<style scoped>
.input {
  padding: 10px;
  font-size: 18px;
  line-height: 24px;
}

.input::placeholder {
  font-family: Inter;
  color: #666;
}

.input:focus {
  outline: 1px solid #613a93;
}
</style>
