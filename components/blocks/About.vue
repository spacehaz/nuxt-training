<template>
  <section class="about">
    <app-container>
      <p class="about__title">#РАКЛЕЧИТСЯ</p>
      <div class="about__content">
        <app-title :theme="theme" class="about__content-title"
          >О проекте</app-title
        >
        <app-flex>
          <app-paragraph :theme="theme" class="about__paragraph">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </app-paragraph>

          <div class="about__tabs tabs">
            <ul class="tabs__variants">
              <li
                :class="[
                  'tabs__variant',
                  'tabs__variant_theme_main',
                  { tabs__variant_active: currentVariant === firstVariant },
                ]"
                @click="changeVariant"
              >
                Рак Лечится
              </li>
              <li
                :class="[
                  'tabs__variant',
                  'tabs__variant_theme_main',
                  { tabs__variant_active: currentVariant === secondVariant },
                ]"
                @click="changeVariant"
              >
                Фонд Хабенского
              </li>
            </ul>

            <div
              class="tabs__container tabs__container_theme_main"
              v-if="currentVariant === firstVariant"
            >
              <p class="tabs__variant-text">
                Есть вещи, которые не лечатся. Особенности характера, страстные
                увлечения, привычки, ставшие частью нашего «я», фобии, которые
                мы приобрели в детстве. Список можно продолжать до
                бесконечности, но одна болезнь в него точно не войдет. Эта
                болезнь — рак. Рак лечится, и лучшее доказательство — люди с их
                неизлечимыми особенностями, которые сумели победить рак.
              </p>
              <p class="tabs__variant-text">
                Рак лечится — проект Благотворительного Фонда Константина
                Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
                изменить отношение людей к раку и заставить каждого поверить:
                онкологическое заболевание — это не приговор.
              </p>
            </div>

            <div class="tabs__container tabs__container_theme_main" v-else>
              <p class="tabs__variant-text">
                Благотворительный Фонд Константина Хабенского с 2008 года
                помогает детям с онкологическими и другими тяжелыми
                заболеваниями головного мозга. Фонд не только поддерживает семью
                заболевшего ребенка в самый сложный момент, оплачивая
                обследования, лечение и медицинские препараты, но и в целом
                меняет систему оказания помощи детям с опухолями мозга в России.
              </p>
            </div>
          </div>
        </app-flex>
      </div>
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import Flex from '@/components/shared/Flex';
import Title from '@/components/shared/Title';
import Paragraph from '@/components/shared/Paragraph';

export default {
  components: {
    'app-container': Container,
    'app-flex': Flex,
    'app-title': Title,
    'app-paragraph': Paragraph,
  },
  data() {
    return {
      theme: 'main',
      currentVariant: 1,
      firstVariant: 1,
      secondVariant: 2,
    };
  },
  methods: {
    changeVariant() {
      this.currentVariant =
        this.currentVariant === this.firstVariant
          ? this.secondVariant
          : this.firstVariant;
    },
  },
};
</script>

<style scoped>
.about {
  min-height: 650px;
  background-color: #613a93;
}

.about__title {
  margin-bottom: 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
}

.about__paragraph {
  margin-right: 50px;
}

.about__content {
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
}

.about__content-title {
  margin-bottom: 32px;
}

.tabs {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 40px;
  font-size: 18px;
  line-height: 22px;
}

.tabs__variants {
  list-style: none;
  padding: 0;
}

.tabs__variant {
  margin-bottom: 10px;
  cursor: pointer;
}

.tabs__variant_active {
  font-weight: 500;
  cursor: default;
}

.tabs__variant:last-of-type {
  margin-bottom: 0;
}

.tabs__container {
  max-width: 640px;
}

.tabs__variant-text {
  margin-bottom: 24px;
}

.tabs__variant-text:last-of-type {
  margin-bottom: 0;
}

.tabs__btn {
  margin-top: 78px;
}

/* Яркая тема */
.tabs__variant_theme_main {
  color: #c9c9c9;
}

.tabs__variant_theme_main.tabs__variant_active {
  color: #fff;
}

.tabs__variant_theme_main:hover {
  color: #fff;
}

.tabs__container_theme_main {
  color: #dedede;
}

@media (max-width: 1280px) {
  .about {
    min-height: 626px;
  }

  .about__title {
    margin-bottom: 60px;
    font-size: 58px;
    line-height: 70px;
  }

  .tabs__container {
    max-width: 570px;
  }

  .about__content-title {
    margin-bottom: 30px;
  }
}

@media (max-width: 1024px) {
  .about {
    min-height: 570px;
  }

  .about__title {
    margin-bottom: 46px;
    font-size: 52px;
    line-height: 63px;
  }

  .about__content-title {
    margin-bottom: 20px;
  }

  .tabs {
    column-gap: 30px;
    font-size: 15px;
    line-height: 19px;
  }

  .tabs__container {
    max-width: 447px;
    min-height: 200px;
  }
}

@media (max-width: 768px) {
  .about {
    min-height: 660px;
  }

  .about__title {
    display: none;
  }

  .about__content {
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;
  }

  .about__content-title {
    margin: 0 auto 26px;
    text-align: center;
  }

  .about__paragraph {
    margin-right: 0;
    margin-bottom: 80px;
  }

  .tabs {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .tabs__container {
    min-height: 190px;
    max-width: 100%;
  }

  .tabs__variants {
    display: flex;
  }

  .tabs__variant {
    margin-bottom: 0;
    margin-right: 30px;
  }

  .tabs__variant_active {
    border-bottom: 2px solid #fff;
  }
}

@media (max-width: 425px) {
  .about {
    min-height: initial;
  }

  .about__content-title {
    margin-bottom: 16px;
    text-align: left;
  }

  .about__paragraph {
    margin-bottom: 40px;
  }

  .tabs {
    row-gap: 20px;
    font-size: 13px;
    line-height: 16px;
  }

  .tabs__container {
    min-height: 166px;
  }

  .tabs__variant {
    margin-bottom: 0;
    margin-right: 20px;
  }

  .tabs__btn {
    width: 100%;
  }
}
</style>
