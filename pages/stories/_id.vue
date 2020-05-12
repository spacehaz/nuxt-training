<template>
  <main class="story root__story">
    <app-container>
      <app-flex class="story__header">
        <img
          src="https://avatars.mds.yandex.net/get-pdb/2491915/be6af928-1dd0-45fa-aa29-16a0bcc95b10/s1200"
          alt=""
          class="story__img"
        />
        <div class="story__main-description">
          <h1 class="story__title">
            <span class="story__title-accent">Александр Тарханов:</span>
            «Я не могу победить свою пунктуальность в отличии от рака»
          </h1>
          <app-flex class="story__info">
            <app-share-btn class="social__link">
              Поделитесь &#8599;
            </app-share-btn>
            <span class="story__date">20 апреля 2018</span>
          </app-flex>
        </div>
      </app-flex>

      <div class="story__content-container">
        <div class="story__content">
          <p class="story__paragraph">
            Я из военной семьи. Отец хоть и не был военным сам, но нас всех
            держал в ежовых рукавицах. Думаю, поэтому мы и выросли такими
            ответственными.
          </p>
          <p class="story__paragraph">
            У меня дома до сих пор стоят часы в каждой комнате, хотя они и не
            нужны особо — я сам чувствую, опаздываю куда-то или нет, отстаю от
            нужного графика или опережаю. Вот такие встроенные внутренние часы!
            Будильник мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже
            быстро, как в армии, за 45 секунд.
          </p>
          <p class="story__paragraph story__paragraph_highlighted">
            «В футболе если команда опоздала на 15 минут, ей засчитывается
            поражение».
          </p>
          <p class="story__paragraph">
            Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если
            знаю, что могу попасть по дороге в пробку, то не еду на машине. В
            аэропорт приезжаю задолго до начала регистрации. Лучше подожду и
            кофе попью, чем опоздаю!
          </p>
          <p class="story__paragraph">
            Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать.
            Я билеты выучил, знал абсолютно все. Пришел в нужное время, а
            учительница — нет. Ну, я какое-то время подождал ее и ушел. Потом
            она спрашивала: «Почему не дождался?». Я ответил: «В футболе если
            команда опоздала на 15 минут, ей засчитывается поражение». Экзамен
            мне все-таки поставили! Сейчас если кто-то из футболистов моей
            команды опаздывает — начинаю злиться, могу и прикрикнуть потом. А
            если кто-то опоздал на тренировку перед игрой — все, подготовка
            насмарку. Я сразу начинаю думать тогда: «Значит, точно проиграем».
            Такая болезненная пунктуальность уже не лечится. В отличие от рака.
          </p>
          <p class="story__paragraph story__paragraph_highlighted">
            «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
            злиться, могу и прикрикнуть потом. А если кто-то опоздал на
            тренировку перед игрой — все, подготовка насмарку. Я сразу начинаю
            думать тогда: «Значит, точно проиграем». Такая болезненная
            пунктуальность уже не лечится».
          </p>
        </div>
        <app-share-btn class="story__share-btn">
          Поделитесь этой статьей в своих социальных сетях &#8599;
        </app-share-btn>
      </div>

      <app-previews :stories="stories" class="story__previews"></app-previews>

      <app-more-btn></app-more-btn>
    </app-container>
  </main>
</template>

<script>
import Container from '@/components/shared/Container';
import Flex from '@/components/shared/Flex';
import ShareBtn from '@/components/ui/ShareBtn';
import Previews from '@/components/blocks/Previews';
import MoreBtn from '@/components/ui/MoreBtn';

export default {
  components: {
    'app-container': Container,
    'app-flex': Flex,
    'app-share-btn': ShareBtn,
    'app-previews': Previews,
    'app-more-btn': MoreBtn,
  },
  data() {
    return {
      stories: [],
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
    ];
  },
};
</script>

<style scoped>
.root__story {
  padding-top: 100px;
  padding-bottom: 100px;
}

.story__img {
  width: 580px;
  height: 580px;
  object-fit: cover;
}

.story__main-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 680px;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.story__title {
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
}

.story__title-accent {
  font-weight: 500;
}

.story__info {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

.story__content-container {
  max-width: 780px;
  margin: 0 auto;
  padding-top: 130px;
  padding-bottom: 160px;
}

.story__content {
  margin-bottom: 70px;
}

.story__paragraph {
  margin-bottom: 40px;
  font-size: 22px;
  line-height: 30px;
}

.story__paragraph_highlighted {
  font-weight: 600;
}

.story__paragraph:last-of-type {
  margin-bottom: 0;
}

.story__share-btn {
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  width: 100%;
}

.story__previews {
  margin-bottom: 70px;
}
</style>
