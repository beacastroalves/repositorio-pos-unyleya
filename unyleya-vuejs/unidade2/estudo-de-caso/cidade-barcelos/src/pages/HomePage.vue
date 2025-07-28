<script setup>
import { defineProps } from 'vue';

defineProps({
  cityData: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <section class="home-page">
    <h2>Bem-vindo a {{ cityData.city }}!</h2>
    <img :src="cityData.image" :alt="cityData.city" class="city-image" />
    <p class="city-description">{{ cityData.description }}</p>
  </section>
</template>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
}

h2 {
  font-size: 1.8em;
  color: #333333;
  margin-bottom: 15px;
}

.city-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.city-description {
  font-size: 1em;
  color: #555555;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.5em;
  }

  .city-description {
    font-size: 1.1em;
  }
}
</style>
