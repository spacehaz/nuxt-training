<template>
  <section class="instagram">
    <app-container class="instagram__container">
      <div class="instagram__info">
        <app-title :theme="theme" class="instagram__title">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          >
            Инстаграм
          </a>
        </app-title>
        <app-paragraph :theme="theme">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </app-paragraph>
      </div>
      <app-gallery :gallery="gallery" />
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';
import Gallery from '@/components/blocks/Gallery';

export default {
  props: {
    gallery: {
      type: Array,
      required: true,
    },
  },
  components: {
    'app-container': Container,
    'app-title': Title,
    'app-paragraph': Paragraph,
    'app-gallery': Gallery,
  },
  data() {
    return {
      theme: 'light',
    };
  },
};
</script>

<style scoped>
.instagram__title {
  margin-bottom: 32px;
}

.instagram__link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #000;
}

.instagram__link:hover {
  opacity: 0.8;
}

.instagram__container {
  display: grid;
  grid-template-columns: max-content 1fr;
}

.instagram__info {
  position: relative;
  margin-right: 110px;
}
</style>
