<template>
  <ul class="previews">
    <li class="previews__item" v-for="story in stories" :key="story.id">
      <app-preview-story
        :imageSrc="`${API_URL}${story.ImageUrl[0].url}`"
        :author="story.author"
        :quote="story.title"
        :id="story.id"
      ></app-preview-story>
    </li>
  </ul>
</template>

<script>
import PreviewStory from '@/components/blocks/PreviewStory';

export default {
  props: {
    random: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    stories() {
      if (this.random) {
        return this.$store.getters['stories/getRandomStories'];
      } else if (this.featured) {
        return this.$store.getters['stories/getFeaturedStories'];
      }
      return this.$store.getters['stories/getStories'];
    },
  },
  components: {
    'app-preview-story': PreviewStory,
  },
  data() {
    return {
      API_URL: process.env.API_URL,
    };
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
