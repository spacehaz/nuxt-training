<template>
  <div class="contact-us">
    <app-container class="contact-us__container">
      <app-title class="contact-us__title" :theme="'light'"
        >Свяжитесь с нами</app-title
      >
      <p class="contact-us__paragraph">
        Оставьте контакт (почту или номер телефона) и мы свяжемся с вами,
        зададим вопросы, уточним детали вашей истории.
      </p>
      <div class="contact-us__quizz-wrapper">
        <p v-if="errorText" class="error-and-success-block">{{ errorText }}</p>
        <contact-us class="contact-us__quiz" />
      </div>
    </app-container>
  </div>
</template>

<script>
import ContactUsSingle from '@/components/blocks/ContactUsSingle';
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
export default {
  components: {
    'contact-us': ContactUsSingle,
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
.contact-us__container {
  padding-top: 48px;
  padding-bottom: 48px;
}
.contact-us__title {
  max-width: 100%;
  margin-bottom: 30px;
}

.contact-us__paragraph {
  margin-bottom: 30px;
}

.contact-us__paragraph a {
  color: #613a93;
}

.contact-us__quizz-wrapper {
  position: relative;
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

.contact-us__quiz {
  box-shadow: 0 0 3px #613a93;
  width: 100%;
  padding: 30px;
  border-radius: 4px;
  height: auto;
}
</style>
