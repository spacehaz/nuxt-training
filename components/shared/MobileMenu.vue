<template>
  <section class="dropdown" :style="dropdown">
    <app-container v-if="isMobileMenuOpened" class="mobile-menu" ref="menu">
      <div class="mobile-menu__links">
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <nuxt-link
                to="/"
                class="navigation__link"
                active-class="navigation__link_active"
                exact
              >
                Главная
              </nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link
                to="/stories"
                class="navigation__link"
                active-class="navigation__link_active"
              >
                Истории
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <app-share-story-btn :theme="'main'" class="mobile-menu__button" />
      </div>
    </app-container>
  </section>
</template>

<script>
import Container from '@/components/shared/Container';
import ShareStoryBtn from '@/components/ui/ShareStoryBtn';

export default {
  data() {
    return {
      dropdown: { height: 0 },
    };
  },
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/isMobileMenuOpened'];
    },
  },
  watch: {
    isMobileMenuOpened() {
      this.$nextTick(() => {
        if (!this.$refs.menu) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = `${this.$refs.menu.$el.clientHeight}px`;
        }
      });
    },
  },
  components: {
    'app-container': Container,
    'app-share-story-btn': ShareStoryBtn,
  },
};
</script>

<style scoped>
.mobile-menu {
  border-bottom: 1px solid #efefef;
}

.mobile-menu__links {
  display: flex;
  min-height: 60px;
  align-items: center;
}

.mobile-menu__button {
  margin-left: 30px;
}

.navigation__list {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.navigation__item {
  margin-right: 30px;
}

.navigation__item:last-of-type {
  margin-right: 0;
}

.navigation__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  text-decoration: none;
}

.navigation__link:hover {
  opacity: 0.8;
}

.navigation__link_active {
  border-bottom: 1px solid #000;
}

.dropdown {
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
}

@media (max-width: 768px) {
  .navigation__link {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 425px) {
  .mobile-menu__links {
    flex-direction: column;
    align-items: initial;
    padding: 18px 0;
  }

  .mobile-menu__button {
    margin-left: 0;
    margin-top: 18px;
  }

  .navigation__list {
    flex-direction: column;
  }

  .navigation__item {
    margin-bottom: 18px;
  }

  .navigation__item:last-of-type {
    margin-bottom: 0;
  }

  .navigation__link {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
