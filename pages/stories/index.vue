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

      <app-previews class="stories__container" :stories="stories">
      </app-previews>

      <app-pagination
        class="stories__pagination"
        :storiesCount="stories.length"
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
      storiesPerPage: 4,
    };
  },
  created() {
    this.stories = [
      {
        id: 1,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 2,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 3,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 4,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 5,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 6,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 7,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 8,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 9,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 10,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 11,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 12,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 13,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 14,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 15,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        id: 16,
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    ];
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
