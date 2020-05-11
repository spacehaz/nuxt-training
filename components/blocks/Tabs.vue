<template>
  <div class="tabs">
    <ul class="tabs__variants">
      <li
        :class="[
          'tabs__variant',
          `tabs__variant_theme_${theme}`,
          currentVariant === variants.indexOf(variant)
            ? 'tabs__variant_active'
            : '',
        ]"
        v-for="variant in variants"
        :key="variant.id"
        @click="changeVariant(variant)"
      >
        {{ variant.title }}
      </li>
    </ul>
    <div :class="['tabs__container', `tabs__container_theme_${theme}`]">
      <p
        class="tabs__variant-text"
        v-for="(paragraph, index) in variants[currentVariant].texts"
        :key="index"
      >
        {{ paragraph }}
      </p>
      <app-button
        :size="size"
        class="tabs__btn"
        v-if="variants[currentVariant].hasOwnProperty('buttonText')"
      >
        {{ variants[currentVariant].buttonText }}
      </app-button>
    </div>
  </div>
</template>

<script>
import Button from '../ui/Button';

export default {
  components: {
    'app-button': Button,
  },
  props: {
    theme: String,
    variants: Array,
  },
  data() {
    return {
      currentVariant: 0,
      size: 'm',
    };
  },
  methods: {
    changeVariant(variant) {
      this.currentVariant = this.variants.indexOf(variant);
    },
  },
};
</script>

<style scoped>
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
  margin-bottom: 36px;
}

.tabs__variant-text:last-of-type {
  margin-bottom: 0;
}

.tabs__btn {
  margin-top: 78px;
}

/* Светлая тема */
.tabs__variant_theme_light {
  color: #a2a2a2;
}

.tabs__variant_theme_light.tabs__variant_active {
  color: #000;
}

.tabs__variant_theme_light:hover {
  color: #000;
}

.tabs__container_theme_light {
  color: #666;
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
</style>
