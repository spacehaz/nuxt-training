<template>
  <section class="intro" id="intro">
    <app-flex-container class="intro__container">
      <div class="intro__info">
        <div class="intro__text-container">
          <app-title :theme="theme" class="intro__title">
            Истории людей, победивших рак, но не свои привычки
          </app-title>
          <app-paragraph :theme="theme" class="intro__paragraph">
            Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
            фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
            доказательство — люди с их историями.
          </app-paragraph>
        </div>
        <div class="intro__nav">
          <button class="intro__nav-btn intro__nav-btn_disabled">
            <img
              class="intro__arrow intro__arrow_left"
              src="/arrow-right.svg"
              alt="Показать следующее видео"
            />
          </button>
          <button class="intro__nav-btn">
            <img
              class="intro__arrow"
              src="/arrow-right.svg"
              alt="Показать предыдущее видео"
            />
          </button>
        </div>
      </div>
      <figure class="intro__video-container">
        <iframe src="" class="intro__video"></iframe>
        <figcaption class="intro__caption">
          Все видео вы можете найте на нашем
          <a
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            class="intro__caption-link"
          >
            YouTube канале.
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

export default {
  components: {
    'app-flex-container': FlexContainer,
    'app-title': Title,
    'app-paragraph': Paragraph,
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
}

.intro__title {
  margin-bottom: 32px;
}

.intro__video-container {
  width: 867px;
}

.intro__video {
  width: 100%;
  height: 450px;
  margin-bottom: 10px;
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

.intro__nav {
  display: flex;
}

.intro__nav-btn {
  width: 40px;
  height: 40px;
  display: flex;
  border: none;
  background-color: #fbfbfb;
}

.intro__nav-btn:hover {
  cursor: pointer;
  background-color: #f4f4f4;
}

.intro__nav-btn_disabled {
  opacity: 0.2;
}

.intro__nav-btn_disabled:hover {
  background-color: #fbfbfb;
  cursor: default;
}

.intro__arrow {
  margin: auto;
}

.intro__arrow_left {
  transform: rotate(180deg);
}
</style>
