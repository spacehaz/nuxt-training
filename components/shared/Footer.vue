<template>
  <footer class="footer">
    <app-flex-container class="footer__row">
      <div class="footer__info">
        <app-title :theme="theme" class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </app-title>
        <app-navigation></app-navigation>
      </div>
      <ul class="footer__socials">
        <li class="footer__socials-item">
          Мы в
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="footer__socials-link"
            target="_blank"
          >
            Инстаграме
          </a>
          и
          <a
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            class="footer__socials-link"
            target="_blank"
          >
            Youtube
          </a>
        </li>
        <li class="footer__socials-item">
          <app-share-btn class="footer__socials-link"> </app-share-btn>
        </li>
      </ul>
    </app-flex-container>
    <app-flex-container class="footer__copyright">
      <p class="footer__copyright-info">Рак Лечится 2020</p>
      <p class="footer__copyright-info">
        Сделано студентами Яндекс Практикум
      </p>
    </app-flex-container>
  </footer>
</template>

<script>
import FlexContainer from '@/components/shared/FlexContainer';
import Navigation from '@/components/shared/Navigation';
import Title from '@/components/shared/Title';
import ShareBtn from '@/components/ui/ShareBtn';

export default {
  components: {
    'app-flex-container': FlexContainer,
    'app-navigation': Navigation,
    'app-title': Title,
    'app-share-btn': ShareBtn,
  },
  data() {
    return {
      theme: 'light',
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
}

.footer__title {
  max-width: 340px;
  margin-right: 102px;
}

.footer__row {
  margin-bottom: 110px;
}

.footer__info {
  display: flex;
}

.footer__copyright {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

.footer__socials {
  min-width: 300px;
  padding-left: 0;
  font-size: 18px;
  line-height: 24px;
  list-style: none;
}

.footer__socials-item {
  margin-bottom: 44px;
}

.footer__socials-item:last-of-type {
  margin-bottom: 0;
}

.footer__socials-link {
  text-decoration: none;
  color: inherit;
}

.footer__socials-link:hover {
  opacity: 0.8;
}
</style>
