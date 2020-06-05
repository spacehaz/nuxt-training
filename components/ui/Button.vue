<template>
  <button
    :class="[
      'button',
      `button_size_${size}`,
      { button_disabled: disabled },
      { 'button_low-priority': lowPriority },
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'm',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    lowPriority: {
      type: Boolean,
      default: false,
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
  transition: opacity 0.2s linear;
}

.button_disabled {
  opacity: 0.8;
  cursor: default;
}

:not(.button_disabled).button:hover {
  opacity: 0.9;
}

.button_size_m {
  width: 280px;
}

.button_size_s {
  width: 226px;
}

.button_size_content {
  width: initial;
}

.button_low-priority {
  font-weight: normal;
  color: #666;
  background: none;
}

@media (max-width: 1024px) {
  .button {
    font-size: 15px;
    line-height: 46px;
  }
}

@media (max-width: 425px) {
  .button {
    font-size: 13px;
    line-height: 40px;
  }
}
</style>
