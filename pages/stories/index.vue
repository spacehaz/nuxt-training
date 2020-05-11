<template>
  <section class="stories-list root__stories-list">
    <app-container>
      <app-title :theme="theme">Истории неизлечимых привычек</app-title>

      <div class="search stories-list__search">
        <app-input class="search__input" />
        <app-button :size="size" class="search__button">Поиск</app-button>
      </div>

      <app-previews class="stories-list__container" :stories="stories">
      </app-previews>

      <app-pagination class="stories-list__pagination"></app-pagination>
    </app-container>
  </section>
</template>

<script>
import Title from '@/components/shared/Title';
import Container from '@/components/shared/Container';
import Previews from '@/components/blocks/Previews';
import Pagination from '@/components/blocks/Pagination';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default {
  components: {
    'app-title': Title,
    'app-container': Container,
    'app-previews': Previews,
    'app-pagination': Pagination,
    'app-button': Button,
    'app-input': Input,
  },
  data() {
    return {
      theme: 'light',
      stories: [],
      size: 's',
    };
  },
  created() {
    this.stories = [
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
        imageSrc: '',
        author: 'Владимир Тен',
        quote:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
      {
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
.stories-list__container {
  margin-top: 70px;
  margin-bottom: 140px;
}

.stories-list__search {
  margin-top: 60px;
  margin-bottom: 70px;
}

.stories-list__pagination {
  margin-top: 140px;
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
