<template>
  <div class="root">
    <app-header />
    <nuxt />
    <app-footer class="root__footer" />
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style>
html {
  font-family: Inter, Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}

.root__intro {
  padding-top: 100px;
  padding-bottom: 74px;
}

.root__habits {
  padding: 100px 0;
}

.root__instagram {
  padding: 100px 0;
}

.root__share-your-story {
  padding: 100px 0;
}

.root__about {
  padding-top: 90px;
  padding-bottom: 100px;
}

.root__statistics {
  padding: 100px 0;
}

.root__footer {
  padding-top: 60px;
  padding-bottom: 60px;
}

.root__stories-list {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
