<template>
  <input
    :type="type"
    :value="value"
    :placeholder="errorText || placeholder"
    :class="['input', { input_bordered: bordered, input_error: isError }]"
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
    isError: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: 'Напишите тут',
    },
  },
  computed: {
    errorText() {
      if (this.isError) {
        return 'Не заполнено';
      }
      return '';
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
  border-radius: 0;
  box-shadow: none;
  border-bottom: 1px solid #e7e7e7;
}

.input_bordered {
  padding-left: 10px;
  border: 1px solid #e8e8e8 !important;
}

.input::placeholder {
  font-family: Inter;
  color: #666;
}

.input_error::placeholder {
  color: #f00;
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
