<template>
  <main class="main">
    <app-cover />
    <app-intro class="root__intro" />
    <app-callout :title="'И В ОТЛИЧИЕ ОТ РАКА'" />
    <app-habits class="root__habits" />
    <app-callout :title="'РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ'" />
    <app-instagram class="root__instagram" :gallery="gallery" />
    <app-share-your-story class="root__share-your-story" />
    <app-statistics class="root__statistics" />
    <app-about class="root__about" />
  </main>
</template>

<script>
import Cover from '@/components/blocks/Cover';
import Intro from '@/components/blocks/Intro';
import Callout from '@/components/blocks/Callout';
import Habits from '@/components/blocks/Habits';
import Instagram from '@/components/blocks/Instagram';
import ShareYourStory from '@/components/blocks/ShareYourStory';
import Statistics from '@/components/blocks/Statistics';
import About from '@/components/blocks/About';

export default {
  data() {
    return {
      stories: [],
      gallery: [],
      statistics: [],
    };
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
    'app-habits': Habits,
    'app-instagram': Instagram,
    'app-share-your-story': ShareYourStory,
    'app-statistics': Statistics,
    'app-about': About,
  },
  async fetch({ store }) {
    await store.dispatch('stories/getStories');
    await store.dispatch('statistics/getStatictics');
  },
  created() {
    this.$store.dispatch('stories/setStoriesPerPage', {
      storiesPerPage: this.storiesPerPage,
    });
    this.gallery = [
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    ];
  },
};
</script>

<style scoped>
.root__intro {
  padding-top: 100px;
  padding-bottom: 74px;
}

.root__habits {
  padding: 100px 0;
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

  .root__habits {
    padding: 90px 0;
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

  .root__habits {
    padding: 80px 0;
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

  .root__habits {
    padding: 50px 0;
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
