<template>
  <div class="slider" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="video in videos" :key="video.id">
        <iframe :src="video.url" class="swiper__video"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.intro__nav-btn_right',
          prevEl: '.intro__nav-btn_left',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
  computed: {
    videos() {
      return this.$store.getters['videos/getVideos'];
    },
  },
};
</script>

<style scoped>
.swiper__video {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
