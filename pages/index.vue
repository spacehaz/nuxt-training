<template>
  <main class="main">
    <app-cover />
    <app-intro class="root__intro" />
    <app-callout :title="'И В ОТЛИЧИЕ ОТ РАКА'" />
    <app-habits :stories="stories" class="root__habits" />
    <app-callout :title="'РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ'" />
    <app-instagram class="root__instagram" :gallery="gallery" />
    <app-share-your-story class="root__share-your-story" />
    <app-statistics class="root__statistics" :statistics="statistics" />
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
  created() {
    (this.stories = [
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
    ]),
      (this.gallery = [
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      ]),
      (this.statistics = [
        {
          id: 1,
          type: 1,
          title:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          currentValue: 1,
          maxValue: 3,
          text: '1 из 3',
          source: 'Левада-Центр 2018',
        },
        {
          id: 2,
          type: 1,
          title: '2,6% Россиян имеют онкозаболевания.',
          currentValue: 26,
          maxValue: 1000,
          text: '3 700 000',
          source: 'Росстат 2018',
        },
        {
          id: 3,
          type: 2,
          title:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          bars: {
            previousValue: 60,
            currentValue: 75,
            maxValue: 100,
          },
          text: '↑28%',
          source: 'МНИОИ Герцена 2018',
        },
        {
          id: 4,
          type: 2,
          title:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          bars: {
            previousValue: 70,
            currentValue: 50,
            maxValue: 100,
          },
          text: '↓25%',
          source: 'МНИОИ Герцена 2018',
        },
      ]);
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
</style>
