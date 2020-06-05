<template>
  <form class="quiz">
    <transition name="fade" mode="out-in" appear>
      <fieldset class="quiz__fieldset" :key="currentQuestionTitle">
        <app-title
          class="quiz__title"
          :theme="theme"
          :class="{ quiz__title_centered: isQuizSent }"
        >
          {{ currentQuestionTitle }}</app-title
        >
        <label class="quiz__question" v-if="!isQuizSent">
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
          />
        </label>
      </fieldset>
    </transition>
    <div class="quiz__navigation" v-if="!isQuizSent">
      <app-button
        :lowPriority="true"
        :size="'content'"
        @click.native.prevent="prevQuestion"
        :disabled="isFirstQuestion"
        class="quiz__btn-back"
        >Назад</app-button
      >
      <app-button
        :size="size"
        @click.native.prevent="nextQuestion"
        v-if="!isLastQuestion"
        :disabled="isAnswerInvalid"
        class="quiz__btn"
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
      v-if="isQuizSent"
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
    isFormValid() {
      return this.$store.getters['quiz/getFormValidity'];
    },
    isQuizOverAndSent() {
      return (
        this.$store.getters['quiz/isQuizOver'] &&
        this.$store.getters['quiz/getFormValidity']
      );
    },
    isQuizSent() {
      return this.$store.getters['quiz/isQuizSent'];
    },
  },
  methods: {
    async nextQuestion() {
      await this.$store.dispatch('quiz/saveAnswerAction', {
        answer: this.currentAnswer,
      });

      if (this.isFormValid && !this.isQuizOver) {
        await this.$store.dispatch('quiz/setNextQuestion');
      }
      if (!this.isQuizOver) {
        this.currentAnswer = this.currentQuestionAnswer;
      }

      if (this.isQuizOver && !this.isQuizSent) {
        await this.$store.dispatch('quiz/finishQuiz');
        await this.$store.dispatch('quiz/sendDataToServer');
        if (!this.isFormValid) {
          this.$store.dispatch('popup/setContentInvalid', {
            errorText:
              'Ошибка отправки данных, пожалуйста, попробуйте еще раз.',
          });
        }
      } else {
        this.$store.dispatch('popup/setContentValid');
      }
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/getPreviousQuestionAction');
      await this.$store.dispatch('popup/setContentValid');
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
  mounted() {
    this.$store.dispatch('popup/setContentValid');
    this.$store.commit('quiz/setFormValid');
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

.quiz__input {
  font-size: 18px;
  line-height: 24px;
}

.quiz__text-accent {
  font-weight: 500;
  color: #000;
}

.quiz__btn-back {
  margin-right: 30px;
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

@media (max-width: 1280px) {
  .quiz {
    width: 840px;
    height: 520px;
  }
  .quiz__btn {
    width: 200px;
  }
  .quiz__label {
    font-size: 16px;
    line-height: 22px;
  }

  .quiz__input {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (max-width: 1024px) {
  .quiz {
    width: 720px;
    height: 520px;
  }
  .quiz__label {
    font-size: 15px;
    line-height: 22px;
  }

  .quiz__input {
    font-size: 15px;
    line-height: 22px;
  }

  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
}

@media (max-width: 850px) {
  .quiz {
    width: 520px;
    height: 520px;
  }
}

@media (max-width: 768px) {
  .quiz__label {
    font-size: 15px;
    line-height: 19px;
  }

  .quiz__input {
    font-size: 15px;
    line-height: 19px;
  }
}

@media (max-width: 700px) {
  .quiz {
    width: 400px;
    height: 520px;
  }
  .quiz__navigation {
    display: flex;
    flex-wrap: wrap;
  }
  .quiz__policy {
    margin-top: 20px;
  }
}

@media (max-width: 550px) {
  .quiz {
    width: 290px;
    height: 520px;
  }
  .quiz__btn {
    width: 206px;
    margin-right: 0;
  }

  .quiz__title {
    margin-bottom: 30px;
  }

  .quiz__btn-back {
    margin-right: 15px;
  }

  .quiz__label {
    font-size: 13px;
    line-height: 16px;
  }

  .quiz__input {
    font-size: 13px;
    line-height: 16px;
  }

  .quiz__title {
    font-size: 18px;
    line-height: 21px;
    margin-top: 30px;
  }
}

@media (max-width: 400px) {
  .quiz {
    width: 260px;
    height: 520px;
  }

  .quiz__btn-back {
    width: 39px;
  }
}
</style>
