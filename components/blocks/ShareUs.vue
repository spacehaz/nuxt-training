<template>
  <div class="share-us">
    <app-title class="share-us__title" theme="light">Поделитесь</app-title>
    <ul class="share-us__items">
      <li class="share-us__item">
        <app-fb class="share-us__item-link" :href="socialsLink.facebook" />
      </li>
      <li class="share-us__item">
        <app-twitter class="share-us__item-link" :href="socialsLink.twitter" />
      </li>
      <li class="share-us__item">
        <app-vk class="share-us__item-link" :href="socialsLink.vk" />
      </li>
      <li class="share-us__item">
        <app-odnoklassniki
          class="share-us__item-link"
          :href="socialsLink.odnoklassniki"
        />
      </li>
      <li class="share-us__item">
        <app-instagram
          class="share-us__item-link"
          :href="socialsLink.instagram"
        />
      </li>
      <li class="share-us__item">
        <app-youtube
          href="#"
          class="share-us__item-link"
          :href="socialsLink.youtube"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Fb from '@/components/ui/socials-icons/Fb';
import Instagram from '@/components/ui/socials-icons/Instagram';
import Odnoklassniki from '@/components/ui/socials-icons/Odnoklassniki';
import Twitter from '@/components/ui/socials-icons/Twitter';
import Youtube from '@/components/ui/socials-icons/Youtube';
import Vk from '@/components/ui/socials-icons/Vk';
import Title from '@/components/shared/Title';
export default {
  components: {
    'app-title': Title,
    'app-fb': Fb,
    'app-instagram': Instagram,
    'app-odnoklassniki': Odnoklassniki,
    'app-twitter': Twitter,
    'app-youtube': Youtube,
    'app-vk': Vk,
  },
  data() {
    return {
      size: 's',
      theme: 'light',
      socialsLink: {
        instagram: 'https://www.instagram.com/raklechitsa/',
        youtube:
          'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
        facebook: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
          window.location.href
        )}&title=${document.querySelector('title').innerText}`,
        vk: `https://vk.com/share.php?url=${encodeURI(
          window.location.href
        )}&title=${document.querySelector('title').innerText}`,
        odnoklassniki: `https://connect.ok.ru/offer?url=${encodeURI(
          window.location.href
        )}&amp;title=${document.querySelector('title').innerText}`,
        twitter: `https://twitter.com/intent/tweet?text=${
          document.querySelector('title').innerText
        }&url=${encodeURI(window.location.href)}`,
      },
    };
  },
  mounted() {
    this.$store.dispatch('popup/setContentValid');
  },
};
</script>

<style scoped>
.share-us {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 840px;
}
.share-us__title {
  margin: 0 auto;
}
.share-us__items {
  display: flex;
  justify-content: center;
  padding: 0;
  padding-top: 100px;
  padding-bottom: 60px;
  list-style-type: none;
}
.share-us__item {
  display: flex;
  margin-right: 20px;
}
.share-us__item:hover {
  opacity: 0.8;
}
.share-us__item:last-of-type {
  margin-right: 0;
}
.share-us__item-link {
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-position: center;
}
@media screen and (max-width: 1280px) {
  .share-us {
    width: 720px;
  }
}
@media screen and (max-width: 900px) {
  .share-us {
    width: 80vw;
  }
}
@media screen and (max-width: 900px) {
  .share-us {
    width: 77vw;
  }
}
@media screen and (max-width: 425px) {
  .share-us {
    width: 86vw;
  }
}
@media screen and (max-width: 425px) {
  .share-us {
    width: 86vw;
  }
}
@media screen and (max-width: 320px) {
  .share-us {
    width: 81vw;
  }
}
@media screen and (max-width: 425px) {
  .share-us__items {
    padding-top: 60px;
    padding-bottom: 45px;
  }
}
@media screen and (max-width: 1280px) {
  .share-us__title {
    font-size: 32px;
    line-height: 36px;
  }
}
@media screen and (max-width: 425px) {
  .share-us__title {
    font-size: 18px;
    line-height: 21px;
  }
}
@media screen and (max-width: 425px) {
  .share-us__item {
    margin-right: 15px;
  }
}
@media screen and (max-width: 425px) {
  .share-us__item-link {
    width: 35px;
    height: 35px;
    background-size: 65% 65%;
  }
}
</style>
