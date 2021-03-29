<template>
  <div class="your-story">
    <quiz class="your-story__quiz" />
  </div>
</template>

<script>
import Quiz from '@/components/blocks/Quiz';
export default {
  components: {
    quiz: Quiz,
  },
};
</script>

<style scoped>
.your-story {
  display: flex;
  justify-content: center;
  align-items: center;
}
.your-story__quiz {
  margin: 48px auto;
  border: 2px solid #613a93;
  border-radius: 4px;
  padding: 60px;
}
</style>
