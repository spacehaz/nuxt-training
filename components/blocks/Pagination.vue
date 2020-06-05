<template>
  <div class="pagination">
    <template v-if="storiesLength !== 0">
      <div class="pagination__default-container">
        <ul class="pagination__list">
          <li class="pagination__item">
            <app-pagination-btn
              theme="transparent"
              size="content"
              @click.native="setFirstPageGroup"
              :disabled="firstRecordDisabled"
              >Первая</app-pagination-btn
            >
          </li>
          <li class="pagination__item">
            <app-pagination-btn
              theme="transparent"
              direction="left"
              @click.native="previousPageGroup"
            ></app-pagination-btn>
          </li>
        </ul>
        <ul class="pagination__list">
          <li class="pagination__item" v-for="index in pages" :key="index">
            <app-pagination-btn
              :active="index === currentPage"
              @click.native="changeCurrentPage(index)"
            >
              {{ index }}
            </app-pagination-btn>
          </li>
        </ul>
        <ul class="pagination__list">
          <li class="pagination__item">
            <app-pagination-btn
              theme="transparent"
              direction="right"
              @click.native="nextPageGroup"
            ></app-pagination-btn>
          </li>
          <li class="pagination__item">
            <app-pagination-btn
              theme="transparent"
              size="content"
              @click.native="setLastPageGroup"
              :disabled="finalRecordDisabled"
              >Последняя</app-pagination-btn
            >
          </li>
        </ul>
      </div>
      <div class="pagination__mobile-container">
        <div class="pagination__mobile-container-top">
          <ul class="pagination__list">
            <li class="pagination__item">
              <app-pagination-btn
                theme="transparent"
                direction="left"
                @click.native="previousPageGroup"
              ></app-pagination-btn>
            </li>
          </ul>
          <ul class="pagination__list">
            <li class="pagination__item" v-for="index in pages" :key="index">
              <app-pagination-btn
                :active="index === currentPage"
                @click.native="changeCurrentPage(index)"
              >
                {{ index }}
              </app-pagination-btn>
            </li>
          </ul>
          <ul class="pagination__list">
            <li class="pagination__item">
              <app-pagination-btn
                theme="transparent"
                direction="right"
                @click.native="nextPageGroup"
              ></app-pagination-btn>
            </li>
          </ul>
        </div>
        <div class="pagination__mobile-container-bottom">
          <ul class="pagination__list">
            <li class="pagination__item">
              <app-pagination-btn
                theme="transparent"
                size="content"
                @click.native="setFirstPageGroup"
                :disabled="firstRecordDisabled"
                >Первая</app-pagination-btn
              >
            </li>
          </ul>
          <ul class="pagination__list">
            <li class="pagination__item">
              <app-pagination-btn
                theme="transparent"
                size="content"
                @click.native="setLastPageGroup"
                :disabled="finalRecordDisabled"
                >Последняя</app-pagination-btn
              >
            </li>
          </ul>
        </div>
      </div>
    </template>
    <div class="pagination__error-message-block" v-else>
      <p class="pagination__error-message-title">Ничего не найдено</p>
      <p class="pagination__error-message-text">Попробуйте еще раз.</p>
    </div>
  </div>
</template>

<script>
import PaginationBtn from '@/components/ui/PaginationBtn.vue';

export default {
  components: {
    'app-pagination-btn': PaginationBtn,
  },
  data() {
    return {
      //текущая страница пагинации
      currentPage: 1,
      //стартовый индекс пагинации
      startIndex: 1,
    };
  },
  methods: {
    //как только клацаем по кнопке меняем переходим на страницу историй
    //соответствующих позиции пагинизации
    changeCurrentPage(index) {
      this.currentPage = index;
      this.$store.dispatch('stories/changeStoriesPage', {
        page: this.currentPage,
      });
    },
    //получить следующую пачку кнопок навигации
    nextPageGroup() {
      this.startIndex = Math.min(
        this.startIndex + this.navBtnsQuantity,
        this.storiesLength - this.navBtnsQuantity + 1
      );
    },
    //получить предыдущую пачку кнопок навигации
    previousPageGroup() {
      this.startIndex = Math.max(this.startIndex - this.navBtnsQuantity, 1);
    },
    //уйти на первую страницу
    setFirstPageGroup() {
      this.startIndex = 1;
      this.changeCurrentPage(1);
    },
    //уйти на последнюю страницу
    setLastPageGroup() {
      this.startIndex = Math.max(
        this.storiesLength - this.navBtnsQuantity + 1,
        1
      );
      this.changeCurrentPage(this.storiesLength);
    },
  },
  computed: {
    //максимально возможное количество кнопок
    storiesLength() {
      return Math.ceil(
        this.$store.getters['stories/getStoriesQuantity'] / this.storiesPerPage
      );
    },
    //сколько история показывать на странице
    storiesPerPage() {
      return this.$store.getters['stories/getStoriesPerPage'];
    },
    //сколько пагинация будет содержать кнопок за раз
    navBtnsQuantity() {
      if (process.browser) {
        if (window.innerWidth <= 600) {
          return Math.min(3, this.storiesLength);
        } else if (window.innerWidth <= 768) {
          return Math.min(4, this.storiesLength);
        } else {
          return Math.min(5, this.storiesLength);
        }
      }
    },
    //индекс самой правой видимой кнопки в пагинации
    finalIndex() {
      return Math.min(
        this.startIndex + this.navBtnsQuantity - 1,
        this.storiesLength
      );
    },
    //массив для отрисовки кнопок в разметке
    pages() {
      const arrToReturn = [];
      for (let i = this.startIndex; i <= this.finalIndex; i++) {
        arrToReturn.push(i);
      }
      return arrToReturn;
    },
    //дизейбл "первая", если мы и так на первой странице пагинации
    firstRecordDisabled() {
      return this.currentPage === 1;
    },
    //дизейбл "последняя", если мы и так на первой странице пагинации
    finalRecordDisabled() {
      return this.currentPage === this.storiesLength;
    },
  },
};
</script>

<style scoped>
.pagination__default-container {
  display: flex;
  flex-wrap: wrap;
}
.pagination__list {
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.pagination__item {
  margin-right: 10px;
}

.pagination__item:last-of-type {
  margin-right: 0;
}

.pagination__mobile-container {
  display: none;
}

.pagination__error-message-block {
  margin-top: 40px;
}

.pagination__error-message-title {
  font-size: 48px;
  line-height: 58px;
}

.pagination__error-message-text {
  margin-top: 40px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}

@media (max-width: 568px) {
  .pagination__default-container {
    display: none;
  }
  .pagination__mobile-container {
    display: block;
  }
  .pagination__mobile-container-top {
    display: flex;
    margin-bottom: 34px;
  }
  .pagination__mobile-container-bottom {
    display: flex;
    justify-content: space-between;
  }

  .pagination__error-message-block {
    margin-top: 0;
  }

  .pagination__error-message-title {
    font-size: 24px;
    line-height: 29px;
  }

  .pagination__error-message-text {
    margin-top: 15px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
