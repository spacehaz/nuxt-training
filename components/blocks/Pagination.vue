<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <a href="#" class="pagination__link pagination__link_active">
          1
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          2
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          3
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          4
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          5
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          6
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          7
        </a>
      </li>
    </ul>
  </nav>
</template>

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
}

.pagination__link:hover {
  background-color: #f8f8f8;
}

.pagination__link_active {
  background-color: #f4f4f4;
}
</style>
