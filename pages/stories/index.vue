<template>
  <main class="stories root__stories">
    <app-container>
      <app-title :theme="theme" class="stories__title"
        >Истории неизлечимых привычек</app-title
      >

      <div class="stories__search">
        <app-input class="stories__input" />
        <app-button :size="size">Поиск</app-button>
      </div>

      <app-previews class="stories__container" :stories="stories">
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
.root__stories {
  padding: 100px 0;
}

.stories__title {
  margin-bottom: 60px;
}

.stories__search {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 20px;
  margin-bottom: 70px;
}

.stories__input {
  border: 1px solid #e8e8e8;
}

.stories__container {
  margin-bottom: 140px;
}

.stories__pagination {
  display: flex;
  justify-content: center;
}
</style>
