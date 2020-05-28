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
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 334px;
  margin-top: calc(334px - 76px);
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
    margin-bottom: 238px;
    margin-top: calc(238px - 72px);
  }

  .error__message {
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 768px) {
  .error {
    margin-bottom: 400px;
    margin-top: calc(400px - 72px);
  }
}

@media (max-width: 425px) {
  .error {
    margin-bottom: 288px;
    margin-top: calc(288px - 64px);
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
