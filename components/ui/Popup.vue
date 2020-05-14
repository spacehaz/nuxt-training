<template>
  <div class="popup">
    <slot></slot>
    <app-close-btn @click.native="toggleQuiz" />
  </div>
</template>

<script>
import CloseBtn from '@/components/ui/CloseBtn';

export default {
  components: {
    'app-close-btn': CloseBtn,
  },
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
}
</style>
