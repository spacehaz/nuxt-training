<template>
  <main class="stories root__stories">
    <app-container>
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
            @keyup.native.enter="searchStories"
          />
          <app-button
            v-if="isFullTextClearSearch"
            :size="'content'"
            :lowPriority="true"
            class="stories__clear-search-btn"
            @click.native="clearSearch"
            >Очистить
          </app-button>
          <app-button
            v-else
            :size="'content'"
            :lowPriority="true"
            class="stories__clear-search-btn stories__clear-search-btn_short"
            @click.native="clearSearch"
            >&#10006;
          </app-button>
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

      <app-previews :class="{ stories__container: storiesLength }">
      </app-previews>

      <app-pagination class="stories__pagination"></app-pagination>
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

export default {
  components: {
    'app-title': Title,
    'app-container': Container,
    'app-previews': Previews,
    'app-pagination': Pagination,
    'app-input': Input,
    'app-button': Button,
  },
  data() {
    return {
      stories: [],
      size: 's',
      theme: 'light',
      query: '',
    };
  },
  methods: {
    searchStories() {
      this.$store.dispatch('stories/searchStories', this.query);
    },
    clearSearch() {
      this.query = '';
      this.$store.dispatch('stories/searchStories', this.query);
    },
  },
  computed: {
    storiesPerPage() {
      if (process.browser) {
        if (window.innerWidth <= 320) {
          return 9;
        } else if (window.innerWidth <= 1024) {
          return 12; //потом поменяем на 12
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
  },
};
</script>

<style scoped>
.root__stories {
  padding: 100px 0;
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
  font-size: 26px;
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

@media (max-width: 1280px) {
  .stories__title {
    margin-bottom: 50px;
    max-width: 367px;
  }
  .root__stories {
    padding: 90px 0;
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
}

@media (max-width: 768px) {
  .stories__title {
    text-align: center;
    max-width: 388px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (max-width: 568px) {
  .stories__search-btn {
    display: none;
  }
  .stories__mini-search-btn {
    width: 46px;
    height: 46px;
    display: block;
    background-image: url('~assets/images/search.svg');
    background-position: center;
    background-repeat: no-repeat;
  }
  .root__stories {
    padding: 50px 0;
  }
  .stories__container {
    margin-bottom: 50px;
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
