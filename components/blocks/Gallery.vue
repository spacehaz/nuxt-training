<template>
  <ul class="gallery">
    <li class="gallery__item" v-for="(image, index) in gallery" :key="index">
      <a :href="image.url" class="gallery__link" target="_blank">
        <img
          :src="image.display_url"
          :alt="image.accessibility_caption"
          class="gallery__image"
        />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    gallery() {
      return this.$store.getters['gallery/getPhotos'];
    },
  },
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 0;
  list-style: none;
}

.gallery__link {
  display: block;
  padding-top: 100%;
  position: relative;
  transition: opacity 0.2s linear;
}

.gallery__link:hover {
  opacity: 0.8;
}
.gallery__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
}

@media (max-width: 1280px) {
  .gallery {
    grid-gap: 27px;
  }
}

@media (max-width: 1024px) {
  .gallery {
    grid-gap: 20px;
  }
}

@media (max-width: 568px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}
</style>
