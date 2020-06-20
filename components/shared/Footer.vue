<template>
  <footer class="footer">
    <app-container class="footer__row">
      <div class="footer__info">
        <h2 class="footer__title">
          {{ title }}
        </h2>
        <app-navigation class="footer__nav" />
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
          <app-share-btn class="footer__share-btn"></app-share-btn>
        </li>
      </ul>
    </app-container>
    <app-container class="footer__copyright">
      <p class="footer__copyright-info">Рак Лечится {{ year }}</p>
      <p class="footer__copyright-info">
        Сделано студентами
        <a
          href="https://www.notion.so/de0ecc64f8134e178448dcbc6382046e"
          class="footer__copyright-info-link"
          >Яндекс.Практикум</a
        >
      </p>
    </app-container>
  </footer>
</template>

<script>
import Container from '@/components/shared/Container';
import Navigation from '@/components/shared/Navigation';
import ShareBtn from '@/components/ui/ShareBtn';

export default {
  components: {
    'app-container': Container,
    'app-navigation': Navigation,
    'app-share-btn': ShareBtn,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    title() {
      return this.$store.getters['blocks/getBlocks'].footer.title;
    },
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
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.footer__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 110px;
}

.footer__info {
  display: flex;
}

.footer__copyright {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

.footer__nav {
  margin-right: 20px;
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
  border-bottom: 1px solid #000;
  transition: opacity 0.3s linear;
}

.footer__socials-link:hover {
  opacity: 0.8;
}

.footer__copyright-info-link {
  color: inherit;
}

.footer__copyright-info-link:hover {
  opacity: 0.8;
}

@media (max-width: 1280px) {
  .footer__row {
    margin-bottom: 104px;
  }

  .footer__socials {
    min-width: 265px;
  }

  .footer__title {
    max-width: 305px;
    margin-right: 102px;
    font-size: 28px;
    line-height: 32px;
  }

  .footer__socials-item {
    font-size: 16px;
    line-height: 24px;
  }

  .footer__copyright {
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  .footer__row {
    margin-bottom: 90px;
  }

  .footer__socials {
    min-width: 221px;
  }

  .footer__title {
    max-width: 288px;
    margin-right: 30px;
    font-size: 24px;
    line-height: 28px;
  }

  .footer__socials-item {
    margin-bottom: 30px;
  }
}

@media (max-width: 900px) {
  .footer__title {
    max-width: 255px;
  }
}

@media (max-width: 768px) {
  .footer__title {
    max-width: 268px;
  }

  .footer__socials-item {
    margin-bottom: 14px;
  }
}

@media (max-width: 670px) {
  .footer__row {
    display: block;
    margin-bottom: 50px;
  }

  .footer__info {
    display: block;
    margin-bottom: 18px;
  }

  .footer__title {
    max-width: 100%;
    margin-bottom: 50px;
    margin-right: 0;
  }

  .footer__copyright {
    display: block;
  }

  .footer__copyright-info {
    margin-bottom: 10px;
  }

  .footer__copyright-info:last-of-type {
    margin-bottom: 0;
  }
}

@media (max-width: 425px) {
  .footer__title {
    font-size: 18px;
    line-height: 21px;
  }

  .footer__socials-item {
    margin-bottom: 18px;
    font-size: 13px;
    line-height: 15px;
  }

  .footer__copyright {
    font-size: 13px;
    line-height: 18px;
  }
}
</style>
