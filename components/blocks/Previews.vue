<template>
  <ul class="previews">
    <li
      class="previews__item"
      v-for="(story, index) in stories"
      :key="story.id"
    >
      <app-preview-story
        :imageSrc="story.imageSrc"
        :author="story.author"
        :quote="story.quote"
        :id="story.id"
      ></app-preview-story>
    </li>
  </ul>
</template>

<script>
import PreviewStory from '@/components/blocks/PreviewStory';

export default {
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
  components: {
    'app-preview-story': PreviewStory,
  },
};
</script>

<style scoped>
.previews {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  padding: 0;
  list-style: none;
}
</style>
