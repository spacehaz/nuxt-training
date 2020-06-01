<template>
  <div>
    <div class="error">
      <span class="error__status-code">404</span>
      <p class="error__message">
        <span class="error__page-not-found">Страница не найдена.</span>
        <nuxt-link to="/" class="error__redirect"
          >Перейти на главную.</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.error {
  margin: auto;
  padding: 100px 0;
  text-align: center;
}

.error__status-code {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 144px;
  line-height: 174px;
}

.error__message {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
}

.error__redirect {
  color: #000;
}

@media (max-width: 1280px) {
  .error {
    padding: 90px 0;
  }

  .error__message {
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 768px) {
  .error {
    padding: 80px 0;
  }
}

@media (max-width: 425px) {
  .error {
    padding: 50px 0;
  }
  .error__status-code {
    margin-bottom: 4px;
    font-size: 72px;
    line-height: 87px;
  }
  .error__message {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
