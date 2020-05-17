<template>
  <main class="stories root__stories">
    <app-container>
      <h1 class="stories__title">
        Истории неизлечимых привычек
      </h1>

      <div class="stories__search">
        <app-input class="stories__input" :bordered="true" :type="'search'" />
        <app-button :size="size">Поиск</app-button>
      </div>

      <app-previews class="stories__container"> </app-previews>

      <app-pagination
        class="stories__pagination"
        :storiesPerPage="storiesPerPage"
      ></app-pagination>
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
      storiesPerPage: 6,
    };
  },
  async fetch({ store }) {
    await store.dispatch('stories/getStories');
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
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
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
</style>
