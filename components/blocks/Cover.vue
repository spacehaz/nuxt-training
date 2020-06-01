<template>
  <section class="cover" ref="cover">
    <h1 class="cover__main-title">{{ hashtag }}</h1>
    <app-scroll-down-arrow class="cover__scroll" :hash="hash" />
  </section>
</template>

<script>
import ScrollDownArrow from '@/components/ui/ScrollDownArrow';
export default {
  computed: {
    hashtag() {
      return this.$store.getters['blocks/getBlocks'].cover.hashtag;
    },
  },
  data() {
    return {
      hash: null,
    };
  },
  components: {
    'app-scroll-down-arrow': ScrollDownArrow,
  },
  mounted() {
    this.hash = this.$refs.cover;
  },
};
</script>
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

.cover__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1280px) {
  .cover {
    min-height: calc(100vh - 72px);
  }

  .cover__main-title {
    font-size: 78px;
    line-height: 94px;
  }
}

@media (max-width: 768px) {
  .cover__main-title {
    font-size: 64px;
    line-height: 77px;
  }
}

@media (max-width: 568px) {
  .cover__main-title {
    font-size: 50px;
    line-height: 60px;
  }
}

@media (max-width: 425px) {
  .cover {
    min-height: calc(100vh - 64px);
  }

  .cover__main-title {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
