<template>
  <div class="your-story">
    <app-container class="your-story__container">
      <app-title class="your-story__title">Предложите вашу историю</app-title>
      <p class="your-story__paragraph">
        Заполните форму, и мы опубликуем вашу историю после проверки.
        Пожалуйста, заполняйте все пункты корректно. Если вы испытаете какие-то
        сложности, воспользуйтесь
        <nuxt-link to="/contact-us">вторым вариантом</nuxt-link>.
      </p>
      <quiz class="your-story__quiz" />
    </app-container>
  </div>
</template>

<script>
import Quiz from '@/components/blocks/Quiz';
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
export default {
  components: {
    quiz: Quiz,
    'app-container': Container,
    'app-title': Title,
  },
};
</script>

<style scoped>
.your-story__container {
  padding-top: 48px;
  padding-bottom: 48px;
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
