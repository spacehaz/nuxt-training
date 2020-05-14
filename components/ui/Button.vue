<template>
  <button :class="['button', `button_size-${size}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: String,
  },
};
</script>

<style scoped>
.button {
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
  color: #fff;
  background: #613a93;
  border: 0;
  cursor: pointer;
}

.button:hover {
  opacity: 0.9;
}

.button_size-m {
  width: 280px;
}

.button_size-s {
  width: 226px;
}
</style>
