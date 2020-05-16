<template>
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
        <app-input
          class="quiz__input"
          placeholder="Напишите тут"
          :bordered="false"
        />
      </label>
    </fieldset>
    <div class="quiz__navigation">
      <button class="quiz__back-btn" disabled>Назад</button>
      <app-button :size="size">Далее</app-button>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Title from '@/components/shared/Title';
import Input from '@/components/ui/Input';

export default {
  components: {
    'app-button': Button,
    'app-title': Title,
    'app-input': Input,
  },
  data() {
    return {
      size: 's',
      theme: 'light',
    };
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

.quiz__back-btn:disabled:hover {
  color: #c0c0c0;
}
</style>
