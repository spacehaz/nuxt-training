<template>
  <a
    href="#"
    class="mobile-button"
    :class="[
      'mobile-button',
      { 'mobile-button_type_close': isMobileMenuOpened },
    ]"
    @click="toggleMobileMenuState"
  >
    <span></span>
  </a>
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
  position: relative;
  width: 32px;
  height: 28px;
  cursor: pointer;
}

.mobile-button span,
.mobile-button span::before,
.mobile-button span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2px;
  margin-left: -16px;
  width: 32px;
  height: 3px;
  background-color: #000;
}

.mobile-button span::before,
.mobile-button span::after {
  content: '';
  display: block;
  transition: 0.2s;
}

.mobile-button span::before {
  transform: translateY(-9px);
}

.mobile-button span::after {
  transform: translateY(9px);
}

.mobile-button_type_close span {
  height: 0;
}

.mobile-button_type_close span::before {
  transform: rotate(-45deg);
}

.mobile-button_type_close span::after {
  transform: rotate(45deg);
}
@media (max-width: 425px) {
  .mobile-button {
    width: 26px;
    height: 23px;
  }
  .mobile-button span,
  .mobile-button span::before,
  .mobile-button span::after {
    margin-left: -13px;
    width: 26px;
    height: 3px;
  }
  .mobile-button_type_close span {
    height: 0;
  }
}
</style>
