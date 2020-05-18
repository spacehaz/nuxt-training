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
  column-gap: 40px;
  row-gap: 70px;
  padding: 0;
  list-style: none;
}

@media (max-width: 1280px) {
  .previews {
    row-gap: 60px;
  }
}

@media (max-width: 1024px) {
  .previews {
    column-gap: 30px;
    row-gap: 46px;
  }
}

@media (max-width: 768px) {
  .previews {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }
}

@media (max-width: 568px) {
  .previews {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
}

@media (max-width: 425px) {
  .previews {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
}
</style>
