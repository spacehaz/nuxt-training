<template>
  <section class="share-your-story" id="form">
    <app-container>
      <app-title :theme="theme" class="share-your-story__title">
        Расскажите свою историю
      </app-title>
      <app-flex>
        <app-paragraph :theme="theme">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </app-paragraph>

        <div class="share-your-story__tabs tabs">
          <ul class="tabs__variants">
            <li
              :class="[
                'tabs__variant',
                'tabs__variant_theme_light',
                currentVariant === firstVariant ? 'tabs__variant_active' : '',
              ]"
              @click="changeVariant"
            >
              1-й вариант
            </li>
            <li
              :class="[
                'tabs__variant',
                'tabs__variant_theme_light',
                currentVariant === secondVariant ? 'tabs__variant_active' : '',
              ]"
              @click="changeVariant"
            >
              2-й вариант
            </li>
          </ul>

          <div
            class="tabs__container tabs__container_theme_light"
            v-if="currentVariant === firstVariant"
          >
            <p class="tabs__variant-text">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
            <app-button
              :size="size"
              class="tabs__btn"
              @buttonClick="toggleQuiz"
            >
              Заполнить форму
            </app-button>
          </div>

          <div class="tabs__container tabs__container_theme_light" v-else>
            <p class="tabs__variant-text">
              Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
              зададим вопросы, уточним детали вашей истории.
            </p>
            <app-button :size="size" class="tabs__btn">
              Оставить контакт
            </app-button>
          </div>
        </div>
      </app-flex>
    </app-container>
    <app-quiz v-if="quizShown"></app-quiz>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Flex from '@/components/shared/Flex';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';
import Button from '@/components/ui/Button';
import Quiz from '@/components/blocks/Quiz';

export default {
  components: {
    'app-container': Container,
    'app-flex': Flex,
    'app-title': Title,
    'app-paragraph': Paragraph,
    'app-button': Button,
    'app-quiz': Quiz,
  },
  data() {
    return {
      theme: 'light',
      currentVariant: 1,
      size: 'm',
      firstVariant: 1,
      secondVariant: 2,
    };
  },
  computed: {
    quizShown() {
      return this.$store.getters['quiz/getQuizShown'];
    },
  },
  methods: {
    changeVariant() {
      return this.currentVariant === this.firstVariant
        ? (this.currentVariant = this.secondVariant)
        : (this.currentVariant = this.firstVariant);
    },
    toggleQuiz() {
      return this.$store.commit('quiz/toggleQuiz');
    },
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

.tabs {
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

.tabs__variant-text {
  margin-bottom: 36px;
}

.tabs__variant-text:last-of-type {
  margin-bottom: 0;
}

.tabs__btn {
  margin-top: 78px;
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
</style>
