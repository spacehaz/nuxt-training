<template>
  <section class="intro">
    <app-flex-container class="intro__container">
      <div class="intro__info">
        <div class="intro__text-container">
          <app-title :theme="theme" class="intro__title">
            {{ title }}
          </app-title>
          <app-paragraph :theme="theme" class="intro__paragraph" v-html="text">
          </app-paragraph>
        </div>
        <div class="intro__nav intro__nav_place_info">
          <button
            class="intro__nav-btn intro__nav-btn_left"
            aria-label="Показать следующее видео"
          ></button>
          <button
            class="intro__nav-btn intro__nav-btn_right"
            aria-label="Показать предыдущее видео"
          ></button>
        </div>
      </div>
      <figure class="intro__video-container">
        <div class="intro__video-content">
          <app-slider class="intro__video"></app-slider>
          <button
            class="intro__nav-btn intro__nav-btn_left intro__nav-btn_place_video"
            aria-label="Показать следующее видео"
          ></button>
          <button
            class="intro__nav-btn intro__nav-btn_right intro__nav-btn_place_video"
            aria-label="Показать предыдущее видео"
          ></button>
        </div>
        <figcaption class="intro__caption">
          <!--Все видео вы можете найте на нашем-->
          <a
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            class="intro__caption-link"
            target="_blank"
          >
            <!--YouTube канале.-->
            {{ note }}
          </a>
        </figcaption>
      </figure>
    </app-flex-container>
  </section>
</template>

<script>
import FlexContainer from '@/components/shared/FlexContainer';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';
import Slider from '@/components/ui/Slider';

export default {
  components: {
    'app-flex-container': FlexContainer,
    'app-title': Title,
    'app-paragraph': Paragraph,
    'app-slider': Slider,
  },
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].videos.title;
    },
    note() {
      return this.$store.getters['blocks/getBlocks'].videos.note;
    },
    text() {
      return this.$store.getters['blocks/getBlocks'].videos.text;
    },
  },
  data() {
    return {
      theme: 'light',
    };
  },
};
</script>

<style scoped>
.intro__container {
  align-items: flex-start;
}

.intro__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  padding-top: 10px;
  margin-right: 20px;
}

.intro__title {
  margin-bottom: 32px;
}

.intro__video-container {
  width: 867px;
}

.intro__video-content {
  position: relative;
  margin-bottom: 10px;
}

.intro__nav-btn_place_video.intro__nav-btn {
  display: none;
}

.intro__video {
  width: 100%;
  height: 450px;
  border: 0;
  background-color: #ededed;
}

.intro__caption {
  font-size: 12px;
  line-height: 16px;
  color: #666;
}

.intro__caption-link {
  color: inherit;
}

.intro__caption-link:hover {
  opacity: 0.8;
}

.intro__nav_place_info {
  display: flex;
}

.intro__nav-btn {
  width: 40px;
  height: 40px;
  display: flex;
  border: none;
  background-color: #fbfbfb;
  transition: background-color 0.2s linear;
}

.intro__nav-btn:focus {
  outline: none;
}

.intro__nav-btn:hover {
  cursor: pointer;
  background-color: #f4f4f4;
}

.intro__nav-btn:disabled {
  opacity: 0.2;
}

.intro__nav-btn:disabled:hover {
  background-color: #fbfbfb;
  cursor: default;
}

.intro__nav-btn_right {
  background-image: url('/arrow-right.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.intro__nav-btn_left {
  background-image: url('/arrow-right.svg');
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(180deg);
}

@media (max-width: 1280px) {
  .intro__info {
    min-height: 400px;
  }

  .intro__title {
    margin-bottom: 30px;
  }

  .intro__video-container {
    width: 773px;
  }

  .intro__video {
    height: 400px;
  }
}

@media (max-width: 1024px) {
  .intro__info {
    min-height: 314px;
  }

  .intro__title {
    margin-bottom: 20px;
  }

  .intro__video-container {
    width: 606px;
  }

  .intro__video {
    height: 314px;
  }
}

@media (max-width: 768px) {
  .intro__container {
    align-items: center;
  }

  .intro__info {
    min-height: initial;
    margin-bottom: 60px;
    margin-right: 0;
  }

  .intro__title {
    margin-bottom: 26px;
    text-align: center;
  }

  .intro__video-container {
    width: 100%;
    padding-left: 54px;
    padding-right: 54px;
  }

  .intro__video-content {
    margin-bottom: 20px;
  }

  .intro__video {
    height: 300px;
  }

  .intro__nav_place_info {
    display: none;
  }

  .intro__nav-btn_place_video.intro__nav-btn {
    position: absolute;
    display: block;
  }

  .intro__nav-btn_place_video.intro__nav-btn_right {
    right: -54px;
    top: 50%;
    transform: translateY(-50%);
  }

  .intro__nav-btn_place_video.intro__nav-btn_left {
    left: -54px;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
  }
}

@media (max-width: 568px) {
  .intro__video-container {
    padding: 0;
  }

  .intro__nav-btn {
    width: 8px;
    height: 16px;
    background-color: transparent;
  }

  .intro__nav-btn_place_video.intro__nav-btn {
    display: none;
  }

  .intro__video-content:hover .intro__nav-btn_place_video.intro__nav-btn {
    display: block;
    z-index: 1000;
    background-color: #613a93;
    padding: 10px;
  }

  .intro__nav-btn_place_video.intro__nav-btn_right {
    right: 6px;
  }

  .intro__nav-btn_place_video.intro__nav-btn_left {
    left: 6px;
  }
}

@media (max-width: 425px) {
  .intro__title {
    margin-bottom: 16px;
    text-align: left;
  }

  .intro__video-container {
    width: 100%;
  }

  .intro__video-content {
    margin-bottom: 0;
  }

  .intro__video {
    height: 150px;
  }

  .intro__caption {
    display: none;
  }
}
</style>
