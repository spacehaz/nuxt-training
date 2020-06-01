<template>
  <input
    :type="type"
    :value="value"
    class="input"
    :class="{ input_bordered: bordered }"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  padding-left: 0;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
}

.input_bordered {
  padding-left: 10px;
  border: 1px solid #e8e8e8;
}

.input::placeholder {
  font-family: Inter;
  color: #666;
}

.input:focus {
  outline: none;
  border-bottom: 1px solid #613a93;
}

.input_bordered:focus {
  outline: none;
  border: 1px solid #613a93;
}
</style>
