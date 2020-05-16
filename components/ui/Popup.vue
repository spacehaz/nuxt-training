<template>
  <div class="popup">
    <slot></slot>
    <img
      src="/close.svg"
      alt="Закрыть"
      class="popup__close"
      @click="toggleQuiz"
    />
  </div>
</template>

<script>
export default {
  methods: {
    toggleQuiz() {
      this.$store.commit('popup/togglePopupVisibility');
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: inline-block;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow: scroll;
}

.popup__close {
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
}
</style>
