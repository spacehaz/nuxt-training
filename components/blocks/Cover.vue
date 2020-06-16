<template>
  <section class="cover" ref="cover">
    <div class="cover__content">
      <h1 class="cover__main-title">{{ hashtag }}</h1>
      <app-share-story-btn :theme="'cover'" class="cover__button" />
      <app-scroll-down-arrow class="cover__scroll" :hash="hash" />
    </div>
    <div class="cover__image"></div>
    <client-only>
      <video
        autoplay
        muted
        loop
        class="cover__video-background"
        v-if="showBackCoverVideo"
      >
        <source src="@/assets/videos/rak.mp4" type="video/mp4" />
      </video>
    </client-only>
  </section>
</template>

<script>
import ScrollDownArrow from '@/components/ui/ScrollDownArrow';
import ShareStoryBtn from '@/components/ui/ShareStoryBtn';

export default {
  computed: {
    hashtag() {
      return this.$store.getters['blocks/getBlocks'].cover.hashtag;
    },
    showBackCoverVideo() {
      if (process.browser) {
        if (window.innerWidth <= 768) {
          return false;
        } else {
          return true;
        }
      }
    },
  },
  data() {
    return {
      hash: null,
    };
  },
  components: {
    'app-scroll-down-arrow': ScrollDownArrow,
    'app-share-story-btn': ShareStoryBtn,
  },
  mounted() {
    this.hash = this.$refs.cover;
  },
};
</script>
<style scoped>
.cover__video-background {
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.cover__content {
  margin: auto;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 76px);
  width: 100%;
}

.cover__image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('~assets/images/background-cover.png');
  opacity: 0.8;
  z-index: 10;
}

.cover {
  position: relative;
  display: flex;
  min-height: calc(100vh - 76px);
}

.cover__button {
  margin-top: 30px;
}

.cover__button:focus {
  outline: none;
}

.cover__main-title {
  color: #fff;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
}
.cover__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 1280px) {
  .cover {
    min-height: calc(100vh - 72px);
  }
  .cover__main-title {
    font-size: 78px;
    line-height: 94px;
  }

  .cover__button {
    width: 314px;
    min-height: 58px;
    font-size: 22px;
    line-height: 36px;
  }
}

@media (max-width: 1024px) {
  .cover__button {
    width: 294px;
    min-height: 56px;
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .cover__main-title {
    font-size: 64px;
    line-height: 77px;
  }
}
@media (max-width: 568px) {
  .cover__main-title {
    font-size: 50px;
    line-height: 60px;
  }
}
@media (max-width: 425px) {
  .cover {
    min-height: calc(100vh - 64px);
  }
  .cover__main-title {
    font-size: 36px;
    line-height: 44px;
  }

  .cover__button {
    width: 224px;
    min-height: 44px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
