<template>
  <form action="/" class="quiz" method="POST">
    <fieldset class="quiz__fieldset">
      <app-title class="quiz__title" :theme="theme" v-if="!isQuizOver">
        {{ currentQuestionTitle }}</app-title
      >
      <app-title
        class="quiz__title quiz__title_centered"
        :theme="theme"
        v-if="isQuizOver"
      >
        Спасибо что приняли участие!
      </app-title>
      <label class="quiz__question" v-if="!isQuizOver">
        <p class="quiz__label">
          <span class="quiz__text-accent">
            {{ currentQuestionText }}
          </span>
          {{ currentQuestionAdditionalText }}
        </p>
        <app-input
          class="quiz__input"
          placeholder="Напишите тут"
          v-model="currentAnswer"
          required
        />
      </label>
    </fieldset>
    <div class="quiz__navigation" v-if="!isQuizOver">
      <app-button
        :lowPriority="true"
        :size="'content'"
        @click.native.prevent="prevQuestion"
        :disabled="isFirstQuestion"
        class="quiz__btn"
        >Назад</app-button
      >
      <app-button
        :size="size"
        @click.native.prevent="nextQuestion"
        v-if="!isLastQuestion"
        :disabled="isAnswerInvalid"
        >Далее</app-button
      >
      <app-button
        :size="size"
        @click.native.prevent="nextQuestion"
        v-if="isLastQuestion"
        :disabled="isAnswerInvalid"
        class="quiz__btn"
        >Отправить</app-button
      >
      <app-policy
        class="quiz__policy"
        v-if="isLastQuestion"
        :text="'Нажимая на кнопку «отправить», вы даете согласие на'"
        :link="'на обработку персональных данных'"
      >
      </app-policy>
    </div>
    <app-button
      :size="size"
      v-if="isQuizOver"
      class="quiz__close-btn"
      @click.native.prevent="toggleQuiz"
      >Закрыть</app-button
    >
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Title from '@/components/shared/Title';
import Input from '@/components/ui/Input';
import Policy from '@/components/ui/Policy.vue';

export default {
  computed: {
    currentQuestionText() {
      return this.$store.getters['quiz/getCurrentQuestionMainText'];
    },
    currentQuestionAdditionalText() {
      return this.$store.getters['quiz/getCurrentQuestionAdditionalText'];
    },
    currentQuestionTitle() {
      return this.$store.getters['quiz/getCurrentQuestionTitle'];
    },
    currentQuestionAnswer() {
      return this.$store.getters['quiz/getCurrentQuestionAnswer'];
    },
    isAnswerInvalid() {
      return !this.currentAnswer;
    },
    isFirstQuestion() {
      return this.$store.getters['quiz/isFirstQuestion'];
    },
    isLastQuestion() {
      return this.$store.getters['quiz/isLastQuestion'];
    },
    isQuizOver() {
      return this.$store.getters['quiz/isQuizOver'];
    },
  },
  methods: {
    async nextQuestion() {
      await this.$store.dispatch('quiz/saveAnswerAction', {
        answer: this.currentAnswer,
      });
      this.currentAnswer = this.currentQuestionAnswer;
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/getPreviousQuestionAction');
      this.currentAnswer = this.currentQuestionAnswer;
    },
    toggleQuiz() {
      this.$store.dispatch('quiz/closeQuiz');
      this.$store.commit('popup/togglePopupVisibility');
    },
  },
  components: {
    'app-button': Button,
    'app-title': Title,
    'app-input': Input,
    'app-policy': Policy,
  },
  data() {
    return {
      size: 's',
      theme: 'light',
      currentAnswer: '',
    };
  },
  created() {
    this.$store.dispatch('quiz/getQuestions');
    this.currentAnswer = '' || this.currentQuestionAnswer;
  },
};
</script>

<style scoped>
.quiz {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 840px;
  height: 520px;
}

.quiz__fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.quiz__title {
  margin-bottom: 40px;
  max-width: initial;
}

.quiz__question {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.quiz__label {
  font-size: 18px;
  line-height: 24px;
  color: #666;
}

.quiz__text-accent {
  font-weight: 500;
  color: #000;
}

.quiz__btn {
  margin-right: 30px;
}

.quiz__close-btn {
  margin-right: auto;
  margin-left: auto;
}

.quiz__title_centered {
  text-align: center;
}

.quiz__navigation {
  display: flex;
  align-items: center;
}

.quiz__policy {
  max-width: 378px;
}
</style>
