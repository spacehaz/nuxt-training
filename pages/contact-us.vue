<template>
  <div class="contact-us">
    <app-container class="contact-us__container">
      <app-title class="contact-us__title">Свяжитесь с нами</app-title>
      <p class="contact-us__paragraph">
        Оставьте контакт (почту или номер телефона) и мы свяжемся с вами,
        зададим вопросы, уточним детали вашей истории.
      </p>
      <contact-us class="contact-us__quiz" />
    </app-container>
  </div>
</template>

<script>
import ContactUs from '@/components/blocks/ContactUs';
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
export default {
  components: {
    'contact-us': ContactUs,
    'app-container': Container,
    'app-title': Title,
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

.contact-us__quiz {
  box-shadow: 0 0 3px #613a93;
  width: 100%;
  padding: 30px;
  border-radius: 4px;
  height: auto;
}
</style>
