<template>
  <div class="previews">
    <app-preview-story
      :imageSrc="story.imageSrc"
      :author="story.author"
      :quote="story.quote"
      :id="story.id"
      v-for="(story, index) in stories"
      :key="story.id"
    ></app-preview-story>
  </div>
</template>

<script>
import PreviewStory from '@/components/blocks/PreviewStory';

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
