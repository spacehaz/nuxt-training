<template>
  <ul class="gallery">
    <li class="gallery__item" v-for="(image, index) in gallery" :key="index">
      <a href="#" class="gallery__link">
        <picture class="gallery__picture">
          <img :src="image" alt="" class="gallery__image" />
        </picture>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    gallery: Array,
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
}

.gallery__picture {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  display: block;
}

.gallery__image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center center;
  position: absolute;
}
</style>
