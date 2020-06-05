<template>
  <form class="contact-us">
    <app-title class="contact-us__title" :theme="theme">
      Оставьте контакт для&nbsp;связи
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
      id="name"
      :bordered="false"
      :isError="!isNameValid"
      v-model="name"
    />

    <div class="contact-us__container">
      <div class="contact-us__item">
        <label class="contact-us__label" for="email">
          Электронная почта
        </label>
        <app-input
          type="email"
          class="contact-us__input"
          :placeholder="'pochta@example.com'"
          :bordered="false"
          :type="'email'"
          :isError="!isEmailValid"
          id="email"
          v-model="email"
        />
      </div>
      <div class="contact-us__item">
        <label class="contact-us__label" for="phone">Телефон</label>
        <app-input
          class="contact-us__input"
          :placeholder="'+7 000 000 00 00'"
          :bordered="false"
          :isError="!isPhoneValid"
          :type="'tel'"
          id="phone"
          v-model="phone"
        />
      </div>
    </div>

    <label class="contact-us__label" for="comments">
      Напишите, если есть предпочтительный способ связи и удобное время
    </label>
    <app-input
      class="contact-us__input"
      :placeholder="'Телефон / почта и удобное время'"
      :bordered="false"
      id="comments"
      v-model="preferred"
    />

    <div class="contact-us__send-items">
      <app-button
        :size="size"
        class="contact-us__button"
        @click.native.prevent="saveAnswers"
        >Отправить</app-button
      >
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
      name: '',
      email: '',
      phone: '',
      preferred: '',
      isNameValid: true,
      isEmailValid: true,
      isPhoneValid: true,
    };
  },
  watch: {
    name: function(newValue) {
      if (newValue) this.isNameValid = true;
    },
    email: function(newValue) {
      if (newValue) this.isEmailValid = true;
    },
    phone: function(newValue) {
      if (newValue) this.isPhoneValid = true;
    },
  },
  methods: {
    saveAnswers() {
      let isFormValid = true;
      if (!this.name) {
        isFormValid = false;
        this.isNameValid = false;
      }
      if (!this.email) {
        isFormValid = false;
        this.isEmailValid = false;
      }
      if (!this.phone) {
        isFormValid = false;
        this.isPhoneValid = false;
      }
      if (isFormValid) {
        this.$store.dispatch('contact-us/saveAnswers', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          preferred: this.preferred,
        });
        this.$store.dispatch('contact-us/closeContactUs');
        this.$store.commit('popup/togglePopupVisibility');
      } else {
        this.$store.dispatch('popup/setContentInvalid', {
          errorText: 'Заполните все поля.',
        });
      }
    },
  },
  mounted() {
    this.$store.dispatch('popup/setContentValid');
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
@media screen and (max-width: 1280px) {
  .contact-us {
    width: 720px;
    overflow-y: scroll;
  }
}
@media screen and (max-width: 900px) {
  .contact-us {
    width: 80vw;
  }
}
@media screen and (max-width: 900px) {
  .contact-us {
    width: 80vw;
  }
}
@media screen and (max-width: 568px) {
  .contact-us {
    width: 76vw;
  }
}
@media screen and (max-width: 485px) {
  .contact-us {
    width: 72vw;
  }
}
@media screen and (max-width: 425px) {
  .contact-us {
    width: 80vw;
  }
}
@media screen and (max-width: 320px) {
  .contact-us {
    width: 80vw;
    height: 585px;
  }
}
@media screen and (max-width: 1440px) {
  .contact-us__title {
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__title {
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 568px) {
  .contact-us__title {
    max-width: 320px;
  }
}
@media screen and (max-width: 425px) {
  .contact-us__title {
    font-size: 18px;
    line-height: 21px;
    max-width: 240px;
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 1280px) {
  .contact-us__text {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__text {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 425px) {
  .contact-us__text {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 1280px) {
  .contact-us__input {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__input {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 425px) {
  .contact-us__input {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 1280px) {
  .contact-us__label {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__label {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 425px) {
  .contact-us__label {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__policy {
    font-size: 11px;
    line-height: 13px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__policy-link {
    font-size: 11px;
    line-height: 13px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__button {
    width: 200px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .contact-us__button {
    width: 100%;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }
}
@media screen and (max-width: 568px) {
  .contact-us__button {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 670px) {
  .contact-us__container {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 568px) {
  .contact-us__send-items {
    flex-direction: column;
  }
}
@media screen and (max-width: 568px) {
  .contact-us__policy {
    width: 100%;
  }
}
</style>
