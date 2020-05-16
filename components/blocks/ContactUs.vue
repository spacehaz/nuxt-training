<template>
  <form action="/" class="contact-us" method="POST">
    <app-title class="contact-us__title" :theme="theme">
      Оставьте контакт для связи
    </app-title>
    <p class="contact-us__text">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>

    <label class="contact-us__label" for="name">
      Как вас зовут?
    </label>
    <app-input
      class="contact-us__input"
      placeholder="Напишите тут"
      id="name"
      :bordered="false"
      required
    />

    <div class="contact-us__container">
      <div class="contact-us__item">
        <label class="contact-us__label" for="email">
          Электронная почта
        </label>
        <app-input
          type="email"
          class="contact-us__input"
          placeholder="pochta@example.com"
          :bordered="false"
          :type="'email'"
          id="email"
          required
        />
      </div>
      <div class="contact-us__item">
        <label class="contact-us__label" for="phone">Телефон</label>
        <app-input
          class="contact-us__input"
          placeholder="+7 000 000 00 00"
          :bordered="false"
          :type="'tel'"
          id="phone"
          required
        />
      </div>
    </div>

    <label class="contact-us__label" for="comments">
      Напишите, если есть предпочтительный способ связи и удобное время
    </label>
    <app-input
      class="contact-us__input"
      placeholder="Телефон / почта и удобное время"
      :bordered="false"
      id="comments"
    />

    <div class="contact-us__send-items">
      <app-button :size="size" class="contact-us__button">Отправить</app-button>
      <span class="contact-us__policy">
        Нажимая на кнопку «отправить», вы даете согласие на
        <a href="/policy" class="contact-us__policy-link" target="_blank">
          обработку персональных данных
        </a>
      </span>
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
.contact-us {
  width: 840px;
  overflow: auto;
}

.contact-us__title {
  margin-bottom: 40px;
  max-width: 450px;
}

.contact-us__text {
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #000;
}

.contact-us__label {
  display: inline-block;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #000;
}

.contact-us__input {
  margin-bottom: 35px;
}

.contact-us__input:last-of-type {
  margin-bottom: 0;
}

.contact-us__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 35px;
}

.contact-us__send-items {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.contact-us__button {
  margin-right: 30px;
}

.contact-us__policy {
  font-size: 14px;
  line-height: 17px;
  color: #666;
  width: 380px;
}

.contact-us__policy-link {
  color: inherit;
}
</style>
