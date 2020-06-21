<template>
  <app-container>
    <div class="callout">
      <p class="callout__title">
        {{ title }}
        <span class="callout__hashtag">#ЭТОНЕЛЕЧИТСЯ</span>
      </p>
    </div>
  </app-container>
</template>

<script>
import Container from '@/components/shared/Container';

export default {
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'][this.block].title;
    },
    hashtag() {
      return this.$store.getters['blocks/getBlocks'][this.block].hashtag;
    },
  },
  components: {
    'app-container': Container,
  },
  props: {
    block: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.callout {
  background: #613a93;
}

.callout__title {
  max-width: 750px;
  margin: 0 auto;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  padding: 20px 0;
  color: #fff;
  text-transform: uppercase;
}

.callout__hashtag {
  font-weight: 800;
  font-size: 36px;
}

@media (max-width: 1280px) {
  .callout__title {
    font-size: 28px;
  }

  .callout__hashtag {
    font-size: 34px;
  }
}

@media (max-width: 1024px) {
  .callout__title {
    max-width: 610px;
    font-size: 24px;
    line-height: 40px;
  }

  .callout__hashtag {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .callout__title {
    max-width: 444px;
    padding: 12px 0;
    font-size: 22px;
    line-height: 36px;
  }

  .callout__hashtag {
    font-size: 28px;
  }
}

@media (max-width: 425px) {
  .callout__title {
    max-width: 220px;
    padding: 15px 0;
    font-size: 16px;
    line-height: 24px;
  }

  .callout__hashtag {
    font-size: 22px;
  }
}
</style>
