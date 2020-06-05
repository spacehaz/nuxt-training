<template>
  <div
    class="slider"
    v-swiper:mySwiper="swiperOption"
    ref="mySwiper"
    @slideChange="onSlide"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="video in videos" :key="video.id">
        <app-video-preview
          class="swiper__video-preview-picture"
          :imageUrl="video.picture"
          :index="video.id"
          :key="video.id"
        ></app-video-preview>
        <iframe
          :src="video.url + '?enablejsapi=1'"
          class="swiper__video"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPreview from '@/components/ui/VideoPreview';
export default {
  components: {
    'app-video-preview': VideoPreview,
  },
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
  methods: {
    onSlide() {
      const realIndex = this.$refs.mySwiper.swiper.realIndex;
      if (realIndex === 0) {
        this.$refs.mySwiper.swiper.slideToLoop(0, 500, true);
      } else if (realIndex === this.videos.length - 1) {
        this.$refs.mySwiper.swiper.slideToLoop(realIndex, 500, true);
      }
      Array.prototype.forEach.call(
        this.$refs.mySwiper.querySelectorAll('.swiper__video'),
        iframe => {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'pauseVideo' }),
            '*'
          );
        }
      );
    },
  },
};
</script>

<style scoped>
.swiper__video {
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  z-index: 5;
}

.swiper-slide {
  position: relative;
}

.swiper__video-preview-picture {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 60;
}
</style>
