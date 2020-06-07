<template>
  <div class="popup">
    <div class="popup__content">
      <slot name="quiz" v-if="isQuizShown"></slot>
      <slot name="contact-us" v-if="isContactUsShown"></slot>
      <slot name="share-us" v-if="isShareUsShown"></slot>
      <slot></slot>
      <img
        src="@/assets/images/close.svg"
        alt="Закрыть"
        class="popup__close"
        @click="toggleQuiz"
      />
    </div>
    <div class="popup__error" v-show="!isContentValid" ref="error">
      <p class="popup__error-text">{{ errorText }}</p>
    </div>
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
    isContentValid() {
      return this.$store.getters['popup/getContentValidity'];
    },
    errorText() {
      return this.$store.getters['popup/getErrorText'];
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
  updated() {
    if (this.errorText) {
      const errorElem = this.$refs.error;
      errorElem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  overflow: auto;
}

.popup__content {
  display: inline-block;
  padding: 40px;
  vertical-align: bottom;
  background-color: #fff;
}

.popup__close {
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
}

.popup__error {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
}

.popup__error-text {
  color: #f00;
  font-size: 14px;
  line-height: 17px;
}

@media (max-width: 1280px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}

@media (max-width: 568px) {
}

@media (max-width: 425px) {
  .popup__close {
    top: 12px;
    right: 12px;
  }

  .popup__content {
    padding: 15px;
  }

  .popup__error {
    padding-left: 25px;
    padding-right: 25px;
  }

  .popup__error-text {
    font-size: 11px;
    line-height: 13px;
  }
}
</style>
