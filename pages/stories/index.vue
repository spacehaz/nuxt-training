<template>
  <section class="stories-list root__stories-list">
    <app-container>
      <app-title :theme="theme">Истории неизлечимых привычек</app-title>

      <div class="search stories-list__search">
        <input type="text" class="search__input" />
        <button class="button button_size-s">Поиск</button>
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

export default {
  components: {
    'app-title': Title,
    'app-container': Container,
    'app-previews': Previews,
    'app-pagination': Pagination,
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
</style>
