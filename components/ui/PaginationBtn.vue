<template>
  <transition name="fade" mode="out-in" appear>
    <nuxt-link
      :to="{ path: '/stories', query: { page: index } }"
      aria-label="Показать следующее видео"
      :class="[
        'pagination-btn',
        `pagination-btn_theme_${theme}`,
        `pagination-btn_size_${size}`,
        `pagination-btn_direction_${direction}`,
        { 'pagination-btn_active': active },
      ]"
      :disabled="disabled"
    >
      <slot></slot>
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      default: '1',
    },
    theme: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'l',
    },
    direction: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.pagination-btn {
  display: flex;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  outline: none;
  justify-content: center;
  transition: all 0.3s linear;
  text-decoration: none;
  color: #000;
}

.pagination-btn:focus {
  outline: none;
}

.pagination-btn_size_l {
  width: 58px;
  height: 58px;
  line-height: 58px;
}

.pagination-btn_size_m {
  width: 40px;
  height: 40px;
  line-height: 40px;
}

.pagination-btn_size_content {
  width: initial;
  height: initial;
  margin: auto;
}

.pagination-btn_theme_default {
  background-color: #fbfbfb;
}

.pagination-btn_theme_transparent {
  background-color: transparent;
}

.pagination-btn_theme_transparent:hover {
  opacity: 0.6;
}

.pagination-btn_direction_right {
  background-image: url('~assets/images/black-arrow-right.svg');
  background-repeat: no-repeat;
  background-position: center;
  text-decoration: none;
  color: #000;
}

.pagination-btn_direction_left {
  background-image: url('~assets/images/black-arrow-right.svg');
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(180deg);
}

.pagination-btn_theme_default:hover {
  cursor: pointer;
  background-color: #f4f4f4;
}

.pagination-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.pagination-btn_theme_default:disabled:hover {
  background-color: #f1f1f1;
  cursor: default;
}

.pagination-btn_active {
  background-color: #613a93;
  color: #fff;
}

.pagination-btn_active:hover {
  background-color: #613a93;
  color: #fff;
}

@media (max-width: 1280px) {
  .pagination-btn_size_l {
    width: 56px;
    height: 56px;
    line-height: 56px;
  }
}

@media (max-width: 1024px) {
  .pagination-btn {
    font-size: 15px;
    line-height: 18px;
  }

  .pagination-btn_size_l {
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
}
</style>
