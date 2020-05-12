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
  components: {
    'app-container': Container,
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
.callout {
  background: #613a93;
  border: 1px solid #000000;
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
</style>
