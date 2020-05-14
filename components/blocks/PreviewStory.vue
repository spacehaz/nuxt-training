<template>
  <nuxt-link
    :to="{ path: `/stories/${story.id}` }"
    :key="story.id"
    class="preview-story"
  >
    <picture class="preview-story__picture">
      <img class="preview-story__image" src="" alt="" />
    </picture>
    <p class="preview-story__author">{{ story.author }}</p>
    <blockquote class="preview-story__blockquote">
      {{ story.quote }}
    </blockquote>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    story: Object,
  },
};
</script>

<style scoped>
.preview-story {
  display: block;
  text-decoration: none;
}

.preview-story:hover {
  opacity: 0.8;
}

.preview-story__picture {
  position: relative;
  display: block;
  height: 0;
  width: 100%;
  padding-top: 100%;
  margin-bottom: 20px;
}

.preview-story__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  background-color: grey;
}

.preview-story__author {
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  color: #000;
}

.preview-story__blockquote {
  max-width: 250px;
  font-size: 14px;
  line-height: 18px;
  color: #666;
}
</style>
