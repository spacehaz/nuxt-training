<template>
  <main class="stories root__stories">
    <app-container>
      <app-featured-habits class="stories__featured-habits" />
      <app-title class="stories__title" :theme="theme">
        Истории неизлечимых привычек
      </app-title>

      <div class="stories__search">
        <div class="stories__input-container">
          <app-input
            class="stories__input"
            :bordered="true"
            :type="'search'"
            v-model="query"
            :placeholder="'Найти...'"
            @keyup.native.enter="searchStories"
          />
          <app-button
            :size="'content'"
            :lowPriority="true"
            class="stories__clear-search-btn stories__clear-search-btn_long"
            @click.native="clearSearch"
            >Очистить
          </app-button>
          <a
            class="stories__clear-search-btn stories__clear-search-btn_short"
            @click.prevent="clearSearch"
          >
            <span></span>
          </a>
        </div>
        <app-button
          :size="size"
          class="stories__search-btn"
          @click.native="searchStories"
          >Поиск</app-button
        >
        <app-button
          :size="size"
          class="stories__mini-search-btn"
          @click.native="searchStories"
        ></app-button>
      </div>

      <app-pagination
        class="stories__pagination stories__pagination_place_top"
        :showEmptySearch="false"
      />

      <app-previews :class="{ stories__container: storiesLength }">
      </app-previews>

      <app-pagination class="stories__pagination" />
    </app-container>
  </main>
</template>

<script>
import Title from '@/components/shared/Title';
import Container from '@/components/shared/Container';
import Previews from '@/components/blocks/Previews';
import Pagination from '@/components/blocks/Pagination';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import FeaturedHabits from '@/components/blocks/FeaturedHabits';

export default {
  components: {
    'app-title': Title,
    'app-container': Container,
    'app-previews': Previews,
    'app-pagination': Pagination,
    'app-input': Input,
    'app-button': Button,
    'app-featured-habits': FeaturedHabits,
  },
  data() {
    return {
      stories: [],
      size: 's',
      theme: 'light',
      query: '',
      metas: {
        meta_title: 'РАКЛЕЧИТСЯ.РФ',
        meta_description:
          'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
        meta_keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
        og_image: '@/assets/background-cover.jpg',
      },
      seo: {},
      ogImage: '',
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
            content: this.seo.seoDescription || this.metas.meta_description,
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.seo.seoKeywords || this.metas.meta_keywords,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.seo.seoTitle || this.metas.meta_title,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.seo.seoDescription || this.metas.meta_description,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.ogImage
              ? `${process.env.API_URL}${this.ogImage}`
              : this.metas.og_image,
          },
        ],
      };
    }
  },
  methods: {
    searchStories() {
      this.$store.dispatch('stories/changeStoriesPage', {
        page: 1,
      });
      this.$store.dispatch('stories/searchStories', this.query);
    },
    clearSearch() {
      this.query = '';
      this.$store.dispatch('stories/changeStoriesPage', {
        page: 1,
      });
      this.$router.push({ name: 'stories', params: { page: '1' } });
      this.$store.dispatch('stories/searchStories', this.query);
    },
  },
  computed: {
    storiesPerPage() {
      if (process.browser) {
        if (window.innerWidth <= 320) {
          return 9;
        } else if (window.innerWidth <= 1024) {
          return 12;
        } else {
          return 16;
        }
      }
    },
    isFullTextClearSearch() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return true;
        }
        return false;
      } else {
        return true;
      }
    },
    storiesLength() {
      return this.$store.getters['stories/getStoriesQuantity'];
    },
  },
  created() {
    this.$store.dispatch('stories/setStoriesPerPage', {
      storiesPerPage: this.storiesPerPage,
    });

    const pageName = this.$route.name;
    const seo = this.$store.getters['seo/getSeo'];
    const seoEl = seo.find(
      el => el.pageName.toLowerCase() === pageName.toLowerCase()
    );
    if (seoEl) {
      this.seo = seoEl;
      this.ogImage = seoEl.ogImage.url;
    }
  },
};
</script>

<style scoped>
.root__stories {
  padding: 100px 0;
}

.stories__featured-habits {
  margin-bottom: 70px;
}

.stories__input {
  height: 100%;
}

.stories__input-container {
  position: relative;
}

.stories__clear-search-btn {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
}

.stories__clear-search-btn_short {
  position: absolute;
  width: 20px;
  height: 17px;
  cursor: pointer;
  right: 15px;
  display: none;
}

.stories__clear-search-btn_short:hover {
  opacity: 0.8;
}

.stories__clear-search-btn_short span,
.stories__clear-search-btn_short span::before,
.stories__clear-search-btn_short span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  margin-left: -10px;
  margin-top: -1px;
  background-color: #000;
}

.stories__clear-search-btn_short span::before,
.stories__clear-search-btn_short span::after {
  content: '';
  display: block;
}

.stories__clear-search-btn_short span {
  height: 0;
}

.stories__clear-search-btn_short span::before {
  transform: rotate(-45deg);
}

.stories__clear-search-btn_short span::after {
  transform: rotate(45deg);
}

.stories__clear-search-btn:focus {
  outline: none;
}

.stories__title {
  margin-bottom: 60px;
  max-width: 413px;
}

.stories__search {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 20px;
  margin-bottom: 70px;
}

.stories__container {
  margin-bottom: 140px;
}

.stories__pagination {
  display: flex;
  justify-content: center;
}

.search {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 20px;
}

.search /deep/ .input {
  border: 1px solid #e8e8e8;
}

.stories__mini-search-btn {
  display: none;
}

.stories__pagination_place_top {
  margin-bottom: 20px;
  display: none;
}

@media (max-width: 1280px) {
  .stories__title {
    margin-bottom: 50px;
    max-width: 367px;
  }
  .root__stories {
    padding: 90px 0;
  }

  .stories__featured-habits {
    margin-bottom: 60px;
  }
}

@media (max-width: 1024px) {
  .stories__search-btn {
    width: 208px;
  }
  .stories__title {
    margin-bottom: 40px;
    max-width: 288px;
  }
  .root__stories {
    padding: 80px 0;
  }
  .stories__container {
    margin-bottom: 110px;
  }

  .stories__featured-habits {
    margin-bottom: 46px;
  }
}

@media (max-width: 768px) {
  .stories__title {
    text-align: center;
    max-width: 388px;
    margin-right: auto;
    margin-left: auto;
  }

  .stories__featured-habits {
    margin-bottom: 40px;
  }

  .stories__clear-search-btn_long {
    display: none;
  }

  .stories__clear-search-btn_short {
    display: block;
  }
}

@media (max-width: 568px) {
  .stories__search-btn {
    display: none !important;
  }
  .stories__mini-search-btn {
    width: 46px !important;
    height: 46px !important;
    display: block !important;
    background-image: url('~assets/images/search.svg') !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
  .root__stories {
    padding: 50px 0;
  }
  .stories__container {
    margin-bottom: 50px;
  }
  .stories__pagination_place_top {
    display: flex;
  }
}

@media (max-width: 425px) {
  .stories__title {
    text-align: left;
    margin-right: 0;
    margin-left: 0;
    max-width: 290px;
  }
}

input[type='text']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type='text']::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
