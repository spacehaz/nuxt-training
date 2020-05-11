<template>
  <section class="cover">
    <h1 class="cover__main-title">#РАКЛЕЧИТСЯ</h1>
    <a href="#intro" class="cover__scroll">
      <svg class="cover__scroll-arrow" xmlns="http://www.w3.org/2000/svg">
        <path d="M37 1L19 13L1 1"></path>
      </svg>
    </a>
  </section>
</template>

<style scoped>
.cover {
  position: relative;
  display: flex;
  min-height: 689px;
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
  stroke: #fff;
  stroke-width: 2px;
  fill: none;
}

.cover__scroll-arrow:hover {
  opacity: 0.8;
}
</style>
