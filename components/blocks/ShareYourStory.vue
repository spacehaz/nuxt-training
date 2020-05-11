<template>
  <section class="share-your-story" id="form">
    <app-container>
      <app-title :theme="theme" class="share-your-story__title">
        Расскажите свою историю
      </app-title>
      <app-flex>
        <app-paragraph :theme="theme">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </app-paragraph>
        <app-tabs :theme="theme" :variants="variants"> </app-tabs>
      </app-flex>
    </app-container>
  </section>
</template>

<script>
import Container from '../shared/Container';
import Flex from '../shared/Flex';
import Title from '../shared/Title';
import Paragraph from '../shared/Paragraph';
import Tabs from './Tabs';

export default {
  props: {
    variants: Array,
  },
  components: {
    'app-container': Container,
    'app-flex': Flex,
    'app-title': Title,
    'app-paragraph': Paragraph,
    'app-tabs': Tabs,
  },
  data() {
    return {
      theme: 'light',
    };
  },
};
</script>

<style scoped>
.share-your-story {
  background-color: #f7f7f7;
}

.share-your-story__title {
  margin-bottom: 32px;
}
</style>
