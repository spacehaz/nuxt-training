<template>
  <div class="popup">
    <slot name="quiz" v-if="isQuizShown"></slot>
    <slot name="contact-us" v-if="isContactUsShown"></slot>
    <slot name="share-us" v-if="isShareUsShown"></slot>
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
  computed: {
    isQuizShown() {
      return this.$store.getters['quiz/getQuizVisibility'];
    },
    isContactUsShown() {
      return this.$store.getters['contact-us/getContactUsVisibility'];
    },
    isShareUsShown() {
      return this.$store.getters['share-us/getShareUsVisibility'];
    },
  },
  methods: {
    toggleQuiz() {
      this.$store.dispatch('quiz/closeQuiz');
      this.$store.dispatch('contact-us/closeContactUs');
      this.$store.dispatch('share-us/closeShareUs');
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
  overflow: auto;
}

.popup__close {
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
}
</style>
