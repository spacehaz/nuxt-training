<template>
  <div>
    <app-overlay />
    <form action="/" class="quiz" method="POST">
      <fieldset class="quiz__fieldset">
        <app-title class="quiz__title" :theme="theme">Шаг 1 из 12</app-title>
        <label class="quiz__question">
          <p class="quiz__label">
            <span class="quiz__text-accent">
              Было ли у вас онкологическое заболевание?
            </span>
            Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий
            статус.
          </p>
          <app-input class="quiz__input" placeholder="Напишите тут" />
        </label>
      </fieldset>
      <div class="quiz__navigation">
        <button class="quiz__back-btn" disabled>Назад</button>
        <app-button :size="size">Далее</app-button>
      </div>
      <app-close-btn @click.native="toggleQuiz" />
    </form>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Title from '@/components/shared/Title';
import Input from '@/components/ui/Input';
import Overlay from '@/components/ui/Overlay';
import CloseBtn from '@/components/ui/CloseBtn';

export default {
  components: {
    'app-button': Button,
    'app-title': Title,
    'app-input': Input,
    'app-overlay': Overlay,
    'app-close-btn': CloseBtn,
  },
  methods: {
    toggleQuiz() {
      this.$store.commit('quiz/toggleQuiz');
    },
  },
  data() {
    return {
      size: 's',
      theme: 'light',
    };
  },
  methods: {
    toggleQuiz() {
      this.$store.commit('quiz/toggleQuiz');
    },
  },
};
</script>

<style scoped>
.quiz {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 920px;
  height: 600px;

  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px;
}

.quiz__fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.quiz__title {
  margin-bottom: 40px;
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

.quiz__input {
  border: none;
  border-bottom: 1px solid #e7e7e7;
}

.quiz__back-btn {
  margin-right: 30px;
  padding: 0;

  font-weight: normal;
  font-size: 16px;
  line-height: 52px;
  color: #666;

  background: none;
  border: 0;
  cursor: pointer;
}

.quiz__back-btn:hover {
  color: #000;
}

.quiz__back-btn:disabled {
  color: #c0c0c0;
  cursor: default;
}

.quiz__back-btn_:disabled:hover {
  color: #c0c0c0;
}
</style>
