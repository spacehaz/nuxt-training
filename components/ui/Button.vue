<template>
  <button :class="['button', `button_size_${size}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true,
    },
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

.button_size_m {
  width: 280px;
}

.button_size_s {
  width: 226px;
}
</style>
