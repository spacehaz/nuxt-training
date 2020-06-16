<template>
  <section class="share-your-story" id="form">
    <app-container class="share-your-story__container">
      <app-title :theme="theme" class="share-your-story__title">
        {{ title }}
      </app-title>
      <app-flex>
        <app-paragraph
          :theme="theme"
          class="share-your-story__paragraph"
          v-html="text"
        />

        <div class="share-your-story__tabs tabs">
          <ul class="tabs__variants">
            <li
              :title="item.title"
              :class="[
                'tabs__variant',
                'tabs__variant_theme_light',
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
            class="tabs__container tabs__container_theme_light"
            v-if="currentVariant === 1"
          >
            <div class="tabs__variant-text" v-html="firstText"></div>
            <app-button
              :size="size"
              class="tabs__btn"
              @click.native="toggleQuiz"
            >
              Заполнить форму
            </app-button>
          </div>

          <div class="tabs__container tabs__container_theme_light" v-else>
            <div class="tabs__variant-text" v-html="secondText"></div>
            <app-button
              :size="size"
              class="tabs__btn"
              @click.native="toggleContactUs"
            >
              Оставить контакт
            </app-button>
          </div>
        </div>
      </app-flex>
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Flex from '@/components/shared/Flex';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';
import Button from '@/components/ui/Button';

export default {
  components: {
    'app-container': Container,
    'app-flex': Flex,
    'app-title': Title,
    'app-paragraph': Paragraph,
    'app-button': Button,
  },
  data() {
    return {
      theme: 'light',
      currentVariant: 0,
      size: 'm',
    };
  },
  methods: {
    toggleQuiz() {
      this.$store.dispatch('quiz/showQuiz');
      this.$store.commit('popup/togglePopupVisibility');
    },
    toggleContactUs() {
      this.$store.dispatch('contact-us/showContactUs');
      this.$store.commit('popup/togglePopupVisibility');
    },
    changeVariant(id) {
      this.currentVariant = id;
    },
  },
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].story.title;
    },
    text() {
      return this.$store.getters['blocks/getBlocks'].story.text;
    },
    extraTexts() {
      return this.$store.getters['blocks/getBlocks'].story.extraTexts;
    },
    firstText() {
      const texts = this.$store.getters['blocks/getBlocks'].story.extraTexts;
      if (texts && texts[0]) {
        return texts[0].text;
      }
    },
    secondText() {
      const texts = this.$store.getters['blocks/getBlocks'].story.extraTexts;
      if (texts && texts[1]) {
        return texts[1].text;
      }
    },
  },
  mounted() {
    const texts = this.$store.getters['blocks/getBlocks'].story.extraTexts;
    if (texts && texts[0]) {
      this.currentVariant = texts[0].id;
    }
  },
};
</script>

<style scoped>
.share-your-story {
  background-color: #f7f7f7;
}

.share-your-story__title {
  margin-bottom: 32px;
}

.share-your-story__paragraph {
  margin-right: 50px;
}

.tabs {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 40px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 640px;
  min-height: 215px;
}

.tabs__variant-text >>> p {
  margin-bottom: 36px;
}

.tabs__variant-text >>> p:last-of-type {
  margin-bottom: 0;
}

.tabs__variant-text {
  margin-bottom: 36px;
}

.tabs__variant-text:last-of-type {
  margin-bottom: 0;
}

.tabs__variant_theme_light {
  color: #a2a2a2;
}

.tabs__variant_theme_light.tabs__variant_active {
  color: #000;
}

.tabs__variant_theme_light:hover {
  color: #000;
}

.tabs__container_theme_light {
  color: #666;
}

@media (max-width: 1280px) {
  .tabs__container {
    max-width: 570px;
  }

  .share-your-story__title {
    margin-bottom: 30px;
  }
}

@media (max-width: 1024px) {
  .share-your-story__title {
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
}

@media (max-width: 768px) {
  .share-your-story__container {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .share-your-story__title {
    margin-bottom: 26px;
    text-align: center;
  }

  .share-your-story__paragraph {
    margin-right: 0;
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
    border-bottom: 2px solid #613a93;
  }
}

@media (max-width: 425px) {
  .share-your-story__title {
    margin-bottom: 16px;
    text-align: left;
  }

  .share-your-story__paragraph {
    margin-bottom: 40px;
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

  .tabs__btn {
    width: 100%;
  }
}
</style>
