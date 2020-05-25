<template>
  <main class="stories root__stories">
    <app-container>
      <app-title class="stories__title" :theme="theme">
        Истории неизлечимых привычек
      </app-title>

      <div class="stories__search">
        <app-input class="stories__input" :bordered="true" :type="'search'" />
        <app-button :size="size" class="stories__search-btn">Поиск</app-button>
        <app-button :size="size" class="stories__mini-search-btn"></app-button>
      </div>

      <app-previews class="stories__container"> </app-previews>

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
    };
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
  },
  async fetch({ store }) {
    await store.dispatch('stories/getStories');
    await store.dispatch('blocks/getBlocks');
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
    /*background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5.91304' cy='5.91304' r='5.41304' stroke='white'/%3E%3Cline x1='10.0918' y1='10.0813' x2='16.3527' y2='16.3421' stroke='white'/%3E%3C/svg%3E%0A");*/
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
</style>
