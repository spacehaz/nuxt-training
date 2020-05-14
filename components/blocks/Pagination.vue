<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item" v-for="index in buttonsCount" :key="index">
        <button
          class="pagination__link"
          :class="{ pagination__link_active: index === currentPage }"
          @click="changeCurrentPage(index)"
        >
          {{ index }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    storiesCount: {
      type: Number,
      required: true,
    },
    storiesPerPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    changeCurrentPage(index) {
      this.currentPage = index;
    },
  },
  computed: {
    buttonsCount() {
      if (this.storiesCount % this.storiesPerPage === 0) {
        return this.storiesCount / this.storiesPerPage;
      } else {
        return Math.floor(this.storiesCount / this.storiesPerPage) + 1;
      }
    },
  },
};
</script>

<style scoped>
.pagination__list {
  padding: 0;
  list-style: none;
  display: flex;
}

.pagination__item {
  margin-right: 10px;
}

.pagination__item:last-of-type {
  margin-right: 0;
}

.pagination__link {
  display: inline-block;
  width: 58px;
  height: 58px;
  font-weight: 500;
  font-size: 18px;
  line-height: 58px;
  color: #000000;
  margin: auto;
  text-decoration: none;
  background-color: #fbfbfb;
  text-align: center;
  border: 0;
  cursor: pointer;
}

.pagination__link:hover {
  background-color: #f8f8f8;
}

.pagination__link_active {
  background-color: #f4f4f4;
}

.pagination__link_active:hover {
  background-color: #f4f4f4;
}
</style>
