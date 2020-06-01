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
            {{ title }}
          </a>
        </app-title>
        <app-paragraph
          :theme="theme"
          class="instagram__paragraph"
          v-html="text"
        />
      </div>
      <app-gallery />
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';
import Gallery from '@/components/blocks/Gallery';

export default {
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
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].instagram.title;
    },
    text() {
      return this.$store.getters['blocks/getBlocks'].instagram.text;
    },
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

@media (max-width: 1280px) {
  .instagram__title {
    margin-bottom: 30px;
  }
}

@media (max-width: 1024px) {
  .instagram__info {
    margin-right: 60px;
  }

  .instagram__title {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .instagram__container {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }

  .instagram__info {
    justify-self: center;
    margin-right: 0;
  }

  .instagram__title {
    margin-bottom: 26px;
    text-align: center;
  }
}

@media (max-width: 425px) {
  .instagram__container {
    row-gap: 40px;
  }

  .instagram__title {
    margin-bottom: 16px;
    text-align: left;
  }
}
</style>
