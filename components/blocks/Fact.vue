<template>
  <div class="fact">
    <p class="fact__number">{{ fact.summary }}</p>
    <div class="fact__container">
      <div class="fact__bars">
        <!--        <app-progress-bar-->
        <!--          :currentValue="fact.currentValue"-->
        <!--          :maxValue="fact.maxValue"-->
        <!--        />-->
        <img :src="image" :alt="fact.description" class="fact__image" />
      </div>
      <p class="fact__text">{{ fact.description }}</p>
      <p class="fact__source">{{ fact.source }}</p>
    </div>
  </div>

  <!--  <div class="fact" v-else>-->
  <!--    <p class="fact__text">-->
  <!--      {{ fact.description }}-->
  <!--    </p>-->
  <!--    <div class="fact__container">-->
  <!--      <div class="fact__bars">-->
  <!--        <app-double-progress-bar-->
  <!--          :previousValue="fact.oldValue"-->
  <!--          :currentValue="fact.currentValue"-->
  <!--          :maxValue="fact.maxValue"-->
  <!--        />-->
  <!--      </div>-->
  <!--      <p class="fact__number">{{ fact.summary }}</p>-->
  <!--      <p class="fact__source">{{ fact.source }}</p>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import Flex from '@/components/shared/Flex';
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';

export default {
  props: {
    fact: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  components: {
    'app-flex': Flex,
    'app-progress-bar': ProgressBar,
    'app-double-progress-bar': DoubleProgressBar,
  },
};
</script>

<style scoped>
.fact {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  min-height: 300px;
  border: 1px solid #efefef;
}

.fact__text {
  font-size: 12px;
  line-height: 16px;
}

.fact__number {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 40px;
}

.fact__source {
  font-size: 12px;
  line-height: 16px;
  color: #666;
}

.fact__bars {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.fact__image {
  width: 100%;
  height: 120px;
  object-fit: contain;
  object-position: center;
}

.fact__container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 1280px) {
  .fact {
    padding: 18px;
    min-height: 265px;
  }
}

@media (max-width: 1150px) {
  .fact {
    min-height: 245px;
  }

  .fact__number {
    font-size: 26px;
    line-height: 30px;
  }
}

@media (max-width: 1024px) {
  .fact {
    padding: 10px;
    min-height: 208px;
  }

  .fact__text {
    font-size: 10px;
    line-height: 14px;
  }

  .fact__number {
    margin-bottom: 10px;
  }

  .fact__source {
    font-size: 10px;
    line-height: 14px;
  }

  .fact__bars {
    margin-bottom: 10px;
  }
}

@media (max-width: 810px) {
  .fact {
    padding: 10px;
    min-height: 216px;
    min-width: 216px;
  }
}
</style>
