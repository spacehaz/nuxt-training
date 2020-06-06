<template>
  <main class="main">
    <app-cover />
    <app-intro class="root__intro" />
    <app-callout :block="'note-1'" />
    <app-featured-habits class="root__featured-habits" />
    <app-habits class="root__habits" />
    <app-callout :block="'note-2'" />
    <app-instagram class="root__instagram" />
    <app-share-your-story class="root__share-your-story" />
    <app-statistics class="root__statistics" />
    <app-about class="root__about" />
  </main>
</template>

<script>
import Cover from '@/components/blocks/Cover';
import Intro from '@/components/blocks/Intro';
import Callout from '@/components/blocks/Callout';
import FeaturedHabits from '@/components/blocks/FeaturedHabits';
import Habits from '@/components/blocks/Habits';
import Instagram from '@/components/blocks/Instagram';
import ShareYourStory from '@/components/blocks/ShareYourStory';
import Statistics from '@/components/blocks/Statistics';
import About from '@/components/blocks/About';

export default {
  data() {
    return {
      gallery: [],
      metas: {
        meta_title:
          'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',
        meta_description:
          'Информационный проект Фонда Хабенского. Есть вещи, которые не лечатся. В отличие от рака. #раклечится Вместе мы изменим отношение людей!  Какая привычка или фобия не лечится у вас? #этонелечится',
        meta_keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
        og_image: '@/assets/og_image.jpg',
      },
    };
  },
  head() {
    if (this.metas) {
      return {
        title: this.metas.meta_title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.metas.meta_keywords || '',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.metas.meta_title || '',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.metas.og_image || '',
          },
        ],
      };
    }
  },
  computed: {
    storiesPerPage() {
      if (process.browser) {
        if (window.innerWidth <= 320) {
          return 6;
        } else if (window.innerWidth <= 768) {
          return 9;
        } else {
          return 8;
        }
      }
    },
  },
  components: {
    'app-cover': Cover,
    'app-intro': Intro,
    'app-callout': Callout,
    'app-featured-habits': FeaturedHabits,
    'app-habits': Habits,
    'app-instagram': Instagram,
    'app-share-your-story': ShareYourStory,
    'app-statistics': Statistics,
    'app-about': About,
  },
  async fetch({ store }) {
    await store.dispatch('statistics/getStatictics');
    await store.dispatch('videos/getVideos');
    await store.dispatch('gallery/getPhotos');
  },
  created() {
    this.$store.dispatch('stories/setStoriesPerPage', {
      storiesPerPage: this.storiesPerPage,
    });
  },
};
</script>

<style scoped>
.root__intro {
  padding-top: 100px;
  padding-bottom: 74px;
}

.root__featured-habits {
  padding: 100px 0 0;
}

.root__habits {
  padding: 0 0 100px;
}

.root__instagram {
  padding: 100px 0;
}

.root__share-your-story {
  padding: 100px 0;
}

.root__about {
  padding-top: 90px;
  padding-bottom: 100px;
}

.root__statistics {
  padding: 100px 0;
}

@media (max-width: 1280px) {
  .root__intro {
    padding-top: 90px;
    padding-bottom: 64px;
  }

  .root__featured-habits {
    padding: 90px 0 0;
  }

  .root__habits {
    padding: 0 0 90px;
  }

  .root__instagram {
    padding: 90px 0;
  }

  .root__share-your-story {
    padding: 90px 0;
  }

  .root__about {
    padding-top: 80px;
    padding-bottom: 90px;
  }

  .root__statistics {
    padding: 90px 0;
  }
}

@media (max-width: 1024px) {
  .root__intro {
    padding-top: 80px;
    padding-bottom: 54px;
  }

  .root__featured-habits {
    padding: 80px 0 0;
  }

  .root__habits {
    padding: 0 0 80px;
  }

  .root__instagram {
    padding: 80px 0;
  }

  .root__share-your-story {
    padding: 80px 0;
  }

  .root__about {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .root__statistics {
    padding: 80px 0;
  }
}

@media (max-width: 768px) {
  .root__intro {
    padding-bottom: 44px;
  }
}

@media (max-width: 425px) {
  .root__intro {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .root__featured-habits {
    padding: 50px 0 0;
  }

  .root__habits {
    padding: 0 0 50px;
  }

  .root__instagram {
    padding: 50px 0;
  }

  .root__share-your-story {
    padding: 50px 0;
  }

  .root__about {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .root__statistics {
    padding: 50px 0;
  }
}
</style>
