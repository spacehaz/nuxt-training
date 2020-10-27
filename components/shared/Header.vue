<template>
  <header class="header">
    <app-container class="header__container">
      <nuxt-link to="/" class="header__logo">
        <img class="header__icon" src="@/assets/images/logo.svg" />
      </nuxt-link>
      <div class="header__links">
        <app-navigation />
        <app-share-story-btn :theme="'main'" class="header__button" />
      </div>
      <app-mobile-icon class="header__mobile-icon" />
    </app-container>
  </header>
</template>

<script>
import Navigation from '@/components/shared/Navigation';
import MobileIcon from '@/components/ui/MobileIcon';
import Container from '@/components/shared/Container';
import ShareStoryBtn from '@/components/ui/ShareStoryBtn';

export default {
  components: {
    'app-navigation': Navigation,
    'app-mobile-icon': MobileIcon,
    'app-container': Container,
    'app-share-story-btn': ShareStoryBtn,
  },
  computed: {
    title() {
      return this.$store.getters['blocks/getBlocks'].header.title;
    },
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #e8e8e8;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 76px;
}

.header__logo {
  max-width: 400px;
  font-style: normal;
  padding-right: 20px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  line-height: 20px;
  text-decoration: none;
  color: #000000;
  transition: opacity 0.3s linear;
}

.header__logo:hover {
  opacity: 0.8;
  color: #121212;
}

.header__icon {
  margin-right: 18px;
  max-width: 200px;
}

.header__links {
  display: flex;
  align-items: center;
}

.header__button {
  margin-left: 40px;
}

.header__mobile-icon {
  display: none;
}

@media (max-width: 1280px) {
  .header__container {
    min-height: 72px;
    padding: 0 50px;
  }

  .header__icon {
  }
}

@media (max-width: 1024px) {
  .header__button {
    margin-left: 30px;
  }
}

@media screen and (max-width: 768px) {
  .header__links {
    display: none;
  }

  .header__mobile-icon {
    display: block;
  }
}

@media (max-width: 425px) {
  .header__container {
    min-height: 64px;
    padding: 0 15px;
  }

  .header__logo {
    max-width: 300px;
    font-size: 12px;
    line-height: 14px;
  }

  .header__icon {
    margin-right: 8px;
  }
}
</style>
