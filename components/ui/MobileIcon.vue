<template>
  <button
    :class="[
      'mobile-button',
      { 'mobile-button_type_close': isMobileMenuOpened },
    ]"
    @click="toggleMobileMenuState"
  ></button>
</template>

<script>
export default {
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/isMobileMenuOpened'];
    },
  },
  methods: {
    toggleMobileMenuState() {
      this.$store.dispatch('mobile-menu/toggleMobileMenuState');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 40px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='3' viewBox='0 0 32 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='1.5' x2='32' y2='1.5' stroke='black' stroke-width='3'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.mobile-button.mobile-button_type_close {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.92879' y1='7.92912' x2='22.0709' y2='22.0713' stroke='black' stroke-width='2'/%3E%3Cline x1='7.92912' y1='22.0712' x2='22.0713' y2='7.92908' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
}

@media (max-width: 425px) {
  .mobile-button {
    width: 26px;
    height: 28px;
  }
}
</style>
