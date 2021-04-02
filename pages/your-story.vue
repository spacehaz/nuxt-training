<template>
  <div class="your-story">
    <app-container class="your-story__container">
      <app-title class="your-story__title" :theme="'light'"
        >Предложите вашу историю</app-title
      >
      <p class="your-story__paragraph">
        Заполните форму, и мы опубликуем вашу историю после проверки.
        Пожалуйста, заполняйте все пункты корректно. Если вы испытаете какие-то
        сложности, воспользуйтесь
        <nuxt-link to="/contact-us">вторым вариантом</nuxt-link>.
      </p>
      <div class="your-story__quiz-wrapper">
        <p v-if="errorText" class="error-and-success-block">{{ errorText }}</p>
        <quiz class="your-story__quiz" />
      </div>
    </app-container>
  </div>
</template>

<script>
import QuizSingle from '@/components/blocks/QuizSingle';
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
export default {
  components: {
    quiz: QuizSingle,
    'app-container': Container,
    'app-title': Title,
  },
  computed: {
    errorText() {
      return this.$store.getters['popup/getErrorText'];
    },
  },
};
</script>

<style scoped>
.your-story__container {
  padding-top: 48px;
  padding-bottom: 48px;
}

.error-and-success-block {
  padding: 5px 10px;
  background-color: #613a93;
  color: #fff;
  width: calc(100% + 4px);
  position: relative;
  top: 4px;
  left: -2px;
  border-radius: 4px 4px 0 0;
}

.your-story__title {
  max-width: 100%;
  margin-bottom: 30px;
}

.your-story__paragraph {
  margin-bottom: 30px;
}

.your-story__paragraph a {
  color: #613a93;
}

.your-story__quiz {
  box-shadow: 0 0 3px #613a93;
  width: 100%;
  padding: 30px;
  border-radius: 4px;
  height: auto;
}

.your-story__quiz /deep/ .quiz__question {
  justify-content: flex-start;
}

.your-story__quiz /deep/ .quiz__label {
  margin-bottom: 40px;
}
</style>
