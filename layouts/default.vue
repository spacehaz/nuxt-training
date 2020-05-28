<template>
  <div class="root">
    <app-mobile-menu />
    <app-header />
    <nuxt />
    <app-footer class="root__footer" />
    <app-overlay v-if="isPopupShown" @click.native="closePopupUp" />
    <transition name="fade">
      <app-popup v-if="isPopupShown">
        <app-contact-us slot="contact-us" />
        <app-quiz slot="quiz" />
        <app-share-us slot="share-us" />
      </app-popup>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import Overlay from '@/components/ui/Overlay';
import Popup from '@/components/ui/Popup';
import Quiz from '@/components/blocks/Quiz';
import ContactUs from '@/components/blocks/ContactUs';
import ShareUs from '@/components/blocks/ShareUs';
import MobileMenu from '@/components/shared/MobileMenu';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-overlay': Overlay,
    'app-popup': Popup,
    'app-quiz': Quiz,
    'app-contact-us': ContactUs,
    'app-share-us': ShareUs,
    'app-mobile-menu': MobileMenu,
  },
  computed: {
    isPopupShown() {
      return this.$store.getters['popup/getPopupVisibility'];
    },
  },
  methods: {
    closePopupUp() {
      this.$store.dispatch('quiz/closeQuiz');
      this.$store.dispatch('contact-us/closeContactUs');
      this.$store.dispatch('share-us/closeShareUs');
      this.$store.commit('popup/togglePopupVisibility');
    },
  },
};
</script>

<style>
html {
  font-family: Inter, Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}

.root__footer {
  padding-top: 60px;
  padding-bottom: 60px;
}

@media (max-width: 1280px) {
  .root__footer {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
