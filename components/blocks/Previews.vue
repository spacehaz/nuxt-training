<template>
  <div class="previews">
    <app-preview-story
      :story="story"
      v-for="(story, index) in stories"
      :key="index"
    ></app-preview-story>
  </div>
</template>

<script>
import PreviewStory from './PreviewStory';

export default {
  components: {
    'app-preview-story': PreviewStory,
  },
  props: {
    stories: Array,
  },
};
</script>

<style scoped>
.previews {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}
</style>
