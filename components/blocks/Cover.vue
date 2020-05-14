<template>
  <section class="cover">
    <h1 class="cover__main-title">#РАКЛЕЧИТСЯ</h1>
    <a
      href="#intro"
      class="cover__scroll"
      aria-label="Показать следующий раздел"
    >
      <img
        class="cover__scroll-arrow"
        src="/scroll.svg"
        alt="Показать следующий блок"
      />
    </a>
  </section>
</template>

<style scoped>
.cover {
  position: relative;
  display: flex;
  min-height: calc(100vh - 76px);
  background-color: #613a93;
}

.cover__main-title {
  margin: auto;
  color: #fff;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
}

.cover__scroll-arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 38px;
  height: 15px;
  transform: translateX(-50%);
}

.cover__scroll-arrow:hover {
  opacity: 0.8;
}
</style>
