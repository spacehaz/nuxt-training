<template>
  <section class="about">
    <app-container>
      <p class="about__hashtag">#РАКЛЕЧИТСЯ</p>
      <div class="about__content">
        <app-title :theme="theme" class="about__content-title">
          {{ title }}
        </app-title>
        <app-flex class="about__flex-container">
          <div class="about__paragraph-container">
            <app-paragraph
              :theme="theme"
              class="about__paragraph"
              v-html="text"
            />
            <app-share-story-btn
              :theme="'light'"
              class="about__button about__button_place_desktop"
            />
            <div class="about__lighthouse about__lighthouse_desktop"></div>
          </div>

          <div class="about__tabs tabs">
            <ul class="tabs__variants">
              <li
                :title="item.title"
                :class="[
                  'tabs__variant',
                  'tabs__variant_theme_main',
                  { tabs__variant_active: currentVariant === item.id },
                ]"
                @click="changeVariant(item.id)"
                v-for="item in extraTexts"
                :key="item.id"
              >
                {{ item.title }}
              </li>
            </ul>

            <div
              class="tabs__container tabs__container_theme_main"
              v-if="currentVariant === 2"
            >
              <div class="tabs__variant-text" v-html="firstText"></div>
            </div>

            <div class="tabs__container tabs__container_theme_main" v-else>
              <div class="tabs__variant-text" v-html="secondText"></div>
            </div>
            <div class="about__sea-image"></div>
          </div>

          <app-share-story-btn
            :theme="'light'"
            class="about__button about__button_place_mobile"
          />
          <div class="about__sea-image about__sea_mobile"></div>
        </app-flex>
      </div>
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Flex from '@/components/shared/Flex';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';
import ShareStoryBtn from '@/components/ui/ShareStoryBtn';

export default {
  components: {
    'app-container': Container,
    'app-flex': Flex,
    'app-title': Title,
    'app-paragraph': Paragraph,
    'app-share-story-btn': ShareStoryBtn,
  },
  data() {
    return {
      theme: 'main',
      currentVariant: 0,
      firstVariant: 1,
      secondVariant: 2,
    };
  },
  methods: {
    changeVariant(id) {
      this.currentVariant = id;
    },
  },
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].about.title;
    },
    text() {
      return this.$store.getters['blocks/getBlocks'].about.text;
    },
    extraTexts() {
      return this.$store.getters['blocks/getBlocks'].about.extraTexts;
    },
    firstText() {
      const texts = this.$store.getters['blocks/getBlocks'].about.extraTexts;
      if (texts && texts[0]) {
        return texts[0].text;
      }
    },
    secondText() {
      const texts = this.$store.getters['blocks/getBlocks'].about.extraTexts;
      if (texts && texts[1]) {
        return texts[1].text;
      }
    },
  },
  mounted() {
    const texts = this.$store.getters['blocks/getBlocks'].about.extraTexts;
    if (texts && texts[0]) {
      this.currentVariant = texts[0].id;
    }
  },
};
</script>

<style scoped>
.about {
  min-height: 960px;
  background-color: #613a93;
  overflow: hidden;
}

.about__flex-container {
  align-items: flex-start;
}

.about__hashtag {
  margin-bottom: 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
}

.about__paragraph-container {
  flex: 0 0;
  margin-right: 60px;
}

.about__paragraph {
  margin-bottom: 32px;
}

.about__lighthouse {
  width: 238px;
  height: 170px;
  margin-top: 70px;
  background-image: url('~assets/images/lighthouse.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.about__sea-image {
  position: absolute;
  left: -85px;
  top: 270px;
  width: 932px;
  height: 320px;
  background-image: url('~assets/images/sea.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.about__sea_mobile {
  display: none;
  position: relative;
  left: 0px;
  top: 0px;
}

.about__button_place_mobile {
  display: none;
}

.about__content-title {
  margin-bottom: 32px;
}

.tabs {
  position: relative;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 40px;
  font-size: 18px;
  line-height: 22px;
}

.tabs__variants {
  list-style: none;
  padding: 0;
}

.tabs__variant {
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s linear;
}

.tabs__variant::after {
  display: block;
  content: attr(title);
  font-weight: 500;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.tabs__variant_active {
  font-weight: 500;
  cursor: default;
}

.tabs__variant:last-of-type {
  margin-bottom: 0;
}

.tabs__container {
  max-width: 640px;
}

.tabs__variant-text >>> p {
  margin-bottom: 24px;
}

.tabs__variant-text >>> p:last-of-type {
  margin-bottom: 0;
}

.tabs__variant-text {
  margin-bottom: 24px;
}

.tabs__variant-text:last-of-type {
  margin-bottom: 0;
}

.tabs__btn {
  margin-top: 78px;
}

/* Яркая тема */
.tabs__variant_theme_main {
  color: #c9c9c9;
}

.tabs__variant_theme_main.tabs__variant_active {
  color: #fff;
}

.tabs__variant_theme_main:hover {
  color: #fff;
}

.tabs__container_theme_main {
  color: #dedede;
}

@media (max-width: 1280px) {
  .about {
    min-height: 908px;
  }

  .about__hashtag {
    margin-bottom: 60px;
    font-size: 58px;
    line-height: 70px;
  }

  .tabs__container {
    max-width: 570px;
  }

  .about__content-title {
    margin-bottom: 30px;
  }

  .about__paragraph {
    margin-bottom: 30px;
  }

  .about__lighthouse {
    width: 218px;
    height: 155px;
  }

  .about__sea-image {
    width: 952px;
    height: 292px;
  }
}

@media (max-width: 1024px) {
  .about {
    min-height: 796px;
  }

  .about__hashtag {
    margin-bottom: 46px;
    font-size: 52px;
    line-height: 63px;
  }

  .about__content-title {
    margin-bottom: 20px;
  }

  .tabs {
    column-gap: 30px;
    font-size: 15px;
    line-height: 19px;
  }

  .tabs__container {
    max-width: 447px;
    min-height: 200px;
  }

  .about__lighthouse {
    width: 167px;
    height: 118px;
  }

  .about__sea-image {
    width: 657px;
    height: 225px;
  }
}

@media (max-width: 890px) {
  .about__sea-image {
    width: 500px;
    height: 200px;
    left: 0;
    top: 350px;
  }
}

@media (max-width: 820px) {
  .about__sea-image {
    left: -50px;
    top: 380px;
  }
}

@media (max-width: 768px) {
  .about {
    min-height: 662px;
  }

  .about__hashtag {
    display: none;
  }

  .about__content {
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;
  }

  .about__content-title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .about__paragraph-container {
    margin-right: 0;
    margin-bottom: 80px;
  }

  .about__paragraph {
    margin-bottom: 0;
  }

  .about__button_place_desktop {
    display: none;
  }

  .about__button_place_mobile {
    display: block;
    margin: auto;
  }

  .about__tabs {
    margin-bottom: 80px;
  }

  .tabs {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .tabs__container {
    min-height: 190px;
    max-width: 100%;
  }

  .tabs__variants {
    display: flex;
  }

  .tabs__variant {
    margin-bottom: 0;
    margin-right: 30px;
  }

  .tabs__variant_active {
    border-bottom: 2px solid #fff;
  }

  .about__sea-image {
    display: none;
  }

  .about__lighthouse_desktop {
    display: none;
  }

  .about__sea_mobile {
    display: block;
    margin: 60px auto 0;
    width: 300px;
    height: 139px;
    left: 0px;
    top: 0px;
  }
}

@media (max-width: 425px) {
  .about {
    min-height: initial;
  }

  .about__content-title {
    margin-bottom: 16px;
    text-align: left;
  }

  .about__paragraph-container {
    margin-bottom: 40px;
  }

  .about__tabs {
    margin-bottom: 50px;
  }

  .tabs {
    row-gap: 20px;
    font-size: 13px;
    line-height: 16px;
  }

  .tabs__container {
    min-height: 166px;
  }

  .tabs__variant {
    margin-bottom: 0;
    margin-right: 20px;
  }

  .about__sea_mobile {
    margin-top: 50px;
    display: block;
    width: 300px;
    height: 96px;
    left: 0px;
    top: 0px;
  }
}
</style>
