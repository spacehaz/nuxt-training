<template>
  <a
    @click.prevent="scrollDownSection"
    class="scroll"
    aria-label="Показать следующий раздел"
  >
    <img
      class="scroll__scroll-arrow"
      src="@/assets/images/scroll.svg"
      alt="Показать следующий блок"
    />
  </a>
</template>

<script>
export default {
  props: ['hash'],
  methods: {
    scrollDownSection() {
      const el = this.hash;
      const sibling = el.nextElementSibling;
      if (sibling) {
        window.scrollTo({ top: sibling.offsetTop, behavior: 'smooth' });
      }
    },
  },
};
</script>
<style scoped>
.scroll__scroll-arrow {
  width: 38px;
  height: 15px;
  cursor: pointer;
  transition: opacity 0.3s linear;
}

.scroll__scroll-arrow:hover {
  opacity: 0.8;
}
</style>
