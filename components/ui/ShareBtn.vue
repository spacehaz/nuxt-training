<template>
  <button type="button" class="share-btn" @click="toggleShareUs">
    <!--<slot>Поделитесь &#8599;</slot>-->
    <slot>Поделитесь </slot>
  </button>
</template>

<script>
export default {
  methods: {
    toggleShareUs() {
      this.$store.dispatch('share-us/showShareUs');
      this.$store.commit('popup/togglePopupVisibility');
    },
  },
};
</script>
<style scoped>
.share-btn {
  padding: 0 18px 0 0;
  font-size: 18px;
  line-height: 18px;
  color: #121212;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  transition: opacity 0.3s linear;
  background-image: url('~assets/images/arrow-top-right.svg');
  background-repeat: no-repeat;
  background-position: top right;
}

.share-btn:hover {
  opacity: 0.8;
}

.share-btn:focus {
  outline: none;
}

@media (max-width: 1280px) {
  .share-btn {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 425px) {
  .share-btn {
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
