<template>
  <main class="story root__story">
    <app-container>
      <div class="story__header">
        <img
          :src="API_URL + currentStory.ImageUrl[0].url"
          :alt="currentStory.ImageUrl[0].alternativeText"
          class="story__img story__img_place_outside"
        />

        <div class="story__main-description">
          <h1 class="story__title">
            <span class="story__title-accent">{{ currentStory.author }}</span>
            «{{ currentStory.title }}»
          </h1>
          <img
            :src="API_URL + currentStory.ImageUrl[0].url"
            :alt="currentStory.ImageUrl[0].alternativeText"
            class="story__img story__img_place_inside"
          />
          <div class="story__info">
            <app-share-btn class="social__link" />
            <span class="story__date">{{ currentStory.date | localDate }}</span>
          </div>
        </div>
      </div>
      <div class="story__content-container">
        <div class="story__content" v-html="currentStory.text"></div>
        <app-share-btn class="story__share-btn">
          Поделитесь этой статьей в своих социальных&nbsp;сетях &#8599;
        </app-share-btn>
      </div>

      <app-previews class="story__previews" :random="true"></app-previews>
      <app-more-btn />
    </app-container>
  </main>
</template>

<script>
import Container from '@/components/shared/Container';
import ShareBtn from '@/components/ui/ShareBtn';
import Previews from '@/components/blocks/Previews';
import MoreBtn from '@/components/ui/MoreBtn';
export default {
  data() {
    return {
      API_URL: process.env.API_URL,
    };
  },
  head() {
    if (this.currentStory) {
      return {
        title: `${this.currentStory.author} - РАКЛЕЧИТСЯ.РФ`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.currentStory.seoDescription ||
              `${this.currentStory.author}. РАКЛЕЧИТСЯ.РФ — проект Фонда Хабенского. Истории людей, победивших рак, но не свои привычки.`,
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content:
              this.currentStory.seoKeywords ||
              'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content:
              this.currentStory.seoTitle ||
              `${this.currentStory.author} - РАКЛЕЧИТСЯ.РФ`,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content:
              this.currentStory.seoDescription ||
              `${this.currentStory.author}. РАКЛЕЧИТСЯ.РФ — проект Фонда Хабенского. Истории людей, победивших рак, но не свои привычки.`,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              process.env.API_URL +
              (this.currentStory.ogImage ||
                `${this.currentStory.ImageUrl[0].url}`),
          },
        ],
      };
    }
  },
  components: {
    'app-container': Container,
    'app-share-btn': ShareBtn,
    'app-previews': Previews,
    'app-more-btn': MoreBtn,
  },
  computed: {
    storiesPerPage() {
      if (process.browser) {
        if (window.innerWidth <= 320) {
          return 2;
        } else if (window.innerWidth <= 768) {
          return 3;
        } else {
          return 4;
        }
      }
    },
    currentStory() {
      return this.$store.getters['stories/getCurrentStory'];
    },
  },
  filters: {
    localDate(value) {
      if (!value) return '';
      const date = new Date(value);
      return date.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
  created() {
    this.$store.dispatch('stories/setStoriesPerPage', {
      storiesPerPage: this.storiesPerPage,
    });
  },
  async fetch({ store, route, error }) {
    await store
      .dispatch('stories/getStory', { id: route.params.id })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' });
      });
  },
};
</script>

<style scoped>
.story__paragraph blockquote {
  font-weight: 600;
}

.root__story {
  padding-top: 100px;
  padding-bottom: 100px;
}

.story__header {
  display: flex;
  justify-content: space-between;
}

.story__img {
  width: 580px;
  height: 580px;
  margin-right: 60px;
  object-fit: cover;
}

.story__img_place_inside {
  display: none;
}

.story__main-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.story__title {
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
}
.story__title-accent {
  font-weight: 500;
}
.story__info {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__content-container {
  max-width: 780px;
  margin: 0 auto;
  padding-top: 130px;
  padding-bottom: 160px;
}
.story__content {
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
}
.story__content >>> p {
  font-size: 22px;
  line-height: 30px;
}

.story__content >>> blockquote {
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
}

.story__paragraph_highlighted {
  font-weight: 600;
}
.story__content >>> p:last-of-type {
  margin-bottom: 0;
}
.story__share-btn {
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  width: 100%;
}
.story__previews {
  margin-bottom: 70px;
}

@media (max-width: 1280px) {
  .root__story {
    padding-bottom: 90px;
  }

  .story__img {
    width: 518px;
    height: 518px;
  }

  .story__title {
    font-size: 34px;
    line-height: 44px;
  }

  .story__content-container {
    max-width: 720px;
    padding-top: 120px;
    padding-bottom: 150px;
  }

  .story__content {
    margin-bottom: 60px;
  }

  .story__content >>> p {
    font-size: 20px;
    line-height: 28px;
  }

  .story__content >>> blockquote {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }

  .story__previews {
    margin-bottom: 60px;
  }
}

@media (max-width: 1024px) {
  .root__story {
    padding-bottom: 80px;
  }
  .story__img {
    width: 407px;
    height: 407px;
    margin-right: 40px;
  }

  .story__main-description {
    padding: 20px 0;
  }

  .story__title {
    font-size: 30px;
    line-height: 38px;
  }

  .story__info {
    font-size: 16px;
    line-height: 24px;
  }

  .story__content-container {
    max-width: 640px;
    padding-top: 90px;
    padding-bottom: 120px;
  }

  .story__content {
    margin-bottom: 46px;
    grid-gap: 30px;
  }

  .story__content >>> p {
    font-size: 18px;
    line-height: 27px;
  }

  .story__content >>> blockquote {
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
  }

  .story__share-btn {
    padding: 24px 0;
  }

  .story__previews {
    margin-bottom: 46px;
  }
}

@media (max-width: 768px) {
  .root__story {
    padding-top: 80px;
  }

  .story__img {
    width: 420px;
    height: 420px;
    margin: 60px auto;
  }

  .story__img_place_outside {
    display: none;
  }

  .story__img_place_inside {
    display: block;
  }

  .story__content-container {
    max-width: 640px;
    padding-top: 100px;
  }

  .story__content {
    margin-bottom: 80px;
  }

  .story__previews {
    margin-bottom: 40px;
  }
}

@media (max-width: 425px) {
  .root__story {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .story__img {
    max-width: 100%;
    margin: 30px auto;
  }

  .story__title {
    font-size: 18px;
    line-height: 21px;
  }

  .story__info {
    font-size: 13px;
    line-height: 16px;
  }

  .story__content-container {
    max-width: 100%;
    padding-top: 40px;
    padding-bottom: 100px;
  }

  .story__content {
    margin-bottom: 40px;
    grid-gap: 20px;
  }

  .story__content >>> p {
    font-size: 13px;
    line-height: 16px;
  }

  .story__content >>> blockquote {
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
  }

  .story__share-btn {
    padding: 20px 0;
  }
}
</style>
