<template>
  <section class="about">
    <app-container>
      <p class="about__title">#РАКЛЕЧИТСЯ</p>
      <div class="about__content">
        <app-title :theme="theme" class="about__content-title"
          >О проекте</app-title
        >
        <app-flex class="about__tabs">
          <app-paragraph :theme="theme">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </app-paragraph>
          <app-tabs :theme="theme" :variants="variants" />
        </app-flex>
      </div>
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
      theme: 'main',
    };
  },
};
</script>

<style scoped>
.about {
  background-color: #613a93;
}

.about__title {
  margin-bottom: 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
}

.about__content {
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
}

.about__content-title {
  margin-bottom: 32px;
}

.about__paragraph {
  max-width: 340px;
  margin-right: 146px;
}
</style>
