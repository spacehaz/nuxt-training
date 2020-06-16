<template>
  <keep-alive>
    <transition name="fade" mode="out-in">
      <div class="video-preview" v-if="isVisible">
        <button
          class="video-preview__play-btn"
          @click.stop="toggleVisibility"
        ></button>
        <div
          class="swiper__video-preview-picture"
          :style="{ backgroundImage: `url(${imageUrl})` }"
        ></div>
      </div>
    </transition>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.video-preview {
  position: relative;
}

.video-preview__play-btn {
  border: 0;
  padding: 0;
  cursor: pointer;
  background-image: url('~assets/images/play-btn-default.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
  transition: all 0.3s linear;
}

.video-preview__play-btn:hover {
  background-image: url('~assets/images/play-btn-hover.svg');
}

.video-preview__play-btn:focus {
  outline: none;
}

.swiper__video-preview-picture {
  background-size: cover;
  background-position: center;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

@media (max-width: 1280px) {
  .video-preview__play-btn {
    width: 76px;
    height: 76px;
  }
}

@media (max-width: 425px) {
  .video-preview__play-btn {
    width: 38px;
    height: 38px;
  }
}
</style>
