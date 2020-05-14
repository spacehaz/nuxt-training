<template>
  <nuxt-link
    class="preview-story"
    :key="id"
    :to="{ name: 'stories-id', params: { id: id } }"
  >
    <div class="preview-story__image-container">
      <img class="preview-story__image" :src="imageSrc" alt="" />
    </div>
    <p class="preview-story__author">{{ author }}</p>
    <blockquote class="preview-story__blockquote">
      {{ quote }}
    </blockquote>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
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

.preview-story__image-container {
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
