<template>
  <main class="main">
    <app-cover />
    <app-intro class="root__intro" />
    <app-callout :title="'И В ОТЛИЧИЕ ОТ РАКА'" />
    <app-habits :stories="stories" class="root__habits" />
    <app-callout :title="'РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ'" />
    <app-instagram class="root__instagram" :gallery="gallery" />
    <app-share-your-story
      class="root__share-your-story"
      :variants="shareYourStoryVariants"
    />
    <app-statistics class="root__statistics" :statistics="statistics" />
    <app-about class="root__about" :variants="aboutVariants" />
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
import Form from '@/components/blocks/Form';

export default {
  data() {
    return {
      stories: [],
      gallery: [],
      shareYourStoryVariants: [],
      aboutVariants: [],
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
    'app-form': Form,
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
      (this.shareYourStoryVariants = [
        {
          id: 1,
          title: '1-й вариант',
          texts: [
            'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
          ],
          buttonText: 'Заполнить форму',
        },
        {
          id: 2,
          title: '2-й вариант',
          texts: [
            'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
          ],
          buttonText: 'Оставить контакт',
        },
      ]),
      (this.aboutVariants = [
        {
          id: 1,
          title: 'Рак Лечится',
          texts: [
            'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.',
            'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
          ],
        },
        {
          id: 2,
          title: 'Фонд Хабенского',
          texts: [
            'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
          ],
        },
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

<style scoped></style>
